<script>
    import API from "../../services/Api"
    import {onMount} from "svelte"
    let amount = '';
    
</script>
<div class="flex justify-center items-center">
    <div class="mx-auto w-full md:max-w-[500px] mt-12">
        <div class="bg-white mt-4 drop-shadow-md rounded-md shadow-sm p-6 w-full h-auto">
            <h3 class="text-xl font-bold text-gray-600 text-left mb-4">Enter Amount</h3>
            <div class="my-4">
                <input type="number" name="amount" id="amount" bind:value={amount} class="w-full appearance-none outline-none text-center font-bold text-2xl text-orange-400 p-4 border-b-4 border-gray-600"/>
            </div>
            <div class="flex justify-end items-end">
                <span
                    class="cursor-pointer w-full text-center text-lg font-normal py-2 px-6 rounded-lg text-white bg-black block"
                    > Continue</span
                >
            </div>
        </div>
    </div>
</div>
<div class="bottom-0 fixed right-0 p-8 md:m-8">
	<a
		href="/account/new-booking"
		class="text-center text-lg md:text-2xl font-norcmal py-2 px-4 md:py-6 md:px-12 rounded-lg text-white bg-orange-400"
		>+ Book a call</a
	>
</div>
