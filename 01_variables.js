const accountId = 1234
let accountEmail= "piyush@gmail.com"
var account =123
accout =11
let accountId1
// accountId = 2 // not allowed it's constant
//also dont use the var keyword bcuz it is outdated and it give the issue in block andd function

console.log(accountId)
console.log([accountId, accountEmail, account,accout])

//modified values 
accountEmail="piyus@123"
accout =90

//merge all values in one array and print in table format
console.table([accountId, accountEmail, account,accout,accountId1])