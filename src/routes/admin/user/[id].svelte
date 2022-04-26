<script>
	import API from '../../../services/Api';
	import { CURRENCY } from '../../../services/Helper';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/env';

	let id = $page.params.id;
	const USER = async () => {
		let execute = API.get('admin/user/' + id);
		return execute;
	};
	let user = null;
	let type = '';
	let account_balance = '';
	let password = '';
	onMount(async () => {
		let data = await USER();
		user = data.data[0];
		type = user.type;
		account_balance = user.wallet.account_balance;
	});

	const UPDATE = async () => {
		let execute = await API.post('admin/edit/user', {
			id,
			type
		});
		if (execute.error == false) {
			if (browser) {
				alert('User updated..');
			}
		} else {
			if (browser) {
				alert('User not updated..');
			}
		}
	};
</script>

{#if user != null}
	<div class="mb-6 flex flex-wrap justify-start md:justify-end items-center">
		<a
			href="/admin/users"
			class="text-center block m-2 text-lg md:text-xl font-normal py-2 px-4 md:py-4 md:px-6 rounded-lg text-white bg-black"
			>Back to users</a
		>
	</div>

	<div class="flex justify-center items-center mx-4 mt-12">
		<div class="w-full p-4 max-w-[600px] bg-white border-2 border-gray-200 rounded-lg">
			<h1
				class="text-center font-black text-2xl pb-4 border-b-4 border-dashed border-orange-400 mb-4"
			>
				User Details
			</h1>
			<ul class="p-4">
				<li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
					<div class="mr-2">
						<b class="text-black text-md font-semibold">Fullname: </b>
					</div>
					<div class="">
						<b class="text-gray-800 text-md font-normal capitalize"
							>{user.salutation + ' ' + user.fullname}
						</b>
					</div>
				</li>
				<li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
					<div class="mr-2">
						<b class="text-black text-md font-semibold">Phone No: </b>
					</div>
					<div class="">
						<b class="text-gray-800 text-md font-normal">{user.phone} </b>
					</div>
				</li>
				<li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
					<div class="mr-2">
						<b class="text-black text-md font-semibold">Location: </b>
					</div>
					<div class="">
						<b class="text-gray-800 text-md font-normal capitalize">{user.location} </b>
					</div>
				</li>
				<li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
					<div class="mr-2">
						<b class="text-black text-md font-semibold">Country: </b>
					</div>
					<div class="">
						<b class="text-gray-800 text-md font-normal capitalize">{user.country} </b>
					</div>
				</li>
				<li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
					<div class="mr-2">
						<b class="text-black text-md font-semibold">Gender: </b>
					</div>
					<div class="">
						<b class="text-gray-800 text-md font-normal capitalize">{user.gender} </b>
					</div>
				</li>
				<li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
					<div class="mr-2">
						<b class="text-black text-md font-semibold">Marital Status: </b>
					</div>
					<div class="">
						<b class="text-gray-800 text-md font-normal capitalize">{user.marital_status} </b>
					</div>
				</li>
			</ul>
			<div class="bg-gray-200 w-full p-4">
				<form method="POST" on:submit|preventDefault={UPDATE}>
					<div class="">
						<div class="w-full mb-4">
							<label>Account type</label><br />
							<select
								bind:value={type}
								class="outline-none w-full border-2 border-orange-400 rounded-lg p-4 text-lg bg-white text-gray-600"
							>
								<option value="admin">admin</option>
								<option value="agent">agent</option>
								<option value="user">user</option>
							</select>
						</div>
						<div class="w-full mb-4">
							<label>Account balance</label><br />
							<input
								type="text"
								bind:value={account_balance}
								placeholder="Account Balance"
								autocomplete="off"
								class="outline-none w-full border-2 border-orange-400 rounded-lg p-4 text-lg bg-white text-gray-600"
							/>
						</div>
						<div class="w-full mb-4">
							<label>Password</label><br />
							<input
								type="password"
								bind:value={password}
								placeholder="New Password"
								autocomplete="off"
								class="outline-none w-full border-2 border-orange-400 rounded-lg p-4 text-lg bg-white text-gray-600"
							/>
						</div>
						<div class="w-full">
							<button
								type="submit"
								class="rounded-md block bg-orange-400 p-4 text-center text-white">UPDATE</button
							>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}
