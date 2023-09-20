// node 04_control_flow/truthy.js

// const userEmail = ""
const userEmail = []

if (userEmail) {
    console.log("Got user Email");
}else{
    console.log("Don't have user email.");
}


// notes:
// falsy values
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN


// truthy values
// "0", 'false', "false", "", [], {}, function(){}

// if (userEmail.length ===0) {
//     console.log("Array is empty");
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty.");
}

 // Nullish Coalescing operator (??)

 let val1;
//  val1 = 5 ?? 10
//  val1 = null ?? 11
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20



 console.log(val1);



 // terniary opertor

//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");