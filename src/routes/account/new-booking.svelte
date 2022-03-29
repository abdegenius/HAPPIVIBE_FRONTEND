<script>
	import { browser } from '$app/env';
	import API from "../../services/Api"
	import Notiflix from 'notiflix';

	let firstname = '';
	let lastname = '';
	let gender = '';
	let phone = '';
	let country = '';
	let location = '';
	let salutation = '';
	let marital_status = '';
	let nature_of_call = '';
	let their_relationship_with_you = '';
	let name_they_know_you_with = '';
	let name_they_call_you = '';
	let name_you_call_them = '';
	let native_language = '';
	let favorite_song = '';
	let how_did_you_hear_about_happivibe = '';
	let date_to_make_call = '';
	let time_to_make_call = '';
		
		
		
	const NEXT = (e) => {
		e.preventDefault();

		if(firstname == ''){
			if(browser){
				Notiflix.Report.failure("Field Required", "Firstname is required", "Fix")
			}
		}
		else if(lastname == ''){
			if(browser){
				Notiflix.Report.failure("Field Required", "Lastname is required", "Fix")
			}
		}
		else if(phone == ''){
			if(browser){
				Notiflix.Report.failure("Field Required", "Phone is required", "Fix")
			}
		}
		else if(location == ''){
			if(browser){
				Notiflix.Report.failure("Field Required", "Location is required", "Fix")
			}
		}
		else{
			document.getElementById('first').style.display = 'none';
			document.getElementById('second').style.display = 'block';
			document.getElementById('third').style.display = 'none';
			if(document.getElementById('secondTab').classList.contains("border-gray-200")){
				document.getElementById('firstTab').classList.replace(active, inactive);
				document.getElementById('secondTab').classList.replace(inactive, active);
				document.getElementById('thirdTab').classList.replace(active, inactive);
			}
		}
	};
	const FINAL = (e) => {
		e.preventDefault();
		document.getElementById('first').style.display = 'none';
		document.getElementById('second').style.display = 'none';
		document.getElementById('third').style.display = 'block';
        if(document.getElementById('thirdTab').classList.contains("border-gray-200")){
			document.getElementById('firstTab').classList.replace(active, inactive);
			document.getElementById('secondTab').classList.replace(active, inactive);
			document.getElementById('thirdTab').classList.replace(inactive, active);
		}
	};
	let active = 'border-orange-400'
	let inactive = 'border-gray-200'
    const FIRST = (e) => {
		e.preventDefault();
		document.getElementById('first').style.display = 'block';
		document.getElementById('second').style.display = 'none';
		document.getElementById('third').style.display = 'none';
		if(document.getElementById('firstTab').classList.contains("border-gray-200")){
			document.getElementById('firstTab').classList.replace(inactive, active);
			document.getElementById('secondTab').classList.replace(active, inactive);
			document.getElementById('thirdTab').classList.replace(active, inactive);
		}
	};
    const SECOND = (e) => {
		e.preventDefault();
		document.getElementById('first').style.display = 'none';
		document.getElementById('second').style.display = 'block';
		document.getElementById('third').style.display = 'none';
        if(document.getElementById('secondTab').classList.contains("border-gray-200")){
			document.getElementById('firstTab').classList.replace(active, inactive);
			document.getElementById('secondTab').classList.replace(inactive, active);
			document.getElementById('thirdTab').classList.replace(active, inactive);
		}
	};
    const THIRD = (e) => {
		e.preventDefault();
		document.getElementById('first').style.display = 'none';
		document.getElementById('second').style.display = 'none';
		document.getElementById('third').style.display = 'block';
        if(document.getElementById('thirdTab').classList.contains("border-gray-200")){
			document.getElementById('firstTab').classList.replace(active, inactive);
			document.getElementById('secondTab').classList.replace(active, inactive);
			document.getElementById('thirdTab').classList.replace(inactive, active);
		}
	};
	

	const SAVE_BOOKING = (async(e) => {
		e.preventDefault();
		const execute = await API.post("add-booking", {
			firstname,
			lastname,
			gender,
			phone,
			country,
			location,
			salutation,
			marital_status,
			nature_of_call,
			their_relationship_with_you,
			name_they_know_you_with,
			name_they_call_you,
			name_you_call_them,
			native_language,
			favorite_song,
			how_did_you_hear_about_happivibe,
			date_to_make_call,
			time_to_make_call
		})

		if(execute.error == false){
			Notiflix.Report.success("Successful", "Hurray! Booking form filled successfully.. ", "Next")
			if(browser){
				window.location.assign('/account/chat/'+execute.data[1].id)
			}
		}
		else{
			Notiflix.Report.failure("Failed", "Unable to complete booking an error occurred please fill all the provided inputs","Ok")
		}
	})
