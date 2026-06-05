// SWITCH = can be an efficient replacement to many else if statements

let day = 1;

switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}

//

let testScore = 85;
let letterGrade;

switch(testScore){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    case testScore >= 50:
        letterGrade = "E";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);

//my own example:

let prayertime = 1;
let prayerMessage;

switch(prayertime){
    case 1:
        prayerMessage = "It's Fajr";
        break;
    case 2:
        prayerMessage = "It's Dhuhr";
        break;
    case 3:
        prayerMessage = "It's Asr";
        break;
    case 4:
        prayerMessage = "It's Maghrib";
        break;
    case 5:
        prayerMessage = "It's Isha";
        break;
    default:
        prayerMessage = "Invalid Prayertime";
}
console.log(prayerMessage);

// month number → month name

function printMonthName(month){
    let monthName;

    switch(month){
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
        default:
            monthName = "Invalid month";
    }

    console.log(monthName);
}

printMonthName(3);   // March
printMonthName(12);  // December
printMonthName(99);      // Invalid month
printMonthName('hello'); // Invalid month (not a number 1–12)

// boolean true / false switch

let isLoggedIn = true;
let message;

switch(isLoggedIn){
    case true:
        message = "Welcome back!";
        break;
    case false:
        message = "Please log in.";
        break;
    default:
        message = "Invalid value (use true or false)";
}

console.log(message);
