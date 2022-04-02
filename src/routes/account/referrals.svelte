<script>
    import API from "../../services/Api"
    import {onMount} from "svelte"
    
    const REFERRALS = async () => {
		let execute = API.get('referrals');
		return execute;
	};
    let referrals = null;
    let user = null;
    onMount(async() => {
        let data = await REFERRALS();
        referrals = data.data[1]
        user = data.data[0]
    })

</script>
{#if referrals != null && user != null}

    <div class="flex justify-center items-center mx-4 mt-12">
        <div class="w-full p-4 max-w-[600px] bg-white border-2 border-gray-200 rounded-lg">
            <h1 class="text-center font-black text-2xl pb-4 border-b-4 border-dashed border-orange-400 mb-4">My Referrals</h1>
            <h3 class="text-center p-4 font-light tracking-widest text-4xl text-gray-800 border-b-4 border-dashed border-orange-400 mb-8">{user.referral_code}
            <div class="mb-2 mt-4 flex justify-center">
                <span class="bg-orange-400 py-2 px-6 text-white text-sm font-normal rounded-lg">REFERRAL CODE</span>
            </div>
            </h3>
            <ul class="p-4">
                {#each referrals as referral}
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">[{referral.phone}]</b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{referral.salutation+". " +referral.fullname} </b>
                    </div>
                </li>
                {/each}
                
            </ul>
        </div>
    </div>

{/if}