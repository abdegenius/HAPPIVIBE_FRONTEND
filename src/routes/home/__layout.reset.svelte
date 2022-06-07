<script>
	import Footer from '$lib/footer.svelte';
	import Navbar from '$lib/navbar.svelte';
	import '../../app.css';
</script>

<Navbar />
<main>
	<slot />
</main>
<Footer />
