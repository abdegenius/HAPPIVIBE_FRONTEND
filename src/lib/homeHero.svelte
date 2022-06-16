<script></script>

<!-- <div class=" md:place-items-center space-y-7">
	<div class="md:text-left text-center md:space-y-10 space-y-5">
		<p class="text-primary font-bold md:text-5xl text-2xl leading-snug">
			We are the Uber of Happiness
		</p>
		<p class="md:leading-snug md:text-lg text-sm leading-normal">
			Happivibe service is an online calling service that gives out happiness and the right amount
			of vibe with just a call from us to you.
		</p>
		<a href="/login" class="uppercase bg-primary py-3 px-4 rounded-lg text-white"
			><button class="mt-10">Book a Call Now</button></a
		>
	</div>
</div> -->

<section
	class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3"
>
	<div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
		<video
			class="min-w-full min-h-full absolute object-cover"
			src="/hero.mp4"
			type="video/mp4"
			autoplay
			muted
			loop
		/>
	</div>
	<div class="video-content space-y-2">
		<div class="text-center md:space-y-10 space-y-5 text-white px-3 md:mx-20">
			<p class="font-extrabold lg:text-7xl md:text-5xl text-3xl leading-snug">
				We are the Uber of Happiness
			</p>
			<p class="md:text-lg text-xs leading-normal md:mx-36 md:leading-normal">
				Happivibe is an online calling service that will make you & your loved ones happy with just
				one phone call!
			</p>
			<a href="/login" class="uppercase bg-primary py-3 px-4 rounded-lg text-white"
				><button class="mt-10">Book a Call Now</button></a
			>
		</div>
	</div>
</section>

<style>
	.video-docker video {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.video-docker::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1;
	}

	.video-content {
		z-index: 2;
	}
</style>
