"use strict";
function rokiPapiSizi(p1, p2) {
    if (p1 === p2) {
        return "Draw";
    }
    else if (p1 === 'rock') {
        if (p2 === 'scissors') {
            return 'Player 1 won!';
        }
        else {
            return 'Player 2 won!';
        }
    }
    else if (p1 === 'paper') {
        if (p2 === 'rock') {
            return 'Player 1 won!';
        }
        else {
            return 'Player 2 won!';
        }
    }
    else if (p1 === 'scissors') {
        if (p2 === 'paper') {
            return 'Player 1 won!';
        }
        else {
            return 'Player 2 won!';
        }
    }
    else {
        return 'watafak';
    }
}
;
console.log(rokiPapiSizi('paper', 'paper')); //draw
console.log(rokiPapiSizi('paper', 'scissors')); //p2
console.log(rokiPapiSizi('paper', 'rock')); //p1
console.log(rokiPapiSizi('scissors', 'rock')); //p2
console.log(rokiPapiSizi('rock', 'scissors')); //p1
