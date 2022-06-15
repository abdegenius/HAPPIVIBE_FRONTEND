<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import '../style.css';

	import 'swiper/css/pagination';

	// import required modules
	import { Pagination } from 'swiper';
</script>

<div class="">
	<Swiper
		slidesPerView={1}
		spaceBetween={10}
		pagination={{
			clickable: true
		}}
		breakpoints={{
			'640': {
				slidesPerView: 1,
				spaceBetween: 20
			},
			'768': {
				slidesPerView: 1,
				spaceBetween: 40
			},
			'1024': {
				slidesPerView: 1,
				spaceBetween: 50
			}
		}}
		modules={[Pagination]}
		class="mySwiper"
	>
		<SwiperSlide
			><iframe
				src="https://www.youtube.com/embed/40cOTSZ7MhA"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				class="w-full md:h-[500px]"
			/></SwiperSlide
		>
		<SwiperSlide
			><iframe
				src="https://www.youtube-nocookie.com/embed/teB0Z87yngk"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				class="w-full md:h-[500px]"
			/></SwiperSlide
		>
	</Swiper>
</div>
