<script>
	import Bottomnav from '$lib/bottomnav.svelte';
	import Footer from '$lib/footer.svelte';
	import Navbar from '$lib/navbar.svelte';
	import '../../app.css';
	import '../../neuphormism.css';
</script>

<Navbar />
<Bottomnav />
<main>
	<slot />
</main>
<Footer />
