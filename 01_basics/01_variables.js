const accountId  =  144553
let accountEmail = "hitesh@google.com"
var accountpassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2   // not allowed 
// node 01_basics/01_variables.js

/*
Prefer not to use vbar
because of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com"
accountpassword= "21212121"
accountCity = "Bengaluru"

console.log(accountId);
// console.log(accountEmail);

console.table([accountId, accountEmail,accountpassword,accountCity, accountState]);

