<script>
	import Accordion from './accordion.svelte';
	import Button from './button.svelte';
</script>

<div class="lg:px-24 md:px-10 px-5 py-10">
	<div class="md:block hidden">
		<!-- Appreciatory -->
		<div class="card md:grid md:grid-cols-2 md:place-items-center md:gap-10">
			<img src="/img/appreciation.svg" alt="" />
			<div>
				<h3 class="font-bold text-xl md:text-2xl md:pb-5 text-primary">Appreciatory Call</h3>
				<div class="text-xs space-y-3 md:text-base md:text-justify">
					<p>
						This is the call we make on behalf of our clients to their loved ones to appreciate
						their loved ones for the big & little things they do for & mean to them. To make them
						happy, and help them know just how special they are to our clients.
					</p>
					<p>
						Who we'd be calling for you might not necessarily be celebrating anything. It's a
						feel-good call. A call made to someone dear to your heart just to appreciate them for
						who they are and the amazing things they've been doing.
					</p>
				</div>
			</div>
		</div>
		<!-- Celebratory -->
		<div class="card md:grid md:grid-cols-2 md:place-items-center md:gap-10">
			<div>
				<h3 class="font-bold text-xl md:text-2xl md:pb-5 text-primary">Celebratory Call</h3>
				<div class="text-xs space-y-3 md:text-base md:text-justify">
					<p>
						As the name implies, it's a call made to celebrate someone on their special day, or for
						a special reason. It could be to celebrate someone and make them feel special on their
						birthday or their wedding day.
					</p>
					<p>
						Someone dear graduated? Gave birth? bought a house? Any special occasion at all, with
						this service we'd help you call them & make them happy as we celebrate them.
					</p>
				</div>
			</div>
			<img src="/img/celebratory.svg" alt="" />
		</div>
		<!-- Reach-Out -->
		<div class="card md:grid md:grid-cols-2 md:place-items-center md:gap-10">
			<img src="/img/reachout.svg" alt="" />
			<div>
				<h3 class="font-bold text-xl md:text-2xl md:pb-5 text-primary">Reach-out Call</h3>
				<div class="text-xs space-y-3 md:text-base md:text-justify">
					<p>
						Reach-out calls are made to cheer people up, encourage people, or help people see the
						need to keep keeping on. It's a call made to someone who's sick, lost a fortune, or
						generally going through a rough phase.
					</p>
					<p>
						An emotionally intuitive & soothing call to someone who's not having the best time
						emotionally and/or in other ramifications. It's a call made to give hope and cheer up
						people who are sad, depressed, grieving the death of a loved one, etc.
					</p>
				</div>
			</div>
		</div>
		<!-- Apology -->
		<div class="card md:grid md:grid-cols-2 md:place-items-center md:gap-10">
			<div>
				<h3 class="font-bold text-xl md:text-2xl md:pb-5 text-primary">Apology Call</h3>
				<p class="text-xs md:text-base md:text-justify">
					This call is made to reconcile people back together. It's made to settle the differences
					between who is booking the call and who is receiving the call. Apology calls are made with
					the sole aim of rekindling the fire of a dying relationship or fix back an already dead
					relationship.
				</p>
			</div>
			<img src="/img/apology.svg" alt="" />
		</div>
		<!-- Self-love -->
		<div class="card md:grid md:grid-cols-2 md:place-items-center md:gap-10">
			<img src="/img/happy.svg" alt="" />
			<div>
				<h3 class="font-bold text-xl md:text-2xl md:pb-5 text-primary">Self-Love Call</h3>
				<div class="text-xs space-y-3 md:text-base md:text-justify">
					<p>
						This is a call you book for your own self. Say you are going through a rough patch, or
						need cheering up, this is a call we'd make to you to simply make you feel good,
						reassurred and happy again.
					</p>
					<p>
						It could be your special day and you want someone to call you to celebrate & appreciate
						you. With a Self-Love Call, you can book yourself a call and we'd call you to make you
						feel happy.
					</p>
				</div>
			</div>
		</div>

		<Button link="/login" item="book a call now" />
	</div>

	<!-- Accordion -->
	<div class="md:hidden">
		<Accordion />
	</div>
</div>
