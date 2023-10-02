// node 10_classes_and_oop/inheritance.js

class User{
    constructor(username){
        this.username = username
    }


    logMe(){
        console.log(`USERNAME is ${this.username}`);
}
}

class Teacher extends User{
    constructor(username, eamil, password){
        super(username) 
        this.email = eamil;
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new  Teacher("chai", "Chai@gmail.com", "123")

chai.addCourse()
const masalaChai = new User("masalaChai")

// masalaChai.addCourse()  // not access of addCourse
masalaChai.logMe()


console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);