// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum)) + minNum;

let running = true;
let guess;
let attempts = 0;

while(running){

    guess = window.prompt(`Enter a number you've guessed`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid Number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Enter a valid number from ${minNum} - ${maxNum}!`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else{
            window.alert(`CORRECT! the answer was ${answer} and you took ${attempts}`);
            running = false;
        }
    }
}