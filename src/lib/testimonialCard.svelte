<script>
	export let testimonialText =
		"Thank you for the services you render. Dad won't stop laughing and smiling since yesterday. He even gave us some money to get whatever we wanted. Been a while I saw him that way. Thank you @happyvibe. You have me now!";
	export let name = 'Olivia Chukwu';
	export let testimonialImage = 'https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg';
	export let star = 'solid';
</script>

<div class="carousel-item relative float-left w-full">
	<img
		class="rounded-full shadow-lg mb-6 mx-auto"
		src={testimonialImage}
		alt="avatar"
		style="width: 150px"
	/>
	<div class="flex flex-wrap justify-center">
		<div class="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
			<h5 class="text-lg font-bold mb-3">{name}</h5>
			<p class="font-medium text-gray-700 mb-4" />
			<p class="text-gray-500 mb-6">
				<span class="text-[#FDCC0D]"><i class="fa-solid fa-quote-left" /></span>
				{testimonialText}
			</p>
			<p class="text-[#FDCC0D]">
				<i class="fa-solid fa-star" />
				<i class="fa-solid fa-star" />
				<i class="fa-solid fa-star" />
				<i class="fa-solid fa-star" />
				<i class="fa-{star} fa-star" />
			</p>
		</div>
	</div>
</div>
