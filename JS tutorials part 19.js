// while loop = repeat some code WHILE some condition is true



//let username = "";

//while(username === "" || username === null){
//    username = window.prompt(`Enter your username: `);
//}

//console.log(`Hello ${username}`);

//It happen because when you didnt type your name here and it says null it repeat the prompt again like infinitly


// There is also a another way to make it happen

//do{
//    username = window.prompt(`Enter your name: `);
//} while(username == "" || username === null);

//console.log(username);

//

let LoggedIn = false;
let username1;
let password;

//while(!LoggedIn){
//    username1 = window.prompt(`Enter your username: `);
//    password = window.prompt(`Enter your password: `);
//
//    if(username1 === "Shahid" && password === "123GO"){
//        LoggedIn = true;
//        console.log("You are logged in!");
//    }
//    else{
//        console.log(`Invalid credentials! Please try again!`);
//    }
//}

//now the "do" variant

do{
    username1 = window.prompt(`Enter your username: `);
    password = window.prompt(`Enter your password: `);

    if(username1 === "Shahid" && password === "123GO"){
        LoggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log(`Invalid credentials! Please try again!`);
    }
}while(!LoggedIn)
