// node 03_basics/01_functions.js

function sayMyName(){

    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()


// function addTwoNumbers(number1, number2){   // parameters
//     console.log(number1 + number2);
// }




function addTwoNumbers(number1, number2){   // parameters
    // let result= number1 + number2
    // return result

    return number1 + number2
}

// addTwoNumbers(3, null)   // arguments
const result = addTwoNumbers(3, 5)   

// console.log("Result: " , result);


function loginUserMessage(username) {
    if (username === undefined) { //if(!username)  is same for the respective codes
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `    
}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());