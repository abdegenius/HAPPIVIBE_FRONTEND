<script>
	import Button from '$lib/button.svelte';

	import Hero from '$lib/hero.svelte';
</script>

<Hero img="/img/call.jpg" pageID="About HappiVibe" />
<h3 class="lg:text-5xl md:text-4xl text-3xl font-bold mt-5 text-primary text-center">About Us</h3>
<div class="lg:px-36 md:px-24 px-0 py-5">
	<div class="mb-5 p-7 space-y-3 md:grid md:grid-cols-2 md:place-items-center">
		<img src="/img/happy.svg" alt="" class="md:w-[80%] mx-auto" />
		<div class="space-y-3">
			<h3 class="font-bold text-xl md:text-5xl">Who We Are</h3>
			<p class="md:text-lg text-sm text-justify">
				Amidst a world continuously in chaos and turmoil, we believe nonetheless that every human
				being should be happy. We believe every face deserves to smile and every heart deserves to
				be filled with joy.
			</p>
		</div>
	</div>
	<div class="mb-5 p-7 space-y-3 md:grid md:grid-cols-2 md:place-items-center">
		<img src="/img/control.svg" alt="" class="md:w-[80%] mx-auto" />
		<div class="space-y-3">
			<h3 class="font-bold text-xl md:text-5xl">What We Do</h3>
			<p class="md:text-lg text-sm text-justify">
				We are a team of simple, relatable people with infectious, happy & uplifting vibes who are
				poised to make sure to put you and your loved ones in a light, cheery mood with our deeply
				emotionally intuitive services.
			</p>
		</div>
	</div>
	<div class="mx-5">
		<Button item="contact us" link="/home/contact" />
	</div>
</div>
