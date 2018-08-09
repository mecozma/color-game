let numberOfSquares = 6
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('h1 span');
let message = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#stripe button');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	// mode buttons event listeners
	setupModeButtons();

	setupSquares();
	
	reset();
}

function setupModeButtons() {
	for (var x = 0; x < modeButtons.length; x++) {
		modeButtons[x].addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent == 'Easy' ? numberOfSquares = 3: numberOfSquares = 6;
			reset();
		});
	}
}

function setupSquares() {

	squares.forEach((square, i, arr) => {

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
}

resetButton.addEventListener('click', () => {

	reset();
});

function changeColors(color) {
	squares.forEach((el) => el.style.backgroundColor = color);
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length );
	return colors[random];
}

function generateRandomcolors(param) {

	var colors = []

	for (let i = 0; i < param; i++) {
		colors.push(randomColor());
	}
	
	return colors;
}

function randomColor() {
	
	let r = Math.floor(Math.random() * 256);

	let g = Math.floor(Math.random() * 256);

	let b =	Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

function reset() {
	
		colors = generateRandomcolors(numberOfSquares);
		
		pickedColor = pickColor();
	
		colorDisplay.textContent = pickedColor;
		
		squares.forEach((square, i) => {
			if (colors[i]) { 
				square.style.display = 'block';
				square.style.backgroundColor = colors[i];
			 } else {
				  square.style.display = 'none';
			 }
		});
	
		message.textContent = '';
	
		h1.style.backgroundColor = 'steelblue';
		resetButton.textContent = 'New Colors'
}