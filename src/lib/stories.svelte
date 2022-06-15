<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import '../style.css';

	import 'swiper/css/pagination';

	// import required modules
	import { Pagination } from 'swiper';
	import Gechi from './gechi.svelte';
	import Interview from './interview.svelte';
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
				slidesPerView: 2,
				spaceBetween: 50
			}
		}}
		modules={[Pagination]}
		class="mySwiper"
	>
		<SwiperSlide><Gechi /></SwiperSlide>
		<SwiperSlide><Interview /></SwiperSlide>
	</Swiper>
</div>
