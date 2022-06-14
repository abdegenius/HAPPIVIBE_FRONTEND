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
		img="/img/celebratory.svg"
		title="Celebratory Calls"
		content="As the name implies, it's a call made to someone who's celebrating something or to celebrate someone on their special day, or for a special reason."
	/>
	<CallService
		img="/img/appreciation.svg"
		title="Appreciatory Calls"
		content="This is the call we make on behalf of our clients to their loved ones to appreciate their loved ones, make them happy, and help them see how special they are."
	/>
	<CallService
		img="/img/reachout.svg"
		title="Reachout Calls"
		content="Reach-out calls are made to cheer people up, encourage people, or help people see the need to keep keeping on. It's a call made to someone who's going through a rough phase."
	/>
	<CallService
		img="/img/apology.svg"
		title="Apology Calls"
		content="This call is made to reconcile people back together. It's made to settle the differences between who is booking the call and who is receiving the call."
	/>
	<CallService
		img="/img/happy.svg"
		title="Self-Love Calls"
		content="This is a call you book for your own self. It's a call we make to you who is booking the call, to make you feel good and happy."
	/>
	<CallService
		img="/img/poetry.svg"
		title="Happivibe Poetry"
		content="This is a call package that allows our client express their thoughts and emotions through the use of poetry."
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
				slidesPerView: 2,
				spaceBetween: 20
			},
			'768': {
				slidesPerView: 4,
				spaceBetween: 40
			},
			'1024': {
				slidesPerView: 5,
				spaceBetween: 50
			}
		}}
		modules={[Pagination]}
		class="mySwiper"
	>
		<SwiperSlide
			><CallService
				img="/img/celebratory.svg"
				title="Celebratory Calls"
				content="As the name implies, it's a call made to someone who's celebrating something or to celebrate someone on their special day, or for a special reason."
			/></SwiperSlide
		>
		<SwiperSlide
			><CallService
				img="/img/appreciation.svg"
				title="Appreciatory Calls"
				content="This is the call we make on behalf of our clients to their loved ones to appreciate their loved ones, make them happy, and help them see how special they are."
			/></SwiperSlide
		>
		<SwiperSlide
			><CallService
				img="/img/reachout.svg"
				title="Reachout Calls"
				content="Reach-out calls are made to cheer people up, encourage people, or help people see the need to keep keeping on. It's a call made to someone who's going through a rough phase."
			/></SwiperSlide
		>
		<SwiperSlide
			><CallService
				img="/img/apology.svg"
				title="Apology Calls"
				content="This call is made to reconcile people back together. It's made to settle the differences between who is booking the call and who is receiving the call."
			/></SwiperSlide
		>
		<SwiperSlide
			><CallService
				img="/img/happy.svg"
				title="Self-Love Calls"
				content="This is a call you book for your own self. It's a call we make to you who is booking the call, to make you feel good and happy."
			/></SwiperSlide
		>
		<SwiperSlide
			><CallService
				img="/img/poetry.svg"
				title="Happivibe Poetry"
				content="This is a call package that allows our client express their thoughts and emotions through the use of poetry."
			/></SwiperSlide
		>
	</Swiper>
</div>
