// Your code goes here

const rangeStartNumber = 5;
const prizeStartValue = 10;

let prizeTotalValue = 0,
    prizeMaxValue = prizeStartValue,
    rangeTotalValue = rangeStartNumber,
    randomNumberValue,
    i,
    attemptStartValue = 1;

let play = confirm('Do you want to play a game?');

if (play === true) {
    startGame();
} else {
    alert('You did not become a millionaire, but can.')
}

function startGame() {
    prizeMaxValue = prizeStartValue;
    i = 3;
    randomNumber();
    userNumber();
}

function randomNumber() {
    randomNumberValue = Math.floor(Math.random() * rangeTotalValue);
}

function userNumber() {
    if (parseFloat(prompt(
// ----------------------------------------------------
`Enter a number from 0 to ${rangeTotalValue}
Attempts left: ${i}
Total prize ${prizeTotalValue}
Possible prize on current attempt: ${prizeMaxValue}`,
'')) !== randomNumberValue) {
// ----------------------------------------------------
        i--;
        prizeMaxValue = Math.floor(prizeMaxValue / 2);

        if (i >= attemptStartValue) {
            userNumber();
        } else {
            alert(`Thank you for a game. Your prize is: ${prizeTotalValue}`);
            rangeTotalValue;
            prizeMaxValue;
            prizeTotalValue;
            if (confirm('Do you want to play again')) {
                startGame();
            } 
        }
    } else {
        prizeTotalValue += prizeMaxValue;
        if (confirm(
// ----------------------------------------------------
`Congratulation! Your prize is: ${prizeTotalValue}
Do you want to continue?`)) {
// ----------------------------------------------------
            rangeTotalValue = rangeStartNumber * 2;
            prizeMaxValue = prizeStartValue * 3;
            startGame();
        } else {
            alert(`You win ${prizeTotalValue}`)
        }
    }
}
