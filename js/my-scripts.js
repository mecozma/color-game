let colors = generateRandomcolors(6);
//  [
// 	'rgb(255, 0, 0)',
// 	'rgb(255, 255, 0)',
// 	'rgb(0, 255, 0)',
// 	'rgb(0, 255, 255)',
// 	'rgb(0, 0, 255)',
// 	'rgb(255, 0, 255)'
// ];

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('h1 span');
let message = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#stripe button');
resetButton.addEventListener('click', () => {
	// generate new colors
	colors = generateRandomcolors(6);
	// pick a new random color that will be the only one right
	pickedColor = pickColor();
	// change the colorDisplay to match the picked color;
	colorDisplay.textContent = pickedColor;
	// change squares' colors
	squares.forEach((square, i) => {
		square.style.backgroundColor = colors[i];
	});
	// change the message span text
	message.textContent = '';
	// change the h1 background color
	h1.style.backgroundColor = '#232323';
	resetButton.textContent = 'New Colors'
});

colorDisplay.textContent = pickedColor;



squares.forEach((square, i, arr) => {
	// Add initial colors to each square
	square.style.backgroundColor = colors[i];
	// Add event listeners to each square
	square.addEventListener('click', () => {
		if (square.style.backgroundColor === pickedColor) {
			resetButton.textContent = 'Play Again?';
			h1.style.backgroundColor = pickedColor;
			message.textContent = "Correct!";
			changeColors(pickedColor);
		} else {
			square.style.backgroundColor = "#232323";
			message.textContent = "Try again";
		}
	})
});

console.log(squares)

function changeColors(color) {
	squares.forEach((el) => el.style.backgroundColor = color);
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length );
	return colors[random];
}

function generateRandomcolors(param) {
	// make an array
	var colors = []
	// add num random colors to array
	for (let i = 0; i <= param; i++) {
		colors.push(randomColor());
	}
	// return t hat arr
	return colors;
}

function randomColor() {
	// pick a red from 0 - 255
	let r = Math.floor(Math.random() * 256);
	// pick a green from 0 - 255
	let g = Math.floor(Math.random() * 256);
	// pick a blue from 0 - 255
	let b =	Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}