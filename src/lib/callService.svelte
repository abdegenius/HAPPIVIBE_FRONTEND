<script>
	export let img = '/img/celebratory.svg';
	export let title = 'Celebratory Call';
	export let content =
		'Happivibe Services will call your birthday or anniversary celebrants and "happify" them with		songs they can deeply relate to, read them a sweet poem from you, or pray for them - your choice.';
</script>

<div class="card text-center py-7 px-3 rounded space-y-3 shadow-lg">
	<img src={img} alt="" />
	<h3 class="font-bold text-xl text-primary">{title}</h3>
	<p class="text-xs">{content}</p>
</div>
