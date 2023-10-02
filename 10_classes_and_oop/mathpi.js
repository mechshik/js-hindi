// node 10_classes_and_oop/mathpi.js



const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);


// vPS C:\Users\Shikhar Mall\Documents\GitHub\js-hindi> node 10_classes_and_oop/mathpi.js
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bni");
    }
}


// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));



Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));



for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
    
    console.log(`${key} : ${value}`);
    }
}