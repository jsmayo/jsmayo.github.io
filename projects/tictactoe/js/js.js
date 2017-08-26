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

	var n = document.getElementById("new");
	n.addEventListener("click", newGame);

	function newGame() {
		document.location.reload();
	}
}