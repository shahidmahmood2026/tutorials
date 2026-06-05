//function = A section of reusable code
//           Declare a code, use it whenever you want
//           Call the function to execute that code


function happyBirthday(username, age){
    console.log("Happy Birthday to you");
    console.log("Happy Birthday to you");
    console.log(`Happy Birthday to dear ${username}`);
    console.log("Happy Birthday to you");
    console.log(`You're ${age}`);
}

happyBirthday("Shahid", 15);

//

function add(x, y){
    let result = x + y; //return x + y;
    return result;     //
}
function subtract(x, y){
    return x - y;
}

let answer = add(2, 3);
console.log(answer); //variant = console.log(add(2, 3));

//

function isEven(number){
    
    if(number % 2 === 0){ //return number % 2 === 0 ? true : false;
        return true;
    }
    else{
        return false;
    }
}

function isValidEmail(email){

    if(email.includes("@")){ //return email.includes("@") ? true : false;
        return true;
    }
    else{
        return false;
    }
}
console.log(isVaildEmail("Shahid@Gmail.com"));

