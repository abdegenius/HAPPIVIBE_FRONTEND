<script>
	export let img = '/img/teams.jpg';
	export let pageID = 'Meet our team';
	export let idDetails = '';
</script>

<div class="relative overflow-hidden bg-no-repeat bg-bottom md:bg-center w-full md:h-80 h-52">
	<img src={img} class="" alt="" />
	<div
		class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
		style="background-color: rgba(237,162,0,0.71);"
	>
		<div class="flex justify-left items-center h-full">
			<div class="md:ml-14 mx-5 py-5 space-y-3">
				<h2
					class="text-white opacity-100 text-left capitalize lg:text-7xl md:text-5xl text-3xl font-extrabold"
				>
					{pageID}
				</h2>
				<p class="text-white opacity-100 text-left md:text-xl text-base">
					{idDetails}
				</p>
			</div>
		</div>
	</div>
</div>
