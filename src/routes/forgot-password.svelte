<script>
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	import API from '../services/Api';
	import { USER, TOKEN } from '../services/Store';

	let email = '';

	const RESET = async (e) => {
		e.preventDefault();
		let execute = await API.post('reset/password', {
			email
		});
		if (browser) {
			if (execute.error == false) {
				window.alert(execute.message);
			} else {
				window.alert(execute.message);
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
					<h1 class="text-center font-black text-2xl">Forgot Password?</h1>
					<p class="text-center font-light text-sm">Enter your email address to reset password</p>

					<form class="my-8" method="POST" on:submit|preventDefault={RESET}>
							<div class="mb-4">
								<label for="email" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
									>Email Address</label
								>
								<input
									type="email"
									bind:value={email}
									id="email"
									class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
									placeholder="Enter Your Email Address"
								/>
							</div>
							<button
								type="submit"
								class="mt-6 bg-orange-400 text-white text-center font-bold rounded-lg p-4 block w-full cursor-pointer"
								>Reset Password</button
							>
					</form>

					<p class="text-center font-light text-md">
						Already have an account? <a href="/login" class="text-orange-400 font-bold">Sign In</a>
					</p>

				</div>
			</div>
		</div>
	</div>
</section>
