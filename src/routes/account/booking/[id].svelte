<script>
    import API from "../../../services/Api"
    import CURRENCY from "../../../services/Helper"
    import {onMount} from "svelte"
    import { page } from '$app/stores';

    let order_id = $page.params.id
    const BOOKING = async () => {
		let execute = API.get('booking/'+order_id);
		return execute;
	};
    let booking = null;
    onMount(async() => {
        let data = await BOOKING();
        booking = data.data[0]
    })

</script>
{#if booking != null}
    <div class="mb-6 flex flex-wrap justify-start md:justify-end items-center">
        <a
            href="/account/new-booking"
            class="text-center block m-2 text-lg md:text-xl font-normal py-2 px-4 md:py-4 md:px-6 rounded-lg text-white bg-orange-400"
            >+ Book a call</a
        >
        <a
            href="/account/bookings"
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
                        <b class="text-black text-md font-semibold">Fullname: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.salutation+" "+booking.firstname+" "+booking.lastname} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Phone No: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal">{booking.phone} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Location: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.location} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Country: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.country} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Gender: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.gender} </b>
                    </div>
                </li>
                <li class="py-4 border-b-2 border-gray-100 flex justify-start items-start">
                    <div class="mr-2">
                        <b class="text-black text-md font-semibold">Marital Status: </b>
                    </div>
                    <div class="">
                        <b class="text-gray-800 text-md font-normal capitalize">{booking.marital_status} </b>
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
            </ul>
        </div>
    </div>

{/if}