//ternary objects = a shortcut to if{} and else{} statements
//                  helps to assign a variable based on a condition
//                  condition? codeIfTrue : codeIfFalse;


//for example:

let age = 21;
let message = age >= 18 ? "You're an adult" : "You're fully teen";
console.log(message);
//this is without a shortcut;

let message1;

if(age >= 18){
    message1 = "You are an adult";
}
else{
    message1 = "You're an minor";
}
console.log(message1);


//another example:

let time = 16;

let greeting = time < 12 ? "Good Morning" : "Good afternoon";
console.log(greeting);

//


let isStudent = true;
let message2 = isStudent ? "You are a student" : "You aer NOT a student";
console.log(message2);

//

let purchaseAmount = 125;

let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is ${purchaseAmount - purchaseAmount * (discount/100)}`);