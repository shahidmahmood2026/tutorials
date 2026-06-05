// string slicing = creating a substring 
//                  from a portion of another string

//                  string.slice(start, end)

const fullName = "Shahid Mahmood";

let firstName = fullName.slice(0, 6);

let lastName = fullName.slice(7, 14);

let firstChar = fullName.slice(0, 1);

let lastChar = fullName.slice(-1);


let firstName1 = fullName.slice(0, fullName.indexOf(" "));

let lastName1 = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);

console.log(lastName);

console.log(firstChar);

console.log(lastChar);

console.log(firstName1);

console.log(lastName1);

//

const email = "Shahid@gmail.com";

let userName1 = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName1);
console.log(extension);