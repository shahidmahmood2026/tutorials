//    = assignment operator
//   == comparison operator (compare if values are equal)
//  === strict equality operator (compare if values & datatype are equal)
//   != inequality operator
//  !== strict inequality operator

const PI =  "3.14";

//true, because it only affects the number inside,
// not the strings outside

if(PI == "3.14"){
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}



//true, but it affects the number 
// AND the strings

if(PI === "3.14"){
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}



//it only shows, if the "PI" is not 3.14, then it would be true.

if(PI != "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}



//same like the one before,
//but its affects the 3.14 AND the strings.

if(PI !== "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}