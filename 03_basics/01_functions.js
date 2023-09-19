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
// console.log(loginUserMessage());

// shopping cart addition

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500,2000));

const user ={
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399

// })


const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400, 500, 1000 ]));


