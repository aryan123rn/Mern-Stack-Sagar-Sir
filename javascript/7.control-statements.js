// * if
let print ;
if (print) {
    console.log("Ananda Maharjan")
}


//if else
const age = 18;

if (age >= 18) {
    console.log("You are legal to enter the club");
} else {
    console.log ("You are not legal to enter the club");
}


// Switch

let day = 3;
switch (day) {
    case 1: {
        console.log('sunday')
        break;
    }
    case 2: {
        console.log('monday')
        break;
    }
    case 3: {
        console.log('tuesday')
        break;
    }
}


switch(day){
    case 1 :
    case 7 :{
        console.log('Weekend')
        break;
    }
    case 2 :
    case 3 :
    case 4 :
    case 5 :
    case 6 :{
        console.log('work day')
        break;
    }
    default : {
        console.log('Enter the day between 1-7')
    }
}

//loops
