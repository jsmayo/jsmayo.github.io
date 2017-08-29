window.onload = function() {
	// keep track of player turns
	var num;
	var box;
	var ctx;
	// turn variable, initialized to 1
	var turn = 1;
	// variable to track if the square is currently occupied
	var filled;
	// var to hold player symbols
	var symbol;
	// var to hold winning combinations
	var winner;
	var gameOver = false;
	filled = [false,false,false,false,false,false,false,false,false];
	symbol = ['','','','','','','','',''];
	winner = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
// new game button
	var n = document.getElementById("new");
	n.addEventListener("click", newGame);
	//remember, adding ()s will cause the function to run, this is a REFERENCE.
	function newGame() {
		// built JS in refresh call 
		document.location.reload();
	}
	//Event listener that gets the ID of the box that was clicked.
	document.getElementById("tic").addEventListener("click", function(e) {
		// e = Event created by the event listener, target = The item that caused the event to trigger (CANVAS), id = the HTML id of the object.
		boxClick(e.target.id);
	});

	function boxClick(boxNum) {
		box = doucument.getElementById(numId);
		ctx = box.getContext("2d");

		switch(numId) {
			case "canvas1": num = 1;
			break;
			case "canvas2": num = 2;
			break;
			case "canvas3": num = 3;
			break;
			case "canvas4": num = 4;
			break;
			case "canvas5": num = 5;
			break;
			case "canvas6": num = 6;
			break;
			case "canvas7": num = 7;
			break;
			case "canvas8": num = 8;
			break;
			case "canvas9": num = 9;
			break;

		}

		if(filled[num-1] == false) && gameOver == false) {
			if(turn%2 != 0){
				ctx.beginBath();
				ctx.moveTo(15,15);
				ctx.lineTo(85,85);
				ctx.closePath();
			else ;
		}
		else {

		}
	}
}