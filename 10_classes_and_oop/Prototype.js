// node 10_classes_and_oop/Prototype.js
let myName = "hitesh     "

// console.log(myName.truelength);
// console.log(myName.trim().length);  // not good for a good developer


// console.log(myName.truelenght);

// Method for solve this problem



let myHeros= ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}


Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}


// heroPower.hitesh()

// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()





// ****************inheritance*******************

const User = {
    name: "chai",
    email: "chai@google.com"

}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime : true,
    __proto__: TeachingSupport
}


Teacher.__proto__ =  User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}


anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()