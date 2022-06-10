<script>
	import CallServices from '$lib/callServices.svelte';
</script>

<div>
	<div class="md:px-36 md:pt-10 pt-10 px-5 mb-20">
		<div class="md:grid md:grid-cols-2 md:place-items-center space-y-7">
			<div class="md:text-left text-center md:space-y-10 space-y-5">
				<p class="text-primary font-bold md:text-5xl text-2xl leading-snug">
					We are the Uber of Happiness
				</p>
				<p class="md:leading-snug md:text-lg text-sm leading-normal">
					The perfect treat for that special someone! Celebrate, reach out, apologize and check up
					on your loved ones through us. Let's make them feel loved and special today.
				</p>
				<a href="/login" class="uppercase bg-primary py-3 px-4 rounded-lg text-white"
					><button class="mt-10">Book a Call Now</button></a
				>
			</div>
			<div
				class="w-[70%] mx-auto md:border-4 border-2 border-primary md:rounded-tr-[5rem] rounded-tr-[3rem] md:rounded-bl-[5rem] rounded-bl-[3rem] md:p-3 p-1"
			>
				<img
					src="/img/form.png"
					alt=""
					class="md:rounded-tr-[5rem] rounded-tr-[3rem] md:rounded-bl-[5rem] rounded-bl-[3rem]"
				/>
			</div>
		</div>
		<div>
			<h2 class="text-primary flex items-center text-lg">
				<i class="fas fa-square-phone mr-2 fa-2x" /> Call Services
			</h2>
			<div class="mt-5">
				<CallServices />
			</div>
		</div>
	</div>
</div>
