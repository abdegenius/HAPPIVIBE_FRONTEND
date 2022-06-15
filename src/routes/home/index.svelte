<script>
	import Stories from './../../lib/stories.svelte';
	import Assurance from '$lib/assurance.svelte';

	import Button from '$lib/button.svelte';
	import CallServices from '$lib/callServices.svelte';
	import PackageServices from '$lib/packageServices.svelte';
	import Testimonials from '$lib/testimonials.svelte';
	import HomeHero from '$lib/homeHero.svelte';
</script>

<div>
	<HomeHero />
	<div class="lg:px-28 md:px-20 md:pt-10 pt-10 px-5 mb-20">
		<!-- Call Services -->
		<div class="my-5">
			<h2 class="text-3xl font-bold mb-12 text-primary md:text-left text-center">Call Services</h2>
			<div class="mt-5 mx-4">
				<CallServices />
				<Button item="more information" link="/home/services" />
			</div>
		</div>

		<!-- Happivibe Packages -->
		<div class="my-5">
			<h2 class="text-3xl font-bold my-12 text-primary md:text-left text-center">
				Happivibe Packages
			</h2>
			<div class="mt-5 mx-4">
				<PackageServices />
				<Button item="book a package now" />
			</div>
		</div>

		<!-- Stories -->
		<div class="">
			<h3 class="md:text-3xl text-xl md:py-4 font-bold mb-5 text-primary md:text-left text-center">
				See how Happivibe is changing our society
			</h3>
			<div class="">
				<Stories />
			</div>
		</div>

		<!-- Assurance -->
		<Assurance />
	</div>
	<div class="mb-20">
		<!-- Testimonials -->
		<Testimonials />
		<div class="w-[80%] mx-auto ">
			<Button item="read more testimonials" />
		</div>
	</div>
</div>
