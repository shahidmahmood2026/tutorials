//variable = A container that stores a value.
//           Behaves as if it was the value it contains.

// 1. declaration let X;
// 2. assignment x = 100;

let x1;
x = 100;

console.log(x);

//or

let x2 = 100;

console.log(x);




//for example:


let age1 = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age1);
console.log(price);
console.log(gpa);

console.log(`You are ${age1} years old`);
console.log(`The price is ${price} dollars`);
console.log(`Your gpa is: ${gpa}`);

//These lines are just showing what kind of data type this is:

console.log(typeof gpa);
console.log(typeof price);
console.log(typeof age1);




//This is what Strings are called.
//Strings have some "" or ''.


let firstName = "Shahid";
let favouriteFood = "Pizza";
let email = "shahid@gmail.com";

console.log(`Your name is ${firstName}`);
console.log(`You like ${favouriteFood}`);
console.log(`Your email is ${email}`);

//These lines are just showing what kind of data type this is:

console.log(typeof firstName);
console.log(typeof favouriteFood);
console.log(typeof email);




//Boolean is true or false like right or wrong:
// Boolean is like saying a yes or no.


let online = false;
let forSale = true;
let isStudent = true;

console.log(`Bro is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

//These lines are just showing what kind of data type this is:

console.log(typeof online);
console.log(typeof forSale);
console.log(typeof isStudent);




// last example:


let fullName = "Shahid Mahmood";
let age = "15"
let student = true

//These lines are just showing what kind of data type this is:

console.log(fullName);
console.log(age);
console.log(student);




////for HTML: If you want to show it like a text, 
// then you are writing with two files: 1 HTML file for structures, 1 JS file for functions
document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;

//That's the end of this part from credits for Bro Code.
