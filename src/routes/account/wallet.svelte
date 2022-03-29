<script>
    import API from "../../services/Api"
    import CURRENCY from "../../services/Helper"
    import {onMount} from "svelte"
    const BALANCE = async () => {
		let execute = API.get('get-balance');
		return execute;
	};
    let balance = null;
    onMount(async() => {
        let data = await BALANCE();
        balance = data.data[0]
    })
</script>
{#if balance != null}
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
	<div class="bg-white mt-4 drop-shadow-md rounded-md shadow-sm p-6 w-full h-auto">
		<h3 class="text-xl font-bold text-gray-600 text-left mb-4">Account Balance</h3>
		<h1 class="text-4xl font-black text-orange-400 text-left mb-4">{CURRENCY(balance.account_balance)}</h1>
		<div class="flex justify-end items-end">
			<a
				href="/account/topup"
				class="text-center text-lg font-normal py-2 px-6 rounded-lg text-white bg-black"
				> Top Up</a
			>
		</div>
	</div>

	<div class="bg-orange-400 mt-4 drop-shadow-md rounded-md shadow-sm p-6 w-full h-auto">
		<h3 class="text-xl font-bold text-gray-100 text-left mb-4">Referral Balance</h3>
		<h1 class="text-4xl font-black text-white text-left mb-4">{CURRENCY(balance.referral_balance)}</h1>
		<div class="flex justify-end items-end">
			<a
				href="/account/referrals"
				class="text-center text-lg font-normal py-2 px-6 rounded-lg text-white bg-black"
				> Refer Now</a
			>
		</div>
	</div>
</div>
{/if}
<div class="bottom-0 fixed right-0 p-8 md:m-8">
	<a
		href="/account/new-booking"
		class="text-center text-lg md:text-2xl font-norcmal py-2 px-4 md:py-6 md:px-12 rounded-lg text-white bg-orange-400"
		>+ Book a call</a
	>
</div>
