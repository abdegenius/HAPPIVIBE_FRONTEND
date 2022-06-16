<script>
	import Button from './button.svelte';
</script>

<div>
	<div
		class="accordion accordion-flush md:grid md:grid-cols-3 md:space-y-0 space-y-10"
		id="accordionFlush"
	>
		<div class="accordion-item">
			<div>
				<img src="/img/appreciation.svg" alt="" />
				<h2 class="accordion-header border-y-2 border-y-primary mb-0" id="flush-headingOne">
					<button
						class="accordion-button relative active:text-primary flex items-center w-full py-4 px-5 text-base text-primary font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#flush-collapseOne"
						aria-expanded="false"
						aria-controls="flush-collapseOne"
						style="color: #FFA500;"
					>
						Appreciatory Calls
					</button>
				</h2>
			</div>
			<div
				id="flush-collapseOne"
				class="accordion-collapse border-0 collapse show"
				aria-labelledby="flush-headingOne"
				data-bs-parent="#accordionFlush"
			>
				<div class="accordion-body py-4 px-5 text-sm text-justify space-y-3">
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
		<div class="accordion-item">
			<div>
				<img src="/img/celebratory.svg" alt="" />
				<h2 class="accordion-header border-y-2 border-y-primary mb-0" id="flush-headingTwo">
					<button
						class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-primary font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#flush-collapseTwo"
						aria-expanded="false"
						aria-controls="flush-collapseTwo"
						style="color: #FFA500;"
					>
						Celebratory
					</button>
				</h2>
			</div>
			<div
				id="flush-collapseTwo"
				class="accordion-collapse border-0 collapse"
				aria-labelledby="flush-headingTwo"
				data-bs-parent="#accordionFlush"
			>
				<div class="accordion-body py-4 px-5 text-sm text-justify space-y-3">
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
		</div>
		<div class="accordion-item ">
			<div>
				<img src="/img/reachout.svg" alt="" />
				<h2 class="accordion-header border-y-2 border-y-primary mb-0" id="flush-headingThree">
					<button
						class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-primary font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#flush-collapseThree"
						aria-expanded="false"
						aria-controls="flush-collapseThree"
						style="color: #FFA500;"
					>
						Reach-Out Calls
					</button>
				</h2>
			</div>
			<div
				id="flush-collapseThree"
				class="accordion-collapse collapse"
				aria-labelledby="flush-headingThree"
				data-bs-parent="#accordionFlush"
			>
				<div class="accordion-body py-4 px-5 text-sm text-justify space-y-3">
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
		<div class="accordion-item">
			<div>
				<img src="/img/apology.svg" alt="" />
				<h2 class="accordion-header border-y-2 border-y-primary mb-0" id="flush-headingFour">
					<button
						class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-primary font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#flush-collapseFour"
						aria-expanded="false"
						aria-controls="flush-collapseFour"
						style="color: #FFA500;"
					>
						Apology Calls
					</button>
				</h2>
			</div>
			<div
				id="flush-collapseFour"
				class="accordion-collapse collapse"
				aria-labelledby="flush-headingFour"
				data-bs-parent="#accordionFlush"
			>
				<div class="accordion-body py-4 px-5 text-sm text-justify">
					This call is made to reconcile people back together. It's made to settle the differences
					between who is booking the call and who is receiving the call. Apology calls are made with
					the sole aim of rekindling the fire of a dying relationship or fix back an already dead
					relationship.
				</div>
			</div>
		</div>
		<div class="accordion-item ">
			<div>
				<img src="/img/happy.svg" alt="" />
				<h2 class="accordion-header border-y-2 border-y-primary mb-0" id="flush-headingFive">
					<button
						class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-primary font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#flush-collapseFive"
						aria-expanded="false"
						aria-controls="flush-collapseFive"
						style="color: #FFA500;"
					>
						Self-Love Calls
					</button>
				</h2>
			</div>
			<div
				id="flush-collapseFive"
				class="accordion-collapse collapse"
				aria-labelledby="flush-headingFive"
				data-bs-parent="#accordionFlush"
			>
				<div class="accordion-body py-4 px-5 text-sm text-justify space-y-3">
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
		<div class="accordion-item ">
			<div>
				<img src="/img/poetry.svg" alt="" />
				<h2 class="accordion-header border-y-2 border-y-primary mb-0" id="flush-headingSix">
					<button
						class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-primary font-bold text-left bg-white border-0 rounded-none transition focus:outline-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#flush-collapseSix"
						aria-expanded="false"
						aria-controls="flush-collapseSix"
						style="color: #FFA500;"
					>
						HappiVibe Poetry
					</button>
				</h2>
			</div>
			<div
				id="flush-collapseSix"
				class="accordion-collapse collapse"
				aria-labelledby="flush-headingSix"
				data-bs-parent="#accordionFlush"
			>
				<div class="accordion-body py-4 px-5 text-sm text-justify space-y-3">
					<p>
						This is a call package that allows our client express their thoughts and emotions
						through the use of poetry.
					</p>

					<p>
						A client tells us what the message of the poem would be about. Our poetry team then
						writes a poem around what the client wants. Then, Happivibe makes a call to whom the
						client wants us to call and we say the poem to the person.
					</p>

					<p>
						It could be to express how much our client loves someone. It could be to cheer up who is
						going through a rough phase. It could be to celebrate someone on their special day.
					</p>

					<p>We write a poem for them and make a call to them, on behalf of our client.</p>
				</div>
			</div>
		</div>
		<Button link="/login" item="book a call now" />
	</div>
</div>
