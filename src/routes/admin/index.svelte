<script>
    import API from "../../services/Api"
    import { CURRENCY } from "../../services/Helper";
    import {onMount} from "svelte"
    const DASHBOARD = async () => {
		let execute = API.get('admin/dashboard');
		return execute;
	};
    let dashboard = null;
    onMount(async() => {
        let data = await DASHBOARD();
        dashboard = data.data[0]
    })
</script>
{#if dashboard != null}
    <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-2 mt-12">

        <div class="bg-white drop-shadow-md rounded-md shadow-sm p-6 w-full h-auto">
            <h3 class="text-xl font-bold text-gray-400 text-center mb-4">Bookings</h3>
            <h1 class="text-3xl font-light text-green-600 text-center mb-4">{dashboard.bookings}</h1>
        </div>

        <div class="bg-white drop-shadow-md rounded-md shadow-sm p-6 w-full h-auto">
            <h3 class="text-xl font-bold text-gray-400 text-center mb-4">Users</h3>
            <h1 class="text-3xl font-light text-gray-800 text-center mb-4">{dashboard.users}</h1>
        </div>

        <div class="bg-white drop-shadow-md rounded-md shadow-sm p-6 w-full h-auto">
            <h3 class="text-xl font-bold text-gray-400 text-center mb-4">Agents</h3>
            <h1 class="text-3xl font-light text-gray-800 text-center mb-4">{dashboard.agents}</h1>
        </div>

    </div>
{/if}