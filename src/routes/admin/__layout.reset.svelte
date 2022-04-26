<script>
	import '../../app.css';
	import { onMount } from 'svelte';
	import { USER, TOKEN } from '../../services/Store';
	import API from '../../services/Api';
	import { browser } from '$app/env';

	const LOGGED = async () => {
		let execute = API.get('profile');
		return execute;
	};

	onMount(async () => {
		let data = await LOGGED();
		if (data.error == true) {
			if (browser) {
				window.localStorage.removeItem('token');
				window.localStorage.removeItem('user');
				window.location.assign('/login');
			}
		}
		if (data.error == false) {
			if (data.data[0].type == 'admin') {
				USER.set(data.data[0]);
				TOKEN.set(data.data[1]);
			} else {
				if (browser) {
					window.localStorage.removeItem('token');
					window.localStorage.removeItem('user');
					window.location.assign('/login');
				}
			}
		}
	});

	const MENU_OPEN = () => {
		document.getElementById('mobilemenu').style.display = 'block';
	};
	const MENU_CLOSE = () => {
		document.getElementById('mobilemenu').style.display = 'none';
	};

	const LOGOUT = () => {
		if (browser) {
			window.localStorage.removeItem('token');
			window.localStorage.removeItem('user');
			window.location.assign('/login');
		}
	};

	onMount(() => {
		if (browser) {
			let token = window.localStorage.getItem('token');
			if (token == 'undefined' || token == undefined || token == '') {
				window.localStorage.removeItem('token');
				window.localStorage.removeItem('user');
				window.location.assign('/login');
			}
		}
	});
</script>

{#if $USER}
	<div class="flex justify-start items-start relative">
		<div class="hidden md:block md:w-1/4 lg:w-1/5 xl:w-1/6 relative">
			<div class="w-full bg-black fixed top-0 left-0 min-h-screen">
				<p class="my-12 top-0 mx-12">
					<img src="/img/logo-white.png" alt="Logo" class="w-32 h-12" />
				</p>
				<ul class="mt-8">
					<li class="mb-6 ml-8 p-4">
						<a href="/admin" class="text-gray-100 text-xl font-medium"> Dashboard</a>
					</li>
					<li class="mb-6 ml-8 p-4">
						<a href="/admin/bookings" class="text-gray-100 text-xl font-medium"> Bookings</a>
					</li>
					<li class="mb-6 ml-8 p-4">
						<a href="/admin/agents" class="text-gray-100 text-xl font-medium"> Agents</a>
					</li>
					<li class="mb-6 ml-8 p-4">
						<a href="/admin/users" class="text-gray-100 text-xl font-medium"> Users</a>
					</li>
					<li class="mb-6 ml-8 p-4">
						<a href="/admin/profile" class="text-gray-100 text-xl font-medium"> Profile</a>
					</li>
					<li class="mb-6 ml-8 p-4">
						<a on:click={LOGOUT} href="#" class="text-gray-100 text-xl font-medium"> Logout</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="w-full md:w-3/4 lg:w-4/5 xl:w-5/6 relative">
			<div class="min-h-screen bg-gray-100">
				<div class="pt-24 md:pt-8 mx-4 sm:mx-8 md:mx-16">
					<div>
						<div class="block sm:flex sm:justify-between sm:items-center">
							<div class="flex justify-start items-start mb-4">
								<h2 class="font-bold text-gray-600 text-2xl">Welcome Back!</h2>
							</div>
							<div class="flex justify-end items-center mb-4">
								<div class="flex justify-start items-center">
									<div class="mx-6">
										<span class="font-light text-xl text-gray-600">{$USER.fullname}</span>
									</div>
									<div class="w-16 h-16 border border-gray-400 rounded-full p-1">
										<img
											src="https://avatars.dicebear.com/api/adventurer-neutral/{$USER.fullname}.svg"
											class="w-full h-full rounded-full"
											alt="avatar"
										/>
									</div>
								</div>
							</div>
						</div>
						<slot />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="md:hidden -top-6 -left-10 fixed flex justify-between items-center cursor-pointer">
		<div class="bg-black rounded-full w-24 h-24" on:click={MENU_OPEN}>
			<div class="text-gray-100 text-sm font-bold pt-10 px-10 text-center block">MENU</div>
		</div>
		<div class="m-8">
			<img src="/img/logo-white.png" alt="Logo" class="w-32 h-12 mx-auto" />
		</div>
	</div>

	<div class="block md:hidden">
		<div class="hidden fixed top-0 z-50 min-h-screen w-screen bg-black mx-auto" id="mobilemenu">
			<div class="mt-24 flex justify-center items-center">
				<ul class="p-4">
					<li class="flex justify-center items-start mb-12">
						<a
							on:click={MENU_CLOSE}
							href="/admin"
							class="block text-center text-gray-100 font-light text-3xl">Dashboard</a
						>
					</li>
					<li class="flex justify-center items-start mb-12">
						<a
							on:click={MENU_CLOSE}
							href="/admin/bookings"
							class="block text-center text-gray-100 font-light text-3xl">Bookings</a
						>
					</li>
					<li class="flex justify-center items-start mb-12">
						<a
							on:click={MENU_CLOSE}
							href="/admin/agents"
							class="block text-center text-gray-100 font-light text-3xl">Agents</a
						>
					</li>
					<li class="flex justify-center items-start mb-12">
						<a
							on:click={MENU_CLOSE}
							href="/admin/users"
							class="block text-center text-gray-100 font-light text-3xl">Users</a
						>
					</li>
					<li class="flex justify-center items-start mb-12">
						<a
							on:click={MENU_CLOSE}
							href="/admin/profile"
							class="block text-center text-gray-100 font-light text-3xl">Profile</a
						>
					</li>
					<li class="flex justify-center items-start mb-12">
						<a
							on:click={LOGOUT}
							href="#"
							class="block text-center text-gray-100 font-light text-3xl"
						>
							Logout</a
						>
					</li>
				</ul>
			</div>
			<div
				class="bottom-0 mb-8 mx-auto text-center text-orange-400 font-light text-3xl pt-4 border-t-4 border-white cursor-pointer"
				on:click={MENU_CLOSE}
			>
				Close
			</div>
		</div>
	</div>
{/if}
