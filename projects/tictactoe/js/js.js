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
    filled = [false, false, false, false, false, false, false, false, false];
    symbol = ['', '', '', '', '', '', '', '', ''];
    winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
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
        box = document.getElementById(boxNum);
        ctx = box.getContext("2d");

        switch (boxNum) {
            case "canvas1":
                num = 1;
                break;
            case "canvas2":
                num = 2;
                break;
            case "canvas3":
                num = 3;
                break;
            case "canvas4":
                num = 4;
                break;
            case "canvas5":
                num = 5;
                break;
            case "canvas6":
                num = 6;
                break;
            case "canvas7":
                num = 7;
                break;
            case "canvas8":
                num = 8;
                break;
            case "canvas9":
                num = 9;
                break;
        }


        // If even turn, draw an X in the canvas that was selected
        if (filled[num - 1] == false && gameOver == false) {
            if (turn % 2 != 0) {
                ctx.beginPath();
                ctx.moveTo(15, 15);
                ctx.lineTo(85, 85);
                // MOVE TO moves the position without connecting a line.
                // LINE TO will have a line connected if used.
                ctx.moveTo(85, 15);
                ctx.lineTo(15, 85);
                ctx.strokeStyle = "#CFD8DC";
                // This is what shows the stroke after making the path
                ctx.stroke();
                ctx.closePath();
                // Change the array position that tracks symbols per position to X
                symbol[num - 1] = 'X';
            } else {
                // Draw a circle inside the canvas
                ctx.beginPath();
                // arc arguments(CENTER coords, radius, radian range 0-2pi, draw CCW?)
                ctx.arc(50, 50, 32, 0, 2 * Math.PI, false);
                ctx.strokeStyle = "#48C9B0";
                ctx.stroke();
                ctx.closePath();
                symbol[num - 1] = 'O';
            }

            // increment the turn
            turn++;
            // change the filled status to TRUE
            filled[num - 1] = true;
            //keep trach of each symbol for the winner check
            var whoPlayed = symbol[num - 1];
            //CHECK FOR THE WINNER AT THE END OF EACH TURN!
            for (var z = 0; z < winner.length; z++) {
                /*winner is an array of arrays, which holds the winning combinations that a player must have to win the game. Go through each index and check the index at the second array index for a filled value. */
                if ((symbol[winner[z][0]] == whoPlayed) &&
                    (symbol[winner[z][1]] == whoPlayed) &&
                    (symbol[winner[z][2]] == whoPlayed)) {
                    // Report the results :)
                    document.getElementById("result").textContent = "Player " + whoPlayed + " has won the game!";
                    gameOver = true;
                }
            }
            if (turn > 9) document.getElementById("result").textContent = "Welp... Let's just say you both win?";

        }

        //outer else if statment for when the gameOver is true
        else if (gameOver == true) alert("No can do, because the game's over. Start a new game by clicking 'New Game'");
        else alert("Woah now, this isn't chess!! Select an empty position!");
    }
}