//variable scope = where a variable is recognized
//                 and accessible (local, global)


let x = 1;
let x = 2;

//not working, instead do this(local):

function1();

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

///this is also local ,but false = 

function function1(){
    let x = 1;
    console.log(y);
}

function function2(){
    let y = 2;
    console.log(x);
}

//this is only (3):

let x = 3;

function function1(){
    console.log(x);
}

function function2(){
    console.log(x);
}

//this is global scope, it makes see the other function:

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

//local means that if there is x = ... in those functions. there will be only local,

//so it means that x inside the functions are showing if the function1() or function2() is scripted and it doesnt choose the outside one, its choose what inside their functions.

//global is like when one function or functions doesnt have the declaration of "x". just console.log(x), then it showed what outside the function is. because they don't have "x" as their functions.

//for example,

//  let x = 3;

//  function function1(){
//  console.log(x)
//  }

//then that would be only from outside, but local is like this:

// let x = 3;

//  function function1(){
//  let x = 2;
//  console.log(x)
//  }

//then this one would only choose the "let x = 2" rather than "let x = 3"

//That's it!