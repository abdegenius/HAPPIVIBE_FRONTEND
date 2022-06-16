<script>
	export let span = '';
	export let social1 = 'fab fa-facebook fa-xl';
	export let social1Link = '';
	export let social2 = 'fab fa-twitter fa-xl';
	export let social2Link = '';
	export let social3 = 'fab fa-instagram fa-xl';
	export let social3Link = '';
</script>

<div class={span}>
	<div class="relative">
		<div>
			<img src="/img/form2.png" alt="" class="rounded-tr-lg rounded-tl-lg overflow-hidden" />
		</div>
		<div class="bg-black text-white mx-auto relative -top-16 bg-opacity-25 shadow-lg py-2">
			<h3 class="text-primary font-bold">John Doe</h3>
			<p>Executive Dancer</p>
		</div>
	</div>
	<div class="space-x-5 text-gray-500 hover:text-primary relative -top-10 hidden hover:block">
		<a class="" href={social1Link}><i class={social1} /></a>
		<a class="" href={social2Link}><i class={social2} /></a>
		<a class="" href={social3Link}><i class={social3} /></a>
	</div>
</div>
