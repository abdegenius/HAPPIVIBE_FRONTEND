<script>
    import API from "../../services/Api"
    import {CURRENCY} from "../../services/Helper"
    import {onMount} from "svelte"

    const BOOKINGS = async () => {
		let execute = API.get('bookings');
		return execute;
	};
    let bookings = null;
    onMount(async() => {
        let data = await BOOKINGS();
        bookings = data.data[0]
    })

</script>
{#if bookings != null}
<div class="mb-6">
	<a
		href="/account/new-booking"
		class="text-center text-lg md:text-2xl font-norcmal py-2 px-4 md:py-6 md:px-12 rounded-lg text-white bg-orange-400"
		>+ Book a call</a
	>
</div>

<div class="grid grid-cols-1 mt-12">
	<div class="bg-white border-2 border-gray-200 rounded-lg">
		<div class="p-8 border-2 border-gray-200">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<h3 class="font-bold text-xl text-orange-400">All Booking Tickets</h3>
				</div>
				<div>
					<input
						class="w-full p-4 border border-gray-800 rounded-lg"
						type="text"
						placeholder=" Search Tickets"
					/>
				</div>
			</div>
			<div class="overflow-x-scroll">
				<div class="flex pt-4 justify-start items-center">
					<div class="w-[150px] md:w-1/6 mr-6">
						<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg"
							>Call Type</span
						>
					</div>
					<div class="w-[150px] md:w-1/6 mr-6">
						<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg"
							>Order ID</span
						>
					</div>
					<div class="w-[150px] md:w-1/6 mr-6">
						<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg"
							>Call For?</span
						>
					</div>
					<div class="w-[150px] md:w-1/6 mr-6">
						<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg">Date</span>
					</div>
					<div class="w-[150px] md:w-1/6 mr-6">
						<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg">Status</span
						>
					</div>
					<div class="w-[10px] md:w-1/6 mr-6">
						...
					</div>
				</div>
			</div>
		</div>

		<div class="overflow-x-scroll">
			{#each bookings.data as booking}
			<a href="/account/booking/{booking.order_id}">
			<div class="mt-4 flex p-8 justify-start items-center border-b-2 border-gray-200">
				<div class="w-[150px] md:w-1/6 mr-6">
					<span class="text-gray-600 uppercase font-medium text-[12px] md:text-sm xl:text-lg"
						>{booking.nature_of_call}</span
					>
				</div>
				<div class="w-[150px] md:w-1/6 mr-6">
					<span class="text-gray-600 font-medium text-[12px] md:text-sm xl:text-lg">{booking.order_id}</span>
				</div>
				<div class="w-[150px] md:w-1/6 mr-6">
					<span class="text-gray-600 capitalize font-medium text-[12px] md:text-sm xl:text-lg"
						>{booking.their_firstname+" "+booking.their_lastname}</span
					>
				</div>
				<div class="w-[150px] md:w-1/6 mr-6">
					<span class="text-gray-600 font-medium text-[12px] md:text-sm xl:text-lg">{booking.date_to_make_call}</span
					>
                    <span class="text-gray-400 text-[12px] md:text-sm xl:text-lg font-medium">{booking.time_to_make_call}</span>
				</div>
				<div class="w-[150px] md:w-1/6 mr-6">
					<span class="text-blue-800 uppercase font-medium text-[12px] md:text-sm xl:text-lg">{booking.status}</span>
				</div>
				<div class="w-[100px] md:w-1/6 mr-6">
					{#if booking.chat}
						<a href="/account/chat/{booking.chat.id}" class="text-sm text-yellow-600 font-bold">CHAT</a>
					{/if}
				</div>
			</div>
		</a>
			{/each}
		</div>
	</div>
</div>

{/if}