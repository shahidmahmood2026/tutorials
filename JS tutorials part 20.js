//for loop = repeat some code a LIMITED amount of times.


for(let i = 0; i <= 2; i++){
    console.log(i);
}

//

for(i = 1; i < 10; i++){
    console.log(i);
}

//different variations

for(i = 1; i < 10; i+=2){
    console.log(i);
}

//

for(i = 2; i < 10; i+=2){
    console.log(i);
}

//now the decrease part

for(i = 10; i > 0; i--){
    console.log(i);
}

for(i = 10; i > 0; i-=3){
    console.log(i);
}

for(i = 1; i <= 20; i++){
    console.log(i);
}

for(i = 1; i <= 20; i++){
    
    if(i == 13){
        continue;
    }
    else{
        console.log(i);
    }
}

//and for "break;"

for(i = 1; i <= 20; i++){

    if(i == 13){
        break;
    }
    else{
        console.log(i);
    }
}

//That's it! See you in the next video...