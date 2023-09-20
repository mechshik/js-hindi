// node 04_control_flow/one.js
// if

// if(true){

// }
// if(false){

// }

// if (2==2){

// }

const isUserLoggedIn = true
// if (3 != 2){
// console.log("EXECUTED");
// }

// const temperature = 71;

// if(temperature<50){
//     console.log("less than 50");
// }else{
// console.log("temperature is greater than 50");
// }


// if (2 === "2"){
// console.log("EXECUTED 2 ===2");
// }






// notes
// <, >, <=, >=,==,!=, ===

// const score = 200

// if (score>100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }


// console.log(`user power: ${power}`);

const balance = 1000

// if(balance > 500) console.log("test"),  // not write like this 
// console.log("test2");

// if (balance<500){
//     console.log("less than 500");
// }else if (balance<750){
//     console.log("less than 750");
// }else if (balance< 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}

