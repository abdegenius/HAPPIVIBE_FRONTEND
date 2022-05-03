<script>
    import API from "../../services/Api"
    import {onMount} from "svelte"
    import { page } from '$app/stores';
	import { browser } from "$app/env";
	import { USER } from '../../services/Store'

    let chat_id = $page.params.id
    let MESSAGES = async () => {
		let execute = API.get('message/'+chat_id);
		return execute;
	};

	let getMessages = (async() => {
		let data = await MESSAGES();
        messages = data.data[1]
		booking = data.data[2].booking
	})
    let messages;
	$: messages = null;
    let booking;
	$: booking = null;
    onMount(async() => {
        getMessages()
    })

	if(browser){
		setInterval(() => {
			getMessages()
		},10000);		
	}

	const MESSAGE_BODY = (sendby, body) => {
		if($USER){
			if(sendby != 'user'){
				return `<div class="mb-1 flex justify-start mx-4">
					<div class="w-full lg:w-1/2 bg-gray-100 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-600">${body}
					</div>
				</div>`;
			}
			else{
				return `<div class="mb-1 flex justify-end mx-4">
					<div class="w-full lg:w-1/2 bg-orange-200 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-600">
						${body}
					</div>
				</div>`;
			}
		}
		else{
			return `<div class="mb-1 flex justify-end mx-4">
				<div class="w-full lg:w-1/2 bg-orange-800 mb-2 rounded-t-lg rounded-br-lg p-2 text-gray-50">
					${body}
				</div>
			</div>`;
		}
	}
	let body = '';
	let sendby = $USER && $USER.type != 'user' ? 'agent' : 'user'
	const SEND_MESSAGE = (async() => {
		let execute = API.post('add-message', {
			chat_id,
			body,
			sendby

		})
		getMessages();
		body = ''
	})


	const PAYMENT = (async(order_id, checkout) => {
		checkout =  checkout == 'no' ? 'yes' : 'no'
		let execute = API.post('update-payment', {
			order_id,
			checkout
		})
		
	})
</script>

<div class="m-4 left-0 p-8 md:m-8">
    <a href="/login" 
    class="text-center text-lg font-normal py-2 px-4 md:py-4 rounded-lg text-white bg-orange-400">Back</a>
</div>
{#if messages != null && booking != null}
<div class="mx-4 md:mx-8 xl:mx-16 mt-8">
	<div class="mx-auto bg-gray-50 drop-shadow-md rounded-md shadow-sm p-6 w-full h-auto">
		<div class="flex flex-wrap space-x-4 space-y-4 justify-between items-center">
			<div class="flex justify-start items-center">
				<div class="mr-4">
					<img src="https://avatars.dicebear.com/api/initials/{$USER ? $USER.fullname : 'Anonymous'}.svg" class="w-12 h-12 rounded-lg" alt="avatar" />
				</div>
				<div>
					<h4 class="text-gray-600 font-medium text-md">Chat NOW!!
						</h4>
					<h6 class="text-sm text-gray-600 font-light">
						<div class="w-2 h-2 rounded-full bg-orange-400 mr-2 inline-block" />
						Online
					</h6>
				</div>
			</div>
			{#if booking.is_paid == 'no'}
			<div>
				{#if $USER && $USER.type == 'user' && booking.checkout == 'yes'}
					<a
						target="_blank" href="https://happivibes-backend.com/api/pay/{chat_id}"
						class="text-center text-sm md:text-md font-normal py-2 px-4 rounded-lg text-white bg-orange-400"
						>PAY WITH CARD</a
					>
					<a
						target="_blank" href="https://happivibes-backend.com/api/pay-wallet/{chat_id}"
						class="text-center text-sm md:text-md font-normal py-2 px-4 rounded-lg text-white bg-black"
						>PAY FROM WALLET</a
					>
				{/if}
				{#if $USER.type != 'user' &&  $USER.type != 'agent' && $USER.type != 'admin' && !$USER && booking.checkout == 'yes'}
					<a
						target="_blank" href="https://happivibes-backend.com/api/pay/{chat_id}"
						class="text-center text-sm md:text-md font-normal py-2 px-4 rounded-lg text-white bg-orange-400"
						>PAY WITH CARD</a
					>
				{/if}
				{#if $USER && $USER.type == 'agent'}
					<span on:click={PAYMENT(booking.order_id, booking.checkout)}
						class="payment-btn text-center cursor-pointer text-sm md:text-md font-normal py-2 px-4 rounded-lg text-white bg-orange-800"
						>{booking.checkout == 'no' ? 'ALLOW' : 'BLOCK'} PAYMENT</span
					>
				{/if}
			</div>
			{:else}
			<div>
				<b>STATUS: &nbsp;</b>{booking.status}
			</div>
			{/if}
		</div>
		<div class="flex justify-center items-center">
			<div class="mx-2 lg:mx-4 bg-orange-100 p-4 rounded-lg my-4 text-gray-600 font-normal text-sm">Messages are end-to-end encrypted. No one outside of this chat, can read or listen to them.</div>
		</div>
		<div class="my-6 max-h-[400px] min-h-[400px] overflow-y-scroll">
			{#each messages as message}
				{@html MESSAGE_BODY(message.send_by, message.body)}
			{/each}
		</div>

		<div class="flex justify-start items-center bg-gray-200">
			<div class="rounded-l-lg border border-gray-100 w-full">
				<textarea bind:value={body} class="h-[45px] text-sm font-light appearance-none outline-none w-full p-4 rounded-lg"></textarea> 
			</div>
			<div>
				<button type="button" on:click|preventDefault={SEND_MESSAGE} class="bg-orange-400 text-white text-sm font-bold p-4 h-40px] rounded-r-lg">SEND</button>
			</div>
		</div>
	</div>
	
</div>

{/if}

