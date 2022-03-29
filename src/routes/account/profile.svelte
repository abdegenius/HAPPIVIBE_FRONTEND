<script>
    import API from "../../services/Api"
    import CURRENCY from "../../services/Helper"
    import {onMount} from "svelte"
    
    const PROFILE = async () => {
		let execute = API.get('profile');
		return execute;
	};
    let user = null;
    onMount(async() => {
        let data = await PROFILE();
        user = data.data[0]
    })

</script>
{#if user != null}

    <div class="flex justify-center items-center mx-4 mt-12">
        <div class="w-full p-4 max-w-[600px] bg-white border-2 border-gray-200 rounded-lg">
            <h1 class="text-center font-black text-2xl pb-4 border-b-4 border-dashed border-orange-400 mb-4">My Account</h1>
            <ul class="p-4">
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Fullname: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{user.fullname} </b>
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
                        <b class="text-black text-md font-semibold">Email Address: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal lowercase">{user.email} </b>
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
        </div>
    </div>

{/if}