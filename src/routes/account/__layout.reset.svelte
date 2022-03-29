<script>
	import '../../app.css';
	import { onMount } from 'svelte';
	import { USER, TOKEN } from '../../services/Store';
	import API from '../../services/Api';

	const LOGGED = async () => {
		let execute = API.get('profile');
		return execute;
	};

	onMount(async () => {
		let data = await LOGGED();
		if (data.error == true) {
			USER.set({});
			TOKEN.set('');
			window.location.assign('/login');
		}
		if (data.error == false) {
			USER.set(data.data[0]);
			TOKEN.set(data.data[1]);
		}
	});

	const MENU_OPEN = () => {
		document.getElementById('mobilemenu').style.display = 'block';
	};
	const MENU_CLOSE = () => {
		document.getElementById('mobilemenu').style.display = 'none';
	};
</script>

<div class="flex justify-start items-start relative">
	<div class="hidden md:block md:w-1/4 lg:w-1/5 xl:w-1/6 relative">
		<div class="w-full bg-black fixed top-0 left-0 min-h-screen">
			<p class="my-12 top-0 mx-12">
				<img src="/img/logo-white.png" alt="Logo" class="w-32 h-12" />
			</p>
			<ul class="mt-8">
				<li class="mb-6 ml-8 p-4">
					<a href="/account" class="text-gray-100 text-xl font-medium"> Overview</a>
				</li>
				<li class="mb-6 ml-8 p-4">
					<a href="/account/bookings" class="text-gray-100 text-xl font-medium"> Bookings</a>
				</li>
				<li class="mb-6 ml-8 p-4">
					<a href="/account/wallet" class="text-gray-100 text-xl font-medium"> Wallet</a>
				</li>
				<li class="mb-6 ml-8 p-4">
					<a href="/account/referrals" class="text-gray-100 text-xl font-medium"> Referrals</a>
				</li>
				<li class="mb-6 ml-8 p-4">
					<a href="/account/profile" class="text-gray-100 text-xl font-medium"> Profile</a>
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
									<span class="font-semibold text-xl text-gray-600">{$USER.fullname}</span>
								</div>
								<div class="w-16 h-16 border border-gray-400 rounded-full p-1">
									<img src="https://avatars.dicebear.com/api/adventurer-neutral/{$USER.fullname}.svg" class="w-full h-full rounded-full" alt="avatar" />
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
					<a on:click={MENU_CLOSE} href="/account" class="block text-center text-gray-100 font-semibold text-3xl">Overview</a>
				</li>
				<li class="flex justify-center items-start mb-12">
					<a on:click={MENU_CLOSE} href="/account/bookings" class="block text-center text-gray-100 font-semibold text-3xl">Bookings</a>
				</li>
				<li class="flex justify-center items-start mb-12">
					<a on:click={MENU_CLOSE} href="/account/wallet" class="block text-center text-gray-100 font-semibold text-3xl">Wallet</a>
				</li>
				<li class="flex justify-center items-start mb-12">
					<a on:click={MENU_CLOSE} href="/account/referrals" class="block text-center text-gray-100 font-semibold text-3xl">Referrals</a>
				</li>
				<li class="flex justify-center items-start mb-12">
					<a on:click={MENU_CLOSE} href="/account/profile" class="block text-center text-gray-100 font-semibold text-3xl">Profile</a>
				</li>
			</ul>
		</div>
		<div
			class="bottom-0 mb-8 mx-auto text-center text-orange-400 font-semibold text-3xl pt-4 border-t-4 border-white cursor-pointer"
			on:click={MENU_CLOSE}
		>
			Close
		</div>
	</div>
</div>
