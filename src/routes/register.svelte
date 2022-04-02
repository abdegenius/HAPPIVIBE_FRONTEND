<script>
	import { browser } from '$app/env';
	import { onMount } from 'svelte'; 

	import API from '../services/Api';
	import { USER, TOKEN } from '../services/Store';

	const NEXT = (e) => {
		e.preventDefault();
		document.getElementById('first').style.display = 'none';
		document.getElementById('second').style.display = 'block';
	};
	const PREVIEW = (e) => {
		e.preventDefault();
		document.getElementById('first').style.display = 'block';
		document.getElementById('second').style.display = 'none';
	};

	let password,
		fullname,
		gender,
		email,
		phone,
		country,
		location,
		marital_status,
		salutation,
		referred_by = '';

	const SIGNUP = async (e) => {
		e.preventDefault();
		let execute = await API.post('register', {
			fullname,
			gender,
			email,
			phone,
			password,
			country,
			location,
			marital_status,
			salutation,
			referred_by
		});
		if (browser) {
			USER.set(execute.data[0]);
			TOKEN.set(execute.data[1]);
			window.location.assign('/account');
		}
	};
	onMount(() => {
		if ($TOKEN) {
			if (browser) {
				window.location.assign('/account');
			}
		}
	});
</script>

<section class="w-screen min-h-screen bg-gray-50">
	<div class="flex justify-start">
		<div
			class="hidden md:flex md:items-center md:w-2/5 relative min-h-screen bg-cover bg-[url('/img/form.png')]"
		>
			<div class="fixed top-0 left-0 m-8">
				<img src="/img/logo-white.png" alt="Logo" class="w-40 h-16" />
			</div>
			<div class="mx-auto">
				<h1 class="text-gray-50 font-black text-4xl text-center tracking-wide">
					THE UBER OF<br /> HAPPINESS
				</h1>
			</div>
		</div>
		<div
			class="flex justify-center items-start w-full md:w-3/5 relative min-h-screen bg-transparent"
		>
			<div class="mx-auto h-24 fixed top-0 my-8">
				<ul class="flex flex-row">
					<li class="mx-3 sm:mx-6">
						<a
							href="/"
							class="text-sm sm:text-lg font-light text-black hover:border-b-2 hover:border-black hover:pb-4"
							>Website Home</a
						>
					</li>
					<li class="mx-3 sm:mx-6">
						<a
							href="/"
							class="text-sm sm:text-lg font-light text-black hover:border-b-2 hover:border-black hover:pb-4"
							>About Us</a
						>
					</li>
					<li class="mx-3 sm:mx-6">
						<a
							href="/login"
							class="text-sm sm:text-lg font-light hover:text-black hover:border-2 hover:border-black hover:bg-transparent text-white rounded-lg bg-black py-3 px-3 sm:px-6"
						>
							<span class="">Login</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="mx-auto mt-40 p-6 flex justify-center items-center">
				<div
					class="md:w-[400px] w-full bg-white drop-shadow-lg rounded-lg border border-gray-300 px-6 py-24"
				>
				<div class="bg-green-100 p-4 rounded-lg text-green-600 font-bold text-center text-lg block w-full border-2 border-green-600 mb-8">
					<a href="/booking">Go Straight To Booking</a>
				</div>
					<h1 class="text-center font-black text-2xl">Register An Account</h1>
					<p class="text-center font-light text-sm">Register To Start Booking A Call!</p>

					<form class="my-8" method="POST" on:submit|preventDefault={SIGNUP}>
						<div id="first">
							<div class="mb-4">
								<label for="name" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Name</label
								>
								<input
									type="text"
									bind:value={fullname}
									class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
									placeholder="Enter Your Full Name"
								/>
							</div>
							<div class="mb-4">
								<label for="name" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Gender</label
								>
								<select
									bind:value={gender}
									class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
								>
									<option selected value="">Choose your gender</option>
									<option value="Female">Female</option>
									<option value="Male">Male</option>
								</select>
							</div>
							<div class="mb-4">
								<label for="phone" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Phone Number(Without Country Code)</label
								>
								<input
									type="number"
									bind:value={phone}
									class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
									placeholder="Enter Your Phone Number"
								/>
							</div>
							<div class="mb-4">
								<label for="email" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Email Address</label
								>
								<input
									type="email"
									bind:value={email}
									class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
									placeholder="Enter Your Email Address"
								/>
							</div>
							<div class="mb-4">
								<label
									for="password"
									class="block text-gray-800 font-semibold text-sm uppercase mb-2">Password</label
								>
								<input
									type="password"
									bind:value={password}
									class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
									placeholder="Enter Your Password"
								/>
							</div>
							<button
								type="button"
								on:click={NEXT}
								class="mt-6 bg-orange-400 text-white text-center font-bold rounded-lg p-4 block w-full"
								>Next</button
							>
						</div>
						<div id="second" class="hidden">
							<div class="mb-4">
								<label for="name" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Country</label
								>
								<select
									bind:value={country}
									class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
								>
									<option selected value="">Choose your country</option>
									<option value="Nigeria">Nigeria</option>
									<option value="Ghana">Ghana</option>
								</select>
							</div>
							<div class="mb-4">
								<label
									for="location"
									class="block text-gray-800 font-semibold text-sm uppercase mb-2">Location</label
								>
								<input
									type="text"
									bind:value={location}
									class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
									placeholder="Enter Your Location"
								/>
							</div>

							<div class="mb-4">
								<label for="name" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Salutations</label
								>
								<select
									bind:value={salutation}
									class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
								>
									<option selected value="">Choose your salutations</option>
									<option value="Mr">Mr</option>
									<option value="Mrs">Mrs</option>
								</select>
							</div>

							<div class="mb-4">
								<label for="name" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Marital status</label
								>
								<select
									bind:value={marital_status}
									class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
								>
									<option selected value="">Choose your marital status</option>
									<option value="Single">Single</option>
									<option value="Married">Married</option>
								</select>
							</div>
							<div class="mb-4">
								<label
									for="referral_code"
									class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Referral Code</label
								>
								<input
									type="text"
									bind:value={referred_by}
									class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
									placeholder="Enter Your Referral Code"
								/>
							</div>

							<div class="flex justify-between items-center">
								<button
									type="button"
									on:click={PREVIEW}
									class="mt-6 mr-2 bg-black text-white text-center font-bold rounded-lg p-4 block w-full"
									>Preview</button
								>
								<button
									type="submit"
									class="mt-6 ml-2 bg-orange-400 text-white text-center font-bold rounded-lg p-4 block w-full"
									>Complete</button
								>
							</div>
						</div>
					</form>

					<p class="text-center font-light text-md">
						Already have an account? <a href="/login" class="text-orange-400 font-bold">Sign In</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
