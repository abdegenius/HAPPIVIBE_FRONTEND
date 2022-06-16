<script>
	import Hero from '$lib/hero.svelte';
</script>

<Hero pageID="F.A.Qs" idDetails="" img="/img/hero/hero1.jpg" />

<!-- component -->
<div>
	<section class="text-gray-700">
		<div class="container px-5 md:py-24 py-10 mx-auto">
			<div class="text-center mb-20">
				<h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
					Frequently Asked Question
				</h1>
				<p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
					The most common questions about how our business works and what can do for you.
				</p>
			</div>
			<div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
				<div class="w-full lg:w-1/2 px-4 py-2">
					<details class="mb-4">
						<summary class="font-semibold bg-secondary text-white rounded-md py-2 px-4">
							What is the duration of the call?
						</summary>

						<span>
							Our calls are not timed. The duration of a call is solely dependent on the flow of
							conversation between our caller and whom we call.
						</span>
					</details>
					<details class="mb-4">
						<summary class="font-semibold bg-secondary text-white rounded-md py-2 px-4">
							How do I make payment for a call I'm booking?
						</summary>

						<span>
							You can make payment using any of the payment options as provided by paystack on our
							website.
						</span>
					</details>
					<details class="mb-4">
						<summary class="font-semibold bg-secondary text-white rounded-md py-2 px-4">
							Do I pay before the call is made or after the call is made?
						</summary>

						<span> You pay before a call is to be made. </span>
					</details>
					<details class="mb-4">
						<summary class="font-semibold bg-secondary text-white rounded-md py-2 px-4">
							Who will be the one to make my call?
						</summary>

						<span class="">
							We have a team of trained Happivibe callers. One of them who perfectly fits to handle
							your call will make your call.
						</span>
					</details>
				</div>
				<div class="w-full lg:w-1/2 px-4 py-2">
					<details class="mb-4">
						<summary class="font-semibold bg-secondary text-white rounded-md py-2 px-4">
							Who will be the one to make my call?
						</summary>

						<span class="">
							We have a team of trained Happivibe callers. One of them who perfectly fits to handle
							your call will make your call.
						</span>
					</details>
					<details class="mb-4">
						<summary class="font-semibold bg-secondary text-white rounded-md py-2 px-4">
							Do you make calls to countries outside Nigeria? If yes, how much are your
							international calls?
						</summary>

						<span class="">
							Yes, we make international calls. Kindly visit the call booking prompt and select the
							country you want us to call, and you'll see the amount you're to pay right there.
						</span>
					</details>
					<details class="mb-4">
						<summary class="font-semibold bg-secondary text-white rounded-md py-2 px-4">
							How much do you charge for a call?
						</summary>

						<span class="">
							All local calls are 1,000 naira. For international calls, the amount depends on what
							country we are to call.
						</span>
					</details>
					<details class="mb-4">
						<summary class="font-semibold bg-secondary text-white rounded-md py-2 px-4">
							What if the person I'm booking this call for doesn't pick up?
						</summary>

						<span class="">
							We will call them more than once, and give the person intervals to retry calling them.
							If we do not get to them eventually, we would give you a feedback on what else could
							be done.
						</span>
					</details>
				</div>
			</div>
		</div>
	</section>

	<div class="bg-secondary text-white text-center py-10 my-10 md:mx-20 mx-5 rounded-lg space-y-3">
		<h3 class="md:text-3xl text-xl font-bold">Have any additional questions?</h3>
		<p>We are here to help</p>
		<div class="w-[60%] mx-auto">
			<a href="/home/contact"
				><button
					class="uppercase bg-white text-primary w-full mt-5 rounded shadow-lg py-3 px-3 text-sm font-semibold"
					>Get In Touch</button
				></a
			>
		</div>
	</div>
</div>
