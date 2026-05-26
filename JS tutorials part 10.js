//IF STATEMENTS = if a condition is true, execute some code

//                if not, do something else
 
let age = 25;

if(age >= 18){

    console.log("You are old enough to enter the site");

}
else{

    console.log("You must be 18+ to enter this site")

}

//

let time = 9;

if(time < 10){
    console.log("Good Morning!");
}
else{
    console.log("Good Afternoon");
}

//

let isStudent = false;

if(isStudent){
    console.log("You are a student!");
}
else{
    console.log("You are NOT a student!");
}

//

let age2 = 18;
let hasLicense = false;

if(age >= 16){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You hava your license!");
    }
    else{
        console.log("You do not have your license yet!");
    }
}
else{
    console.log("You must be 16+ to have a license");
}

//

let age3 = 19;

if(age3 >= 100){
    console.log("You are TOO OLD to enter this site");
}
else if(age3 >= 18){
    console.log("You are allowed to enter this site");
}
else if(age3 == 0){
    console.log("You can't enter. You were just born.");
}
else if(age3 < 0){
    console.log("Your age can't be below 0");
}
else{
    console.log("You must be 18+ to enter this site");
}

//

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const ResultElement = document.getElementById("myResultElement");
let age4;

mySubmit.onclick = function(){

    age4 = myText.value;
    age4 = Number(age4);

    if(age4 >= 100){
        ResultElement.textContent = `You are TOO OLD to enter this site!`;
    }
    else if(age4 == 0){
        ResultElement.textContent = `You can't enter. You were just born`;
    }
    else if(age4 >= 18){
        ResultElement.textContent = `You are allowed to enter this site`;
    }
    else if(age4 < 0){
        ResultElement.textContent = `ERROR`;
    }
    else{
        ResultElement.textContent = `You must be 18+ to enter this site`;
    }
}