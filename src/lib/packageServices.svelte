<script>
	import CallService from './callService.svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import '../style.css';

	import 'swiper/css/pagination';

	// import required modules
	import { Pagination } from 'swiper';
</script>

<div class="space-y-5 md:space-y-0 md:grid md:grid-cols-3 md:mx-10 md:gap-x-8 md:block hidden">
	<CallService
		img="/img/checkup.svg"
		title="Happivibe CheckUps"
		content="Got a loved one in prison, or in a hospital or in a nursing home who you would want to reach out to constantly? This package has got you covered."
	/>
	<CallService
		img="/img/sound.svg"
		title="Happivibe Sounds"
		content="A gifted singer staff will either call you and sing beautiful tunes, or leave a music voicenote for you in the morning. Imagine waking up to a personalized song. Really, just imagine it."
	/>
	<CallService
		img="/img/comedy.svg"
		title="Happivibe Comedy"
		content="This package offers you your very own personal comedian; a staff assigned to make you laugh with jokes & funny stories. We could all use a stress reliever in our lives."
	/>
	<CallService
		img="/img/celebrity.svg"
		title="Happivibe Celebrity Package"
		content="Happivibe has celebrities and public figures from music, to movies, to Tv shows, not forgetting on-air-personalities who will be available to call you and make your day."
	/>
</div>

<div class="md:hidden">
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
				slidesPerView: 2,
				spaceBetween: 40
			},
			'1024': {
				slidesPerView: 3,
				spaceBetween: 50
			}
		}}
		modules={[Pagination]}
		class="mySwiper"
	>
		<SwiperSlide
			><CallService
				img="/img/checkup.svg"
				title="Happivibe CheckUps"
				content="Got a loved one in prison, or in a hospital or in a nursing home who you would want to reach out to constantly? This package has got you covered."
			/></SwiperSlide
		>
		<SwiperSlide
			><CallService
				img="/img/sound.svg"
				title="Happivibe Sounds"
				content="A gifted singer staff will either call you and sing beautiful tunes, or leave a music voicenote for you in the morning. Imagine waking up to a personalized song. Really, just imagine it."
			/></SwiperSlide
		>
		<SwiperSlide
			><CallService
				img="/img/comedy.svg"
				title="Happivibe Comedy"
				content="This package offers you your very own personal comedian; a staff assigned to make you laugh with jokes & funny stories. We could all use a stress reliever in our lives."
			/></SwiperSlide
		>
		<SwiperSlide
			><CallService
				img="/img/celebrity.svg"
				title="Happivibe Celebrity Package"
				content="Happivibe has celebrities and public figures from music, to movies, to Tv shows, not forgetting on-air-personalities who will be available to call you and make your day."
			/></SwiperSlide
		>
	</Swiper>
</div>
