<script>
	export let item = '';
	export let link = '/login';
</script>

<div class="md:w-[60%] md:mx-auto">
	<a href={link}
		><button
			class="uppercase bg-primary text-white w-full mt-5 rounded shadow-lg py-3 px-3 text-sm font-semibold"
			>{item}</button
		></a
	>
</div>
