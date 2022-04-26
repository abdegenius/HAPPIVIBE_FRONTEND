<script>
	import { browser } from '$app/env';
	import API from '../services/Api';
	import Notiflix from 'notiflix';

	let active = 'border-orange-400';
	let inactive = 'border-gray-200';

	const FIRST = (e) => {
		e.preventDefault();
		if (browser) {
			document.getElementById('first').style.display = 'block';
			document.getElementById('second').style.display = 'none';
			document.getElementById('third').style.display = 'none';
			document.getElementById('fourth').style.display = 'none';
			document.getElementById('firstTab').classList.replace(inactive, active);
			document.getElementById('secondTab').classList.replace(active, inactive);
			document.getElementById('thirdTab').classList.replace(active, inactive);
			document.getElementById('fourthTab').classList.replace(active, inactive);
		}
	};
	const SECOND = (e) => {
		e.preventDefault();
		if (browser) {
			document.getElementById('first').style.display = 'none';
			document.getElementById('second').style.display = 'block';
			document.getElementById('third').style.display = 'none';
			document.getElementById('fourth').style.display = 'none';
			document.getElementById('firstTab').classList.replace(active, inactive);
			document.getElementById('secondTab').classList.replace(inactive, active);
			document.getElementById('thirdTab').classList.replace(active, inactive);
			document.getElementById('fourthTab').classList.replace(active, inactive);
		}
	};
	const THIRD = (e) => {
		e.preventDefault();
		if (browser) {
			document.getElementById('first').style.display = 'none';
			document.getElementById('second').style.display = 'none';
			document.getElementById('third').style.display = 'block';
			document.getElementById('fourth').style.display = 'none';
			document.getElementById('firstTab').classList.replace(active, inactive);
			document.getElementById('secondTab').classList.replace(active, inactive);
			document.getElementById('thirdTab').classList.replace(inactive, active);
			document.getElementById('fourthTab').classList.replace(active, inactive);
		}
	};

	const FOURTH = (e) => {
		e.preventDefault();
		if (browser) {
			document.getElementById('first').style.display = 'none';
			document.getElementById('second').style.display = 'none';
			document.getElementById('third').style.display = 'none';
			document.getElementById('fourth').style.display = 'block';
			document.getElementById('firstTab').classList.replace(active, inactive);
			document.getElementById('secondTab').classList.replace(active, inactive);
			document.getElementById('thirdTab').classList.replace(active, inactive);
			document.getElementById('fourthTab').classList.replace(inactive, active);
		}
	};

	let your_firstname = '';
	let your_lastname = '';
	let your_gender = '';
	let your_phone = '';
	let your_country = '';
	let your_location = '';
	let your_salutation = '';
	let your_marital_status = '';
	let their_firstname = '';
	let their_lastname = '';
	let their_gender = '';
	let their_phone = '';
	let their_country = '';
	let their_location = '';
	let their_salutation = '';
	let their_marital_status = '';
	let nature_of_call = '';
	let their_relationship_with_you = '';
	let name_they_know_you_with = '';
	let name_they_call_you = '';
	let name_you_call_them = '';
	let native_language = '';
	let favorite_song = '';
	let memories = '';
	let what_you_want_to_say = '';
	let how_did_you_hear_about_happivibe = '';
	let date_to_make_call = '';
	let time_to_make_call = '';

	const SAVE_BOOKING = async (e) => {
		e.preventDefault();
		const execute = await API.post('add-booking-anonymous', {
			your_firstname,
			your_lastname,
			your_gender,
			your_phone,
			your_country,
			your_location,
			your_salutation,
			your_marital_status,
			their_firstname,
			their_lastname,
			their_gender,
			their_phone,
			their_country,
			their_location,
			their_salutation,
			their_marital_status,
			nature_of_call,
			their_relationship_with_you,
			name_they_know_you_with,
			name_they_call_you,
			name_you_call_them,
			native_language,
			favorite_song,
			memories,
			what_you_want_to_say,
			how_did_you_hear_about_happivibe,
			date_to_make_call,
			time_to_make_call
		});

		if (execute.error == false) {
			Notiflix.Report.success('Successful', 'Hurray! Booking form filled successfully.. ', 'Next');
			if (browser) {
				window.location.assign('/account/chat/' + execute.data[1].id);
			}
		} else {
			Notiflix.Report.failure(
				'Failed',
				'Unable to complete booking an error occurred please fill all the provided inputs',
				'Ok'
			);
		}
	};
