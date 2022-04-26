<script>
	import API from '../../services/Api';
	import { CURRENCY } from '../../services/Helper';
	import { onMount } from 'svelte';
	let bookings;
	$: bookings = null;

	const BOOKINGS = async (link) => {
		let execute = await API.get(`admin/bookings${link ? link : ""}`);
		bookings = null;
		bookings = execute.data[0]
	};

	onMount(async () => {
		BOOKINGS();
	});
	const CHANGE= (url) => {
		let link = url.substring(url.indexOf('?'));
		BOOKINGS(link)
	}

	
</script>

{#if bookings != null}
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
								>Caller</span
							>
						</div>
						<div class="w-[150px] md:w-1/6 mr-6">
							<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg"
								>Receiver</span
							>
						</div>
						<div class="w-[150px] md:w-1/6 mr-6">
							<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg"
								>Amount</span
							>
						</div>
						<div class="w-[150px] md:w-1/6 mr-6">
							<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg">Date</span
							>
						</div>
						<div class="w-[150px] md:w-1/6 mr-6">
							<span class="text-gray-500 font-semibold text-[12px] md:text-sm xl:text-lg"
								>Status</span
							>
						</div>
					</div>
				</div>
			</div>

			<div class="overflow-x-scroll">
				{#each bookings.data as booking}
					<a href="/admin/booking/{booking.order_id}">
						<div class="mt-4 flex p-8 justify-start items-center border-b-2 border-gray-200">
							<div class="w-[150px] md:w-1/6 mr-6">
								<span class="text-gray-600 uppercase font-medium text-[12px] md:text-sm xl:text-lg"
									>{booking.your_firstname + ' ' + booking.your_lastname}</span
								>
							</div>
							<div class="w-[150px] md:w-1/6 mr-6">
								<span class="text-gray-600 capitalize font-medium text-[12px] md:text-sm xl:text-lg"
									>{booking.their_firstname + ' ' + booking.their_lastname}</span
								>
							</div>
							<div class="w-[150px] md:w-1/6 mr-6">
								<span class="text-gray-600 font-medium text-[12px] md:text-sm xl:text-lg"
									>{booking.amount}</span
								>
							</div>
							<div class="w-[150px] md:w-1/6 mr-6">
								<span class="text-gray-600 font-medium text-[12px] md:text-sm xl:text-lg"
									>{booking.date_to_make_call}</span
								>
								<span class="text-gray-400 text-[12px] md:text-sm xl:text-lg font-medium"
									>{booking.time_to_make_call}</span
								>
							</div>
							<div class="w-[150px] md:w-1/6 mr-6">
								<span class="text-blue-800 uppercase font-medium text-[12px] md:text-sm xl:text-lg"
									>{booking.status}</span
								>
							</div>
						</div>
					</a>
				{/each}
			</div>

			{#if bookings.links}
				<div class="my-4 flex justify-start items-center space-x-4">
					{#each bookings.links as link}
						<div on:click={CHANGE(link.url)} class="cursor-pointer p-2 text-sm font-black border-2 border-gray-400 text-gray-600 rounded-md {link.active ? 'bg-orange-400' : 'bg-gray-50'}">
							{@html link.label}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}
