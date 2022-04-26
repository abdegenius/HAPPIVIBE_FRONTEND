<script>
	import API from '../../services/Api';
	import { CURRENCY } from '../../services/Helper';
	import { onMount } from 'svelte';
	let users;
	$: users = null;

	const USERS = async (link) => {
		let execute = await API.get(`admin/users${link ? link : ""}`);
		users = null;
		users = execute.data[0]
	};

	onMount(async () => {
		USERS();
	});
	const CHANGE= (url) => {
		let link = url.substring(url.indexOf('?'));
		USERS(link)
	}

	
</script>

{#if users != null}
	<div class="grid grid-cols-1 mt-12">
		<div class="bg-white border-2 border-gray-200 rounded-lg">
			<div class="p-8 border-2 border-gray-200">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h3 class="font-bold text-xl text-orange-400">All Users</h3>
					</div>
					<div>
						<input
							class="w-full p-4 border border-gray-800 rounded-lg"
							type="text"
							placeholder=" Search "
						/>
					</div>
				</div>
				<div class="overflow-x-scroll">
					<div class="flex pt-4 justify-start items-center">
						<div class="w-[150px] md:w-1/5 mr-6">
							<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg"
								>Fullname</span
							>
						</div>
						<div class="w-[250px] md:w-1/5 mr-6">
							<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg"
								>Email</span
							>
						</div>
						<div class="w-[150px] md:w-1/5 mr-6">
							<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg"
								>Phone</span
							>
						</div>
						<div class="w-[150px] md:w-1/5 mr-6">
							<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg">Country</span
							>
						</div>
						<div class="w-[150px] md:w-1/5 mr-6">
							<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg"
								>Location</span
							>
						</div>
					</div>
				</div>
			</div>

			<div class="overflow-x-scroll">
				{#each users.data as user}
					<a href="/admin/user/{user.order_id}">
						<div class="mt-4 flex p-8 justify-start items-center border-b-2 border-gray-200">
							<div class="w-[150px] md:w-1/5 mr-6">
								<span class="text-gray-600 uppercase font-medium text-[12px] md:text-sm xl:text-lg"
									>{user.fullname}</span
								>
							</div>
							<div class="w-[250px] md:w-1/5 mr-6">
								<span class="text-gray-600 capitalize font-medium text-[12px] md:text-sm xl:text-lg"
									>{user.email}</span
								>
							</div>
							<div class="w-[150px] md:w-1/5 mr-6">
								<span class="text-gray-600 font-medium text-[12px] md:text-sm xl:text-lg"
									>{user.phone}</span
								>
							</div>
							<div class="w-[150px] md:w-1/5 mr-6">
								<span class="text-gray-600 font-medium text-[12px] md:text-sm xl:text-lg"
									>{user.country}</span
								>
							</div>
							<div class="w-[150px] md:w-1/5 mr-6">
								<span class="text-gray-600 font-medium text-[12px] md:text-sm xl:text-lg"
									>{user.location}</span
								>
							</div>
						</div>
					</a>
				{/each}
			</div>

			{#if users.links}
				<div class="my-4 flex justify-start items-center space-x-4">
					{#each users.links as link}
						<div on:click={CHANGE(link.url)} class="cursor-pointer p-2 text-sm font-black border-2 border-gray-400 text-gray-600 rounded-md {link.active ? 'bg-orange-400' : 'bg-gray-50'}">
							{@html link.label}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}
