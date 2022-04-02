<script>
    import API from "../../services/Api"
    import { CURRENCY } from "../../services/Helper";
    import {onMount} from "svelte"
    const DASHBOARD = async () => {
		let execute = API.get('dashboard');
		return execute;
	};
    let dashboard = null;
    onMount(async() => {
        let data = await DASHBOARD();
        dashboard = data.data[0]
    })
</script>
{#if dashboard != null}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

        <div class="bg-white drop-shadow-md rounded-md shadow-sm p-6 w-full h-auto">
            <h3 class="text-xl font-bold text-gray-400 text-center mb-4">Active Bookings</h3>
            <h1 class="text-3xl font-light text-green-600 text-center mb-4">{dashboard.active_booking}</h1>
        </div>

        <div class="bg-white drop-shadow-md rounded-md shadow-sm p-6 w-full h-auto">
            <h3 class="text-xl font-bold text-gray-400 text-center mb-4">Total Bookings</h3>
            <h1 class="text-3xl font-light text-gray-800 text-center mb-4">{dashboard.total_booking}</h1>
        </div>

        <div class="bg-white drop-shadow-md rounded-md shadow-sm p-6 w-full h-auto">
            <h3 class="text-xl font-bold text-gray-400 text-center mb-4">Wallet Balance</h3>
            <h1 class="text-3xl font-light text-gray-800 text-center mb-4">{CURRENCY(dashboard.account_balance)}</h1>
        </div>

        <div class="bg-white drop-shadow-md rounded-md shadow-sm p-6 w-full h-auto">
            <h3 class="text-xl font-bold text-gray-400 text-center mb-4">Referral Balance</h3>
            <h1 class="text-3xl font-light text-gray-800 text-center mb-4">{CURRENCY(dashboard.referral_balance)}</h1>
        </div>

    </div>
{/if}

<div class="bottom-0 fixed right-0 p-8 md:m-8">
    <a href="/account/new-booking" 
    class="text-center text-lg md:text-2xl font-norcmal py-2 px-4 md:py-6 md:px-12 rounded-lg text-white bg-orange-400">+ Book a call</a>
</div>