// node 01_basics/datatypes-summary.js
// Primitive 

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 32213132131312131311n;

// java script is Dynamically typed of static typed language ? 


// Reference (Non primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "hitesh",
    age: 22,
}


const myFunction =  function(){
        console.log("hello World");
}
 
console.log(typeof bigNumber)   // undefined
console.log(typeof outsideTemp) // object
console.log(typeof scoreValue)  // number
console.log(typeof myFunction)  // function
console.log(typeof heros)  // object





