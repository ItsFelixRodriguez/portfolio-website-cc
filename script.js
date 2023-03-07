const body = document.body
const fortune = document.querySelector("#fortune");
fortune.innerHTML = ''





let mixed = {

	sign : ['Aries','Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capicorn', 'Aquarius', 'Pisces'],
	luck : ['Terrible', 'God Awful', 'Unspeakably Bleak', 'Non-existent', 'Nothing to write home about', '... better not to say', '?!?!?!?!?!?!', 'Okayish', 'Actually not that bad', 'Gegrudgingly good', ';_;', 'High'],
	advice : ['Run!!!', 'Quit your job', "Don't look behind your shoulder.", 'Start a podcast.', 'Definitely buy that thing.', 'Put it all on black.', 'Steal for fun.', 'Change your name.', 'Build an alliance', 'Forget?', 'Open your windows.', 'Cancel yourself.']
}
// console.log (mixed)

// Random item from Array Function 

function getRandomItem(arr) {

	// get random [i] value
	const randomIndex = Math.floor(Math.random() * arr.length);

	// get random item
	const item = arr[randomIndex];

	return item;
}

// Constructing the Horoscope

const horoscope = () => {
	let randSign = getRandomItem(mixed.sign);
	let randLuck = getRandomItem(mixed.luck);
	let randAdvice = getRandomItem(mixed.advice);
	return `WELCOME TO SHITTY HOROSCOPES LIMITED: 

	Hmmmm your sign seems to be: ${randSign}.

	Your Luck is looking: ${randLuck}

	Given that, we advise you to: ${randAdvice}`

}

const event = horoscope();
fortune.innerHTML=event

// const myButton = document.querySelector("#button");
// myButton.addEventListener("click", horoscope)
