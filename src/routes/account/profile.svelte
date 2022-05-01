<script>
    import API from "../../services/Api"
    import {onMount} from "svelte"
    import {USER} from "../../services/Store"
import { browser } from "$app/env";
    
    const PROFILE = async () => {
		let execute = API.get('profile');
		return execute;
	};
    let user = null;

    let password = '';
    let fullname = $USER.fullname;
    let gender = $USER.gender;
    let email = $USER.email;
    let phone = $USER.phone;
    let country = $USER.country;
    let location = $USER.location;
    let marital_status = $USER.marital_status;
    let salutation = $USER.salutation;

	const UPDATE = async (e) => {
    e.preventDefault();
		let execute = await API.post('edit/profile', {
			fullname,
			gender,
			email,
			phone,
			password,
			country,
			location,
			marital_status,
			salutation
		});
		if (browser) {
			if(execute.error == false){
                window.alert("Profile updated")
            }
            else{
                window.alert("Unable to update profile")
            }
		}
	};
    onMount(async() => {
        let data = await PROFILE();
        user = data.data[0]
    })

</script>
{#if user != null}

    <div class="flex justify-center items-center mx-4 mt-12">
        <div class="w-full p-4 max-w-[600px] bg-white border-2 border-gray-200 rounded-lg">
            <h1 class="text-center font-black text-2xl pb-4 border-b-4 border-dashed border-orange-400 mb-4">My Account</h1>
            <form class="my-8" method="POST" on:submit|preventDefault={UPDATE}>
                <div id="first">
                    <div class="mb-4">
                        <label for="name" class="block text-gray-800 font-semibold text-sm uppercase mb-2"
                            >Full Name</label
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
                            readonly
                            bind:value={email}
                            class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
                            placeholder="Enter Your email address"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            for="password"
                            class="block text-gray-800 font-semibold text-sm uppercase mb-2">New Password<small> (leave blank to retain existing password)</small></label
                        >
                        <input
                            type="password"
                            bind:value={password}
                            class="bg-white outline-none appearance-none w-full border-2 border-gray-100 rounded-lg p-2 text-gray-600 font-normal text-md"
                            placeholder="Enter Your Password"
                            autocomplete="off"
                        />
                    </div>
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
                            <option value="125">Nigeria</option>
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
                            > Location</label
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

                    <div class="flex justify-between items-center">
                        
                        <button
                            type="submit"
                            class="mt-6 ml-2 bg-orange-400 text-white text-center font-bold rounded-lg p-4 block w-full"
                            >Save changes</button
                        >
                    </div>
                </div>
            </form>
        </div>
    </div>

{/if}