</script>

<div class="space-x-10 flex flex-wrap justify-start items-center mt-12">
	<div class="pb-2 border-b-4 cursor-pointer border-orange-400" id="firstTab">
		<span on:click={FIRST} class="font-bold text-xl text-gray-600">Their Information</span>
	</div>
	<div class="pb-2 border-b-4 border-gray-200 cursor-pointer" id="secondTab">
		<span on:click={SECOND} class="font-bold text-xl text-gray-600">Call Details</span>
	</div>
	<div class="pb-2 border-b-4 border-gray-200 cursor-pointer" id="thirdTab">
		<span on:click={THIRD} class="font-bold text-xl text-gray-600">Final Step</span>
	</div>
</div>

<div class="mt-12">
	<form method="POST" on:submit|preventDefault={SAVE_BOOKING}>
		<div id="first">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="mb-4">
					<label for="firstname" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
						>First Name</label
					>
					<input
						type="text"
						id="firstname"
						bind:value={firstname}
						class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
					/>
				</div>
				<div class="mb-4">
					<label for="lastname" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
						>Last Name</label
					>
					<input
						type="text"
						id="lastname"
						bind:value={lastname}
						class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
					/>
				</div>
				<div class="mb-4">
					<label for="gender" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
						>Gender</label
					>
					<select
						id="gender"
						bind:value={gender}
						class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
					>
						<option value="Female">Female</option>
						<option value="Male">Male</option>
					</select>
				</div>
				<div class="mb-4">
					<label for="phone" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
						>Phone Number(Without Coutnry Code)</label
					>
					<input
						type="text"
						id="phone"
						bind:value={phone}
						class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
					/>
				</div>

				<div class="mb-4">
					<label for="country" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
						>Country</label
					>
					<select
						id="country"
						bind:value={country}
						class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
					>
						<option value="Nigeria" selected>Nigeria</option>
						<option value="Ghana">Male</option>
					</select>
				</div>
				<div class="mb-4">
					<label for="location" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
						>Location</label
					>
					<input
						type="text"
						id="location"
						bind:value={location}
						class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
					/>
				</div>

				<div class="mb-4">
					<label for="salutation" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
						>Salutation</label
					>
					<select
						id="salutation"
						bind:value={salutation}
						class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
					>
						<option value="Mr">Mr</option>
						<option value="Mrs">Mrs</option>
					</select>
				</div>

				<div class="mb-4">
					<label
						for="marital_status"
						class="block text-gray-800 font-semibold text-sm uppercase mb-2">Marital status</label
					>
					<select
						id="marital_status"
						bind:value={marital_status}
						class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
					>
						<option value="Single">Single</option>
						<option value="Married">Married</option>
					</select>
				</div>
			</div>

			<button
				type="button"
				on:click={NEXT}
				class="mt-6 bg-orange-400 text-white text-center font-bold rounded-lg p-4 md:px-12"
				>Proceed To Next Step</button
			>
		</div>
		<div id="second" class="hidden">
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
						<option value="Appreciation">Appreciation</option>
						<option value="Celebratory">Celebratory</option>
					</select>
				</div>
				<div class="mb-4">
					<label
						for="their_relationship_with_you"
						class="block text-gray-800 font-semibold text-sm uppercase mb-2"
						>Their Relationship With You</label
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

							<button
							type="button"
                            on:click={FINAL}
                            class="mt-6 bg-orange-400 text-white text-center font-bold rounded-lg p-4 md:px-12"
                            >Proceed To Final Step</button
                        >
		</div>
		<div id="third" class="hidden">
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
						<option value="Whatsapp">Whatsapp</option>
						<option value="Friend">Friend</option>
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
				type="submit"
				class="mt-6 bg-orange-400 text-white text-center font-bold rounded-lg p-4 md:px-12"
				>Book The Call</button
			>
		</div>
	</form>
</div>
