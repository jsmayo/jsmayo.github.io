/*	
	alert("connected");
	["rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"];
*/
	//Number of squres to generate
	var numberOfSquares = 6;
	//List of Colors
	var colors = [];
	//Selected color for the header 
	var pickedColor;
	//select all squares
	var squares = document.querySelectorAll(".square");
	//Get the span
	var colorDisplay = document.getElementById("colorDisplay");
	//Update the header display
	colorDisplay.textContent = pickedColor;
	//Get the message for correct/incorrect
	var message = document.querySelector("#message");
	//get the header element
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#resetButton");
	// var easyButton = document.querySelector("#easyButton");
	// var hardButton = document.querySelector("#hardButton");
	var modeButtons = document.querySelectorAll(".mode");

	/* FORCING what I want to run to be called first with the first method
		in the file. 
	*/
	init(); 

	/* First method called and is used to set-up appropriate listeners,
		correctly format and display respective elements, and ensure
		proper start conditions are in place. 
	*/
	function init() {
		setUpModeButtons();
		setUpSquares();
		reset();  //instantiates values for empty global variables. 
	}

	function setUpModeButtons() {
		for(var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function() {
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			// if(this.textContent === "Easy") numberOfSquares = 3;
			// else numberOfSquares = 6;
				reset();
			});
		}
	}

	function setUpSquares() {
		for(var i = 0; i < squares.length; i++) {
			//assign all squares a color in the Color array.
			//add click listener to squares
			squares[i].addEventListener("click", function() {
				//grab color of clicked square
				var clickedColor = this.style.backgroundColor;
				//Check for Correct/Incorrect
				if(clickedColor === pickedColor) {
					message.textContent = "Correct!";
					//Changes all 6 squares to the correct color
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
					resetButton.textContent = "New Game";
				} else { 
					// alert("wrong");
					//make the wrong color fade out to the background color
					this.style.backgroundColor = "#232323";
					message.textContent = "Try Again"
				}
			});
		}
	}
	
	function reset() {
		//generate all new colors
		colors = generateRandomColors(numberOfSquares);
		//pick a new winning color
		pickedColor = pickColor();
		//change color display to match picked color
		colorDisplay.textContent = pickColor();
		//change color of all squares
		for(var i = 0; i < squares.length; i++) {
			//If there is a color to paint, make all squares visible and paint
			if(colors[i]){ 
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}
			else squares[i].style.display = "none";
		}
		h1.style.background = "steelblue";
		message.textContent ="";
	}

/*	easyButton.addEventListener("click", function() {
		hardButton.classList.remove("selected");
		easyButton.classList.add("selected");
		numberOfSquares = 3;
		// Generate new colors to avoid breaking the game.
		colors = generateRandomColors(numberOfSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++) {
			//only 3 colors at this point
			if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
			}
			else {
				//Hide the bottom later of squares via display = none
				squares[i].style.display = "none";
			}
		}
	});

	hardButton.addEventListener("click", function() {
		easyButton.classList.remove("selected");
		hardButton.classList.add("selected");
		numberOfSquares = 6;
		colors = generateRandomColors(numberOfSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++) {
			
			
				squares[i].style.backgroundColor = colors[i];
			
				//Hide the bottom later of squares via display = none
				squares[i].style.display = "block";
			
		}
	}); 	
	*/
	

	resetButton.addEventListener("click", function() {
		reset();
	});

	

	//loop through all squares and change each color to match the given color
	function changeColors(color) {
		for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = color;
		}
	}


	//Random number needed for color picker
	function pickColor() {
		var random = Math.floor(Math.random() * colors.length); //math.random does not include 1, so 0-5 are available
		return colors[random];
	}

	//Contains the loop to generate the random array of colors
	function generateRandomColors(numColors) {
		//make array
		var arr = [];
		//add numColors random colors to array
		for(var i = 0; i < numColors; i++){
			//get random color from randomColor() and push into array
			arr.push(randomColor());
		}
		//return array
		return arr;
	}

	//Used by the randomColorGenerator loop to get individual RGB values
	function randomColor() {
		//pick a RGB from 0-255
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		//Make sure the spaces are correct!
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}