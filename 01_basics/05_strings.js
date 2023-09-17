// node 01_basics/05_strings.js
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



// const gameName = new String('hiteshhc')
const gameName = new String('hitesh-hc-com')

console.log(gameName[0])
// console.log(gameName[1])
// console.log(gameName[2])
// console.log(gameName[3])
// console.log(gameName[4])
// console.log(gameName[5])
// console.log(gameName[6])
// console.log(gameName[7])


console.log(gameName.__proto__);




// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString =  gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(gameName.split('-'))

