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

<div class="space-y-5 md:space-y-0 md:grid md:grid-cols-3 lg:mx-8 md:mx-5 md:gap-8 md:block hidden">
	<CallService
		img="/img/celebratory.svg"
		title="Celebratory Calls"
		content="As the name implies, it's a call made to anyone who's celebrating something. Wanna celebrate a loved one on their special day, or for any other special reason? This is the package! 😁"
	/>
	<CallService
		img="/img/appreciation.svg"
		title="Appreciatory Calls"
		content="This is the call we make on behalf of our clients to their loved ones to appreciate their loved ones for the big & little things they do for & mean to them. To make them happy, and help them know just how special they are to our clients."
	/>
	<CallService
		img="/img/reachout.svg"
		title="Reachout Calls"
		content="Reach-out calls are made to cheer people up, encourage people, or help people see the need to keep keeping on. It's a call made to someone who's sick, lost a fortune or a loved one, or generally going through a rough phase."
	/>
	<CallService
		img="/img/apology.svg"
		title="Apology Calls"
		content="This call is made to reconcile people back together. It is made in a bid to settle the differences between you and whoever you might have had an issue with and ultimately reunite both parties again."
	/>
	<CallService
		img="/img/happy.svg"
		title="Self-Love Calls"
		content="This is a call you book for your own self.  Say you are going through a rough patch, or need cheering up, this is a call we'd make to you to simply make you feel good, reassurred and happy again."
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
				img="/img/celebratory.svg"
				title="Celebratory Calls"
				content="As the name implies, it's a call made to anyone who's celebrating something. Wanna celebrate a loved one on their special day, or for any other special reason? This is the package! 😁"
			/></SwiperSlide
		>
		<SwiperSlide
			><CallService
				img="/img/appreciation.svg"
				title="Appreciatory Calls"
				content="This is the call we make on behalf of our clients to their loved ones to appreciate their loved ones for the big & little things they do for & mean to them. To make them happy, and help them know just how special they are to our clients."
			/></SwiperSlide
		>
		<SwiperSlide
			><CallService
				img="/img/reachout.svg"
				title="Reachout Calls"
				content="Reach-out calls are made to cheer people up, encourage people, or help people see the need to keep keeping on. It's a call made to someone who's sick, lost a fortune or a loved one, or generally going through a rough phase."
			/></SwiperSlide
		>
		<SwiperSlide
			><CallService
				img="/img/apologies.svg"
				margin="mb-5"
				title="Apology Calls"
				content="This call is made to reconcile people back together. It is made in a bid to settle the differences between you and whoever you might have had an issue with and ultimately reunite both parties again."
			/></SwiperSlide
		>
		<SwiperSlide
			><CallService
				img="/img/selflove.svg"
				margin="mb-8"
				title="Self-Love Calls"
				content="This is a call you book for your own self.  Say you are going through a rough patch, or need cheering up, this is a call we'd make to you to simply make you feel good, reassurred and happy again."
			/></SwiperSlide
		>
	</Swiper>
</div>
