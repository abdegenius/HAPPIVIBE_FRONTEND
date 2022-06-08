<script>
	import Hero from '$lib/hero.svelte';
</script>

<Hero img="/img/call.jpg" pageID="About HappiVibe" />
<div class="lg:px-36 md:px-24 px-0">
	<div class="mb-5 p-7 space-y-3 md:grid md:grid-cols-2">
		<div class="space-y-3">
			<h3 class="font-bold text-xl md:text-5xl">Who We Are</h3>
			<p class="md:text-lg text-sm text-justify">
				Amidst a world continuously in chaos and turmoil, we believe nonetheless that every human
				being should be happy. We believe every face deserves to smile and every heart deserves to
				be filled with joy.
			</p>
		</div>
		<img src="/img/happy.svg" alt="" class="md:w-1/2 mx-auto" />
	</div>
	<div class="mb-5 p-7 space-y-3 md:grid md:grid-cols-2">
		<img src="/img/control.svg" alt="" class="md:w-1/2 mx-auto" />
		<div class="space-y-3">
			<h3 class="font-bold text-xl md:text-5xl">What We Do</h3>
			<p class="md:text-lg text-sm text-justify">
				We are a team of simple, relatable people with infectious, happy & uplifting vibes who are
				poised to make sure to put you and your loved ones in a light, cheery mood with our deeply
				emotionally intuitive services.
			</p>
		</div>
	</div>
</div>
