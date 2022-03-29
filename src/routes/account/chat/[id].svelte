<script>
    import API from "../../../services/Api"
    import {onMount} from "svelte"
    import { page } from '$app/stores';
import { browser } from "$app/env";

    let chat_id = $page.params.id
    let MESSAGES = async () => {
		let execute = API.get('message/'+chat_id);
		return execute;
	};

	let getMessages = (async() => {
		let data = await MESSAGES();
        messages = data.data[1]
	})
    let messages;
	$: messages = null;
    onMount(async() => {
        getMessages()
    })

	if(browser){
		setInterval(() => {
			getMessages()
		},10000);		
	}

	const MESSAGE_BODY = (sendby, body) => {
		if(sendby != 'user'){
			return `<div class="mb-4 flex justify-start mx-4">
				<div class="w-full lg:w-1/2 bg-white mb-6 rounded-t-lg rounded-br-lg p-6 text-gray-600">${body}
				</div>
			</div>`;
		}
		else{
			return `<div class="mb-4 flex justify-end mx-4">
				<div class="w-full lg:w-1/2 bg-orange-200 mb-6 rounded-t-lg rounded-br-lg p-6 text-gray-600">
					${body}
				</div>
			</div>`;
		}
	}
	let body = '';
	const SEND_MESSAGE = (async() => {
		let execute = API.post('add-message', {
			chat_id,
			body
		})
		getMessages();
		body = ''
	})
</script>
{#if messages != null}
<div class="mx-4 md:mx-8 xl:mx-16 mt-12">
	<div class="mx-auto bg-gray-50 drop-shadow-md rounded-md shadow-sm p-6 w-full h-auto">
		<div class="flex flex-wrap space-x-4 space-y-4 justify-between items-center">
			<div class="flex justify-start items-center">
				<div class="mr-4">
					<img src="/img/avatar.png" class="w-12 h-12 rounded-lg" alt="avatar" />
				</div>
				<div>
					<h4 class="text-gray-600 font-medium text-md">Happivibe agent</h4>
					<h6 class="text-sm text-gray-600 font-light">
						<div class="w-2 h-2 rounded-full bg-orange-400 mr-2 inline-block" />
						Online
					</h6>
				</div>
			</div>
			<div>
				<a
					href="/"
					class="text-center text-sm md:text-md font-norcmal py-2 px-4 rounded-lg text-white bg-orange-400"
					>MAKE PAYMENT</a
				>
			</div>
			<div>
				<a href="/" class="font-bold text-orange-400 text-sm">EXIT CHAT</a>
			</div>
		</div>
		<div class="flex justify-center items-center">
			<div class="mx-2 lg:mx-4 bg-orange-100 p-4 rounded-lg my-4 text-gray-600 font-normal text-sm">Messages are end-to-end encrypted. No one outside of this chat, can read or listen to them.</div>
		</div>
		<div class="my-6 max-h-[600px] min-h-[600px] overflow-y-scroll">
			{#each messages as message}
				{@html MESSAGE_BODY(message.send_by, message.body)}
			{/each}
		</div>

		<div class="flex justify-start items-center bg-white">
			<div class="rounded-l-lg border border-gray-100 w-full">
				<textarea bind:value={body} class="h-[75px] text-sm font-light appearance-none outline-none w-full p-4 rounded-lg"></textarea> 
			</div>
			<div>
				<button type="button" on:click|preventDefault={SEND_MESSAGE} class="bg-orange-400 text-white text-sm font-bold p-4 h-[75px] rounded-r-lg">SEND</button>
			</div>
		</div>
	</div>
	
</div>

{/if}

