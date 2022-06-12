<script>
	import Assurance from '$lib/assurance.svelte';

	import Button from '$lib/button.svelte';
	import CallServices from '$lib/callServices.svelte';
	import PackageServices from '$lib/packageServices.svelte';
	import Testimonials from '$lib/testimonials.svelte';
</script>

<div>
	<div class="md:px-36 md:pt-10 pt-10 px-5 mb-20">
		<div class="md:grid md:grid-cols-2 md:place-items-center space-y-7">
			<div class="md:text-left text-center md:space-y-10 space-y-5">
				<p class="text-primary font-bold md:text-5xl text-2xl leading-snug">
					We are the Uber of Happiness
				</p>
				<p class="md:leading-snug md:text-lg text-sm leading-normal">
					Happivibe service is an online calling service that gives out happiness and the right
					amount of vibe with just a call from us to you.
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

		<!-- Call Services -->
		<div class="my-5">
			<h2 class="text-3xl font-bold mb-12 text-primary md:text-left text-center">Call Services</h2>
			<div class="mt-5 mx-4">
				<CallServices />
				<Button item="book a call now" />
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
			<h3 class="text-3xl font-bold mb-5 text-primary md:text-left text-center">Stories</h3>
			<p class="py-5 text-lg font-semibold">Happivibe's BBC Igbo interview</p>
			<iframe
				src="https://www.youtube-nocookie.com/embed/teB0Z87yngk"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				class="w-full md:h-[500px]"
			/>
		</div>
		<!-- Assurance -->
		<Assurance />
	</div>
	<div class="mb-20">
		<!-- Testimonials -->
		<Testimonials />
		<Button item="read more testimonials" />
	</div>
</div>
