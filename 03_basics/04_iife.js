// node 03_basics/04_iife.js

// Immediately invokde Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    console.log(`DB CONNECTED`);
})();


// (definition of function)(execution call)

(() => {
    console.log(`DB CONNECTED arrow`);
})();

// (function aurcode()  {
    // named iife
//     console.log(`DB CONNECTED TWO`);
// }) ();

((name) => {
    console.log(`DB CONNECTED arrow ${name}`);
})("Shikhar");