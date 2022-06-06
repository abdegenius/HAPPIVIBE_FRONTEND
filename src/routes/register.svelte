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
		password_again,
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
		if(password === password_again){
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
				window.location.assign('/login');
			}
		}
		else{
			if(browser){
				alert("Password confirmation failed");
			}
		}
	};
	onMount(() => {
		if (browser) {
			let token = window.localStorage.getItem('token');
			if (token != 'undefined' && token != undefined && token != '') {
				window.location.assign('/account');
			}
		}
	});

	const SHOW = () => {
		if (browser) {
			let x = document.getElementById('password');
			if (x.type === 'password') {
				x.type = 'text';
				document.getElementById('showhide').innerText = 'Hide password';
			} else {
				x.type = 'password';
				document.getElementById('showhide').innerText = 'Show password';
			}
		}
	};

	const SHOW2 = () => {
		if (browser) {
			let x = document.getElementById('password_again');
			if (x.type === 'password') {
				x.type = 'text';
				document.getElementById('showhide2').innerText = 'Hide password';
			} else {
				x.type = 'password';
				document.getElementById('showhide2').innerText = 'Show password';
			}
		}
	};
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
					<div
						class="bg-green-100 p-4 rounded-lg text-green-600 font-bold text-center text-lg block w-full border-2 border-green-600 mb-8"
					>
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
									<option value="Others">Others</option>
								</select>
							</div>
							<div class="mb-4">
								<label for="phone" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Phone Number</label
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
									id="password"
									class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
									placeholder="Enter Your Password"
								/>
								<span on:click="{SHOW}" class="cursor-pointer text-right p-2 font-bold text-sm text-blue-800" id="showhide">Show password</span>
							</div>
							<div class="mb-4">
								<label
									for="password_again"
									class="block text-gray-800 font-semibold text-sm uppercase mb-2">Password Again</label
								>
								<input
									type="password"
									bind:value={password_again}
									id="password_again"
									class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
									placeholder="Enter Password Again"
								/>
								<span on:click="{SHOW2}" class="cursor-pointer text-right p-2 font-bold text-sm text-blue-800" id="showhide2">Show password</span>
							</div>
							<button
								type="button"
								on:click={NEXT}
								class="mt-6 bg-orange-400 text-white text-center font-bold rounded-lg p-4 block w-full cursor-pointer"
								>Next</button
							>
						</div>
						<div id="second" class="hidden">
							<div class="mb-4">
								<label for="name" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Country</label
								>
								<select
									id="country"
									bind:value={country}
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
								<label
									for="location"
									class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Your Location</label
								>
								<input
									type="text"
									id="location"
									bind:value={location}
									class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-4 text-gray-600 font-normal text-md shadow-md"
								/>
							</div>

							<div class="mb-4">
								<label
									for="salutation"
									class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Your Salutation</label
								>
								<select
									id="salutation"
									bind:value={salutation}
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
								<label for="name" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Marital status</label
								>
								<select
									bind:value={marital_status}
									class="bg-white outline-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
								>
									<option value="single">Single</option>
									<option value="married">Married</option>
									<option value="divorced">Divorced</option>
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
									class="mt-6 mr-2 bg-black text-white text-center font-bold rounded-lg p-4 block w-full cursor-pointer"
									>Preview</button
								>
								<button
									type="submit"
									class="mt-6 ml-2 bg-orange-400 text-white text-center font-bold rounded-lg p-4 block w-full cursor-pointer"
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
