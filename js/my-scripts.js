let numberOfSquares = 6
let colors = generateRandomcolors(numberOfSquares);
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
let modeButtons = document.querySelectorAll('.mode');

for (var x = 0; x < modeButtons.length; x++) {
	modeButtons[x].addEventListener('click', function() {
		modeButtons[0].classList.remove('selected');
		modeButtons[1].classList.remove('selected');
		this.classList.add('selected');
		this.textContent == 'Easy' ? numberOfSquares = 3: numberOfSquares = 6;
		reset();
	});
}


// easyBtn.addEventListener('click', () => {
// 	numberOfSquares = 3
// 	// removes the class from the hardbtn and adds it to the easybtn
// 	hardBtn.classList.remove('selected');
// 	easyBtn.classList.add('selected');
// 	// generate now random colors
// 	colors = generateRandomcolors(numberOfSquares);
// 	// Pick a new color to be the answer
// 	pickedColor = pickColor();
// 	// display the color
// 	colorDisplay.textContent = pickedColor;
// 	// update first three divs' background color and hide the last three ones
// 	squares.forEach((square, i) => {
// 		if (colors[i]) {
// 			square.style.backgroundColor = colors[i];
// 		} else {
// 			square.style.display = 'none';
// 		}
// 	})
// });
// hardBtn.addEventListener('click', () => {
// 	numberOfSquares = 6
// 	easyBtn.classList.remove('selected');
// 	hardBtn.classList.add('selected');
// 	// generate now random colors
// 	colors = generateRandomcolors(numberOfSquares);
// 	// Pick a new color to be the answer
// 	pickedColor = pickColor();
// 	// display the color
// 	colorDisplay.textContent = pickedColor;
// 	// update first three divs' background color and hide the last three ones
// 	squares.forEach((square, i) => {
// 			square.style.backgroundColor = colors[i];
// 			square.style.display = 'block';
		
// 	})
// });

resetButton.addEventListener('click', () => {
	// // generate new colors
	// colors = generateRandomcolors(numberOfSquares);
	// // pick a new random color that will be the only one right
	// pickedColor = pickColor();
	// // change the colorDisplay to match the picked color;
	// colorDisplay.textContent = pickedColor;
	// // change squares' colors
	// squares.forEach((square, i) => {
	// 	square.style.backgroundColor = colors[i];
	// });
	// // change the message span text
	// message.textContent = '';
	// // change the h1 background color
	// h1.style.backgroundColor = 'steelblue';
	// this.textContent = 'New Colors'
	reset();
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
	for (let i = 0; i < param; i++) {
		colors.push(randomColor());
	}
	// return that arr
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

function reset() {
		// generate new colors
		colors = generateRandomcolors(numberOfSquares);
		// pick a new random color that will be the only one right
		pickedColor = pickColor();
		// change the colorDisplay to match the picked color;
		colorDisplay.textContent = pickedColor;
		// change squares' colors
		squares.forEach((square, i) => {
			if (colors[i]) { 
				square.style.display = 'block';
				square.style.backgroundColor = colors[i];
			 } else {
				  square.style.display = 'none';
			 }
		});
		// change the message span text
		message.textContent = '';
		// change the h1 background color
		h1.style.backgroundColor = 'steelblue';
		resetButton.textContent = 'New Colors'
}