</script>

<div class="w-full bg-gray-100 min-h-screen">
	<div class="px-8 py-24 bg-orange-400 rounded-b-3xl">
		<h1 class="text-3xl text-white font-bold">BOOK A CALL</h1>
		<br />
		<a href="/" class="px-6 py-3 text-center text-white font-bold text-lg bg-black rounded-lg"
			>Back
		</a>
	</div>

	<div class="mt-12 p-8 md:px-24 lg:px-32 xl:px-40">
		<div class="space-y-6 space-x-4 md:space-x-10 flex flex-wrap justify-start items-center mb-12">
			<div class="border-b-4 cursor-pointer border-orange-400" id="firstTab">
				<span on:click={FIRST} class="font-bold text-xl text-gray-600">Your Information</span>
			</div>
			<div class="border-b-4 cursor-pointer border-gray-200" id="secondTab">
				<span on:click={SECOND} class="font-bold text-xl text-gray-600">Their Information</span>
			</div>
			<div class="border-b-4 border-gray-200 cursor-pointer" id="thirdTab">
				<span on:click={THIRD} class="font-bold text-xl text-gray-600">Call Details</span>
			</div>
			<div class="border-b-4 border-gray-200 cursor-pointer" id="fourthTab">
				<span on:click={FOURTH} class="font-bold text-xl text-gray-600">Final Step</span>
			</div>
		</div>

		<form method="POST" on:submit|preventDefault={SAVE_BOOKING}>
			<div id="first">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="mb-4">
						<label for="firstname" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Your First Name</label
						>
						<input
							type="text"
							id="firstname"
							bind:value={your_firstname}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
					<div class="mb-4">
						<label for="lastname" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Your Last Name</label
						>
						<input
							type="text"
							id="lastname"
							bind:value={your_lastname}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
					<div class="mb-4">
						<label for="gender" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Your Gender</label
						>
						<select
							id="gender"
							bind:value={your_gender}
							class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						>
							<option value="Female">Female</option>
							<option value="Male">Male</option>
							<option value="Others">Others</option>
						</select>
					</div>
					<div class="mb-4">
						<label for="phone" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Your Phone Number</label
						>
						<input
							type="text"
							id="phone"
							bind:value={your_phone}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>

					<div class="mb-4">
						<label for="country" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Your Country</label
						>
						<select
							id="country"
							bind:value={your_country}
							class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						>
							<option value="78">Argentina</option>
							<option value="79">Australia</option>
							<option value="80">Austria</option>
							<option value="81">Bangladesh</option>
							<option value="82">Belgium</option>
							<option value="83">Benin</option>
							<option value="84">Brazil</option>
							<option value="85">Cape Verde</option>
							<option value="86">Cameroon</option>
							<option value="87">Canada</option>
							<option value="88">China</option>
							<option value="89">Cyprus</option>
							<option value="90">Denmark</option>
							<option value="91">Egypt</option>
							<option value="92">Equatorial Guinea</option>
							<option value="93">Ethiopia</option>
							<option value="94">Finland</option>
							<option value="95">France</option>
							<option value="96">Georgia</option>
							<option value="97">Germany</option>
							<option value="98">Ghana</option>
							<option value="99">Greece</option>
							<option value="100">Guinea</option>
							<option value="101">Guinea-Bissau</option>
							<option value="102">Hong Kong</option>
							<option value="103">India</option>
							<option value="104">Indonesia</option>
							<option value="105">Iran</option>
							<option value="106">Iraq</option>
							<option value="107">Israel</option>
							<option value="108">Italy</option>
							<option value="109">Jamaica</option>
							<option value="110">Japan</option>
							<option value="111">Kenya</option>
							<option value="112">Korea, South</option>
							<option value="113">Kuwait</option>
							<option value="114">Lebanon</option>
							<option value="115">Liberia</option>
							<option value="116">Libya</option>
							<option value="117">Madagascar</option>
							<option value="118">Malaysia</option>
							<option value="119">Maldives</option>
							<option value="120">Mexico</option>
							<option value="121">Myanmar</option>
							<option value="122">Netherlands</option>
							<option value="123">New Zealand</option>
							<option value="124">Niger</option>
							<option value="125" selected>Nigeria</option>
							<option value="126">Norway</option>
							<option value="127">Oman</option>
							<option value="128">Philippines</option>
							<option value="129">Poland</option>
							<option value="130">Portugal</option>
							<option value="131">Qatar</option>
							<option value="132">Romania</option>
							<option value="133">Russia</option>
							<option value="134">Rwanda</option>
							<option value="135">Saudi Arabia</option>
							<option value="136">Senegal</option>
							<option value="137">Sierra Leone</option>
							<option value="138">Singapore</option>
							<option value="139">South Africa</option>
							<option value="140">Spain</option>
							<option value="141">Sweden</option>
							<option value="142">Switzerland</option>
							<option value="143">Tanzania</option>
							<option value="144">Togo</option>
							<option value="145">Turkey</option>
							<option value="146">Uganda</option>
							<option value="147">Ukraine</option>
							<option value="148">United Arab Emirates</option>
							<option value="149">United Kingdom</option>
							<option value="150">United States</option>
							<option value="151">Vietnam</option>
							<option value="152">Zambia</option>
							<option value="153">Zanzibar</option>
							<option value="154">Zimbabwe</option>
						</select>
					</div>
					<div class="mb-4">
						<label for="location" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Your Location</label
						>
						<input
							type="text"
							id="location"
							bind:value={your_location}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>

					<div class="mb-4">
						<label for="salutation" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Your Salutation</label
						>
						<select
							id="salutation"
							bind:value={your_salutation}
							class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						>
							<option value="Mr">Mr</option>
							<option value="Ms">Ms</option>
							<option value="Mrs">Mrs</option>
							<option value="Miss">Miss</option>
							<option value="Dr">Doctor</option>
							<option value="Sir">Sir</option>
							<option value="Alhaji">Alhaji</option>
							<option value="Chief">Chief</option>
							<option value="Rev. ">Rev</option>
							<option value="">Prefer Not To Say</option>
						</select>
					</div>

					<div class="mb-4">
						<label
							for="marital_status"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2">Marital status</label
						>
						<select
							id="marital_status"
							bind:value={your_marital_status}
							class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						>
							<option value="single">Single</option>
							<option value="married">Married</option>
							<option value="divorced">Divorced</option>
						</select>
					</div>
				</div>
				<button
					type="button"
					on:click={SECOND}
					class="mt-6 bg-orange-400 text-white text-center font-bold rounded-lg p-4 md:px-12"
					>Next</button
				>
			</div>
			<div id="second" class="hidden">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="mb-4">
						<label for="firstname" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Their First Name</label
						>
						<input
							type="text"
							id="firstname"
							bind:value={their_firstname}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
					<div class="mb-4">
						<label for="lastname" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Their Last Name</label
						>
						<input
							type="text"
							id="lastname"
							bind:value={their_lastname}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
					<div class="mb-4">
						<label for="gender" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Their Gender</label
						>
						<select
							id="gender"
							bind:value={their_gender}
							class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						>
							<option value="Female">Female</option>
							<option value="Male">Male</option>
						</select>
					</div>
					<div class="mb-4">
						<label for="phone" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Their Phone Number(Without Coutnry Code)</label
						>
						<input
							type="text"
							id="phone"
							bind:value={their_phone}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>

					<div class="mb-4">
						<label for="country" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Their Country</label
						>
						<select
							id="country"
							bind:value={their_country}
							class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						>
							<option value="78">Argentina</option>
							<option value="79">Australia</option>
							<option value="80">Austria</option>
							<option value="81">Bangladesh</option>
							<option value="82">Belgium</option>
							<option value="83">Benin</option>
							<option value="84">Brazil</option>
							<option value="85">Cape Verde</option>
							<option value="86">Cameroon</option>
							<option value="87">Canada</option>
							<option value="88">China</option>
							<option value="89">Cyprus</option>
							<option value="90">Denmark</option>
							<option value="91">Egypt</option>
							<option value="92">Equatorial Guinea</option>
							<option value="93">Ethiopia</option>
							<option value="94">Finland</option>
							<option value="95">France</option>
							<option value="96">Georgia</option>
							<option value="97">Germany</option>
							<option value="98">Ghana</option>
							<option value="99">Greece</option>
							<option value="100">Guinea</option>
							<option value="101">Guinea-Bissau</option>
							<option value="102">Hong Kong</option>
							<option value="103">India</option>
							<option value="104">Indonesia</option>
							<option value="105">Iran</option>
							<option value="106">Iraq</option>
							<option value="107">Israel</option>
							<option value="108">Italy</option>
							<option value="109">Jamaica</option>
							<option value="110">Japan</option>
							<option value="111">Kenya</option>
							<option value="112">Korea, South</option>
							<option value="113">Kuwait</option>
							<option value="114">Lebanon</option>
							<option value="115">Liberia</option>
							<option value="116">Libya</option>
							<option value="117">Madagascar</option>
							<option value="118">Malaysia</option>
							<option value="119">Maldives</option>
							<option value="120">Mexico</option>
							<option value="121">Myanmar</option>
							<option value="122">Netherlands</option>
							<option value="123">New Zealand</option>
							<option value="124">Niger</option>
							<option value="125" selected>Nigeria</option>
							<option value="126">Norway</option>
							<option value="127">Oman</option>
							<option value="128">Philippines</option>
							<option value="129">Poland</option>
							<option value="130">Portugal</option>
							<option value="131">Qatar</option>
							<option value="132">Romania</option>
							<option value="133">Russia</option>
							<option value="134">Rwanda</option>
							<option value="135">Saudi Arabia</option>
							<option value="136">Senegal</option>
							<option value="137">Sierra Leone</option>
							<option value="138">Singapore</option>
							<option value="139">South Africa</option>
							<option value="140">Spain</option>
							<option value="141">Sweden</option>
							<option value="142">Switzerland</option>
							<option value="143">Tanzania</option>
							<option value="144">Togo</option>
							<option value="145">Turkey</option>
							<option value="146">Uganda</option>
							<option value="147">Ukraine</option>
							<option value="148">United Arab Emirates</option>
							<option value="149">United Kingdom</option>
							<option value="150">United States</option>
							<option value="151">Vietnam</option>
							<option value="152">Zambia</option>
							<option value="153">Zanzibar</option>
							<option value="154">Zimbabwe</option>
						</select>
					</div>
					<div class="mb-4">
						<label for="location" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Their Location</label
						>
						<input
							type="text"
							id="location"
							bind:value={their_location}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>

					<div class="mb-4">
						<label for="salutation" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Their Salutation</label
						>
						<select
							id="salutation"
							bind:value={their_salutation}
							class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						>
							<option value="Mr">Mr</option>
							<option value="Ms">Ms</option>
							<option value="Mrs">Mrs</option>
							<option value="Miss">Miss</option>
							<option value="Dr">Doctor</option>
							<option value="Sir">Sir</option>
							<option value="Alhaji">Alhaji</option>
							<option value="Chief">Chief</option>
							<option value="Rev. ">Rev</option>
							<option value="">Prefer Not To Say</option>
						</select>
					</div>

					<div class="mb-4">
						<label
							for="marital_status"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2">Marital status</label
						>
						<select
							id="marital_status"
							bind:value={their_marital_status}
							class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						>
							<option value="single">Single</option>
							<option value="married">Married</option>
							<option value="divorced">Divorced</option>
						</select>
					</div>
				</div>
				<button
					type="button"
					on:click={FIRST}
					class="mt-6 bg-black mr-4 text-white text-center font-bold rounded-lg p-4 md:px-12"
					>Previous</button
				>

				<button
					type="button"
					on:click={THIRD}
					class="mt-6 bg-orange-400 text-white text-center font-bold rounded-lg p-4 md:px-12"
					>Next</button
				>
			</div>
			<div id="third" class="hidden">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="mb-4">
						<label
							for="nature_of_call"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2">Nature of call</label
						>
						<select
							id="nature_of_call"
							bind:value={nature_of_call}
							class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						>
							<option value="Celebratory">Celebratory</option>
							<option value="Self-Love">Self-Love</option>
							<option value="Appreciation">Appreciation</option>
							<option value="Reachout">Reachout</option>
							<option value="Poetry">Poetry</option>
							<option value="Apology">Apology</option>
						</select>
					</div>
					<div class="mb-4">
						<label
							for="their_relationship_with_you"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Their Their Relationship With You</label
						>
						<input
							type="text"
							id="their_relationship_with_you"
							bind:value={their_relationship_with_you}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
					<div class="mb-4">
						<label
							for="name_they_know_you_with"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Names They Know You With</label
						>
						<input
							type="text"
							id="name_they_know_you_with"
							bind:value={name_they_know_you_with}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
					<div class="mb-4">
						<label
							for="native_language"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Their Native Language</label
						>
						<input
							type="text"
							id="native_language"
							bind:value={native_language}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
					<div class="mb-4">
						<label
							for="name_they_call_you"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Names They Call You</label
						>
						<input
							type="text"
							id="name_they_call_you"
							bind:value={name_they_call_you}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
					<div class="mb-4">
						<label
							for="name_you_call_them"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Names You Call Them</label
						>
						<input
							type="text"
							id="name_you_call_them"
							bind:value={name_you_call_them}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
					<div class="mb-4">
						<label
							for="favorite_song"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Their Favorite Song</label
						>
						<input
							type="text"
							id="favorite_song"
							bind:value={favorite_song}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="mb-4">
						<label for="memories" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Favorite Memory With Them</label
						>
						<textarea
							rows="4"
							id="memories"
							bind:value={memories}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>

					<div class="mb-4">
						<label
							for="what_you_want_to_say"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>What You Want To Say</label
						>
						<textarea
							rows="4"
							id="what_you_want_to_say"
							bind:value={what_you_want_to_say}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
				</div>

				<button
					type="button"
					on:click={SECOND}
					class="mt-6 bg-black mr-4 text-white text-center font-bold rounded-lg p-4 md:px-12"
					>Previous</button
				>

				<button
					type="button"
					on:click={FOURTH}
					class="mt-6 bg-orange-400 text-white text-center font-bold rounded-lg p-4 md:px-12"
					>Next</button
				>
			</div>
			<div id="fourth" class="hidden">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="mb-4">
						<label
							for="how_did_you_hear_about_happivibe"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>How did you hear about happivibe</label
						>
						<select
							id="how_did_you_hear_about_happivibe"
							bind:value={how_did_you_hear_about_happivibe}
							class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						>
							<option value="friend">Friend</option>
							<option value="search">Search</option>
							<option value="facebook">Facebook</option>
							<option value="twitter">Twitter</option>
							<option value="others">Others</option>
						</select>
					</div>
					<div class="mb-4">
						<label
							for="date_to_make_call"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Date to make call</label
						>
						<input
							type="text"
							id="date_to_make_call"
							bind:value={date_to_make_call}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
					<div class="mb-4">
						<label
							for="time_to_make_call"
							class="block text-gray-800 font-semibold text-sm uppercase mb-2"
							>Time to make call</label
						>
						<input
							type="text"
							id="time_to_make_call"
							bind:value={time_to_make_call}
							class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
						/>
					</div>
				</div>
				<button
					type="button"
					on:click={THIRD}
					class="mt-6 bg-black mr-4 text-white text-center font-bold rounded-lg p-4 md:px-12"
					>Previous</button
				>

				<button
					type="submit"
					class="mt-6 bg-orange-400 text-white text-center font-bold rounded-lg p-4 md:px-12"
					>Book The Call</button
				>
			</div>
		</form>
	</div>
</div>
