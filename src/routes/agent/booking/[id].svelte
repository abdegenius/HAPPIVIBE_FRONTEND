<script>
    import API from "../../../services/Api"
    import {CURRENCY} from "../../../services/Helper"
    import {onMount} from "svelte"
    import { page } from '$app/stores';
import { browser } from "$app/env";

    let order_id = $page.params.id
    const BOOKING = async () => {
		let execute = API.get('get-booking/'+order_id);
		return execute;
	};
    let booking = null;
    let status=''
    onMount(async() => {
        let data = await BOOKING();
        booking = data.data[0]
        status=booking.status
    })

    const UPDATE = (async() => {
        let execute = await API.post('update-booking', {
            order_id,status
        })
        if(execute.error == false){
            if(browser){
                alert("Status updated..");
            }
        }
        else{
            if(browser){
                alert("Status not updated..");
            }
        }
    })
</script>
{#if booking != null}
    <div class="mb-6 flex flex-wrap justify-start md:justify-end items-center">
        <a
            href="/agent"
            class="text-center block m-2 text-lg md:text-xl font-normal py-2 px-4 md:py-4 md:px-6 rounded-lg text-white bg-black"
            >Back to bookings</a
        >
    </div>

    <div class="flex justify-center items-center mx-4 mt-12">
        <div class="w-full p-4 max-w-[600px] bg-white border-2 border-gray-200 rounded-lg">
            <h1 class="text-center font-black text-2xl pb-4 border-b-4 border-dashed border-orange-400 mb-4">Booking Summary</h1>
            <ul class="p-4">
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Caller Fullname: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.your_salutation+" "+booking.your_firstname+" "+booking.your_lastname} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Caller Phone No: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal"><a href="tel:{booking.your_phone}">{booking.your_phone}</a></b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Caller Location: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.your_location} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Caller Country: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.your_country} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Caller Gender: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.your_gender} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Caller Marital Status: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.your_marital_status} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Receiver Fullname: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.their_salutation+" "+booking.their_firstname+" "+booking.their_lastname} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Receiver Phone No: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal">{booking.their_phone} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Receiver Location: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.their_location} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Receiver Country: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.their_country} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Receiver Gender: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.their_gender} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Receiver Marital Status: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.their_marital_status} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Status Of Call: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal uppercase">{booking.status} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Call Order ID: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal">{booking.order_id} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold ">Native Language: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.native_language} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold ">Favorite Song: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.favorite_song} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Nature of call: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal uppercase">{booking.nature_of_call} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Date to make call: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal">{booking.date_to_make_call} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Time to make call: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal">{booking.time_to_make_call} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Their Relationship With You: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.their_relationship_with_you} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Name They Know You With: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal">{booking.name_they_know_you_with} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Name They Call You: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal">{booking.name_they_call_you} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Name You Call Them: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal">{booking.name_you_call_them} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">How You Hear About Happivibe: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.how_did_you_hear_about_happivibe} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Memories: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.memories} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">What You Want To Say: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.what_you_want_to_say} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Amount: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.amount} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Email Address: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.email} </b>
                    </div>
                </li>
            </ul>
            <div class="bg-gray-200 w-full p-4">
                <form method="POST" on:submit|preventDefault={UPDATE}>
                    <div class="flex justify-start items-center space-x-8">
                        <div class="w-full">
                            <select bind:value={status} class="outline-none w-full border-2 border-orange-400 rounded-lg p-4 text-lg bg-white text-gray-600">
                                <option value="processing">processing</option>
                                <option value="awaiting">awaiting</option>
                                <option value="completed">completed</option>
                                <option value="failed">failed</option>
                            </select>
                        </div>
                        <div class="w-24">
                            <button type="submit" class="rounded-md block bg-orange-400 p-4 text-center text-white">UPDATE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

{/if}