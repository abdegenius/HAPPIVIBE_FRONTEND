<script>
	import { onMount } from 'svelte';

	let isShow = false;

	async function toggle() {
		isShow = !isShow;
	}
</script>

<nav>
	<div
		class="flex items-center justify-between md:py-8 md:px-24 py-2 px-5 border-b border-b-primary md:mb-5"
	>
		<a href="/home"> <h1 class="text-primary font-extrabold text-xl">HappiVibe</h1></a>
		<div class="space-x-5 font-semibold text- hidden md:block">
			<a class="nav-link" href="/home/about">About us</a>
			<a class="nav-link" href="/home/services">Our Services</a>
			<a class="nav-link" href="/home/message">MessageMe Service</a>
			<a class="nav-link" href="/home/team">Our Team</a>
			<a class="nav-link" href="/home/contact">Contact Us</a>
			<a class="nav-link" href="faq">F.A.Qs</a>
			<a
				href="/login"
				class="uppercase bg-primary py-3 px-3 rounded-lg text-white font-semibold border border-primary hover:bg-white hover:text-primary hover:transition-all"
				>Book a Call Now</a
			>
		</div>
		<div class="md:hidden visible">
			<button class="mobile-menu-button" on:click={toggle}>
				<svg
					class="w-7 h-7 ml-2 mt-1"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
	</div>

	{#if isShow}
		<div class="space-y-2 text-sm px-4 py-4 mobile-menu md:hidden border-t border-t-primary -z-10">
			<a class="nav-menu" href="/home/about">About us</a>
			<a class="nav-menu" href="/home/services">Our Services</a>
			<a class="nav-menu" href="/home/message">MessageMe Service</a>
			<a class="nav-menu" href="/home/team">Our Team</a>
			<a class="nav-menu" href="/home/contact">Contact Us</a>
			<a class="nav-menu mb-2" href="faq">F.A.Qs</a>
			<a href="/login" class="uppercase"
				><button class="bg-primary text-white py-1 text-left w-full border border-primary "
					>Book a Call Now</button
				></a
			>
		</div>
	{/if}
</nav>
