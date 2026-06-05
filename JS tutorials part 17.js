// logical operators = used to combine or manipulate boolean values
//                     (true or false)

//                     AND = &&
//                     OR  = ||
//                     NOT = !

const temp = -10;

if(temp > 0 && temp <= 30){
    console.log("The weather is GOOD");

}
else{
    console.log("The weather is BAD");
}

//

const temp1 = 250;

if(temp1 <= 0 || temp > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}

//

const isSunny = true;

if(isSunny){
    console.log("It is SUNNY");
}
else{
    console.log("It is CLOUDY");
}

const isSunny1 = true;

if(!isSunny1){
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
}