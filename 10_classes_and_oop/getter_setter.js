// node 10_classes_and_oop/getter_setter.js


class User{
    constructor(email, password){
        this.email= email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }


    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        // this.password = value 
         this._password = value.toUpperCase()

    }
}

// const hitesh = new User("h@hitesh.ai", "123")
const hitesh = new User("h@hitesh.ai", "abc")
// console.log(hitesh.password);
console.log(hitesh.email);