let rando = parseInt(Math.random() * 100 +1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
let p = document.createElement('p');
let prevGuesses = [];
let count = 1;
let playGame = true;
if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}
validateGuess = function(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100){
        alert('Please enter a number less than 100!');
    } else {
        prevGuesses.push(guess);
        if (count === 11){
            displayGuess(guess);
            displayMessage(`Game Over! The number was ${rando}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
checkGuess = function(guess){
    if (guess === rando){
        displayMessage(`You guessed it!`);
        endGame();
    } else if (guess < rando){
        displayMessage(`Too low! Try again!`);
    } else if (guess > rando){
        displayMessage(`Too high! Try again!`);
    }
}
displayGuess = function(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    count++;
    remaining.innerHTML = `${11 - count} guesses remaining`;
}
displayMessage = function(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
endGame = function(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    startNewGame();
}
startNewGame = function(){
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click', function(e){
        location.reload();
    });
}