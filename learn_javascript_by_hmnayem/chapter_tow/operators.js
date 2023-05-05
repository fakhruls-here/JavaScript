// Arithmetic      == +, -, *, /, %, ++, -- those called Arithmetic sign
var a = 10
var b = 20

console.log(a + b)  //result == 30
console.log(a - b)  //result == -10
console.log(a * b)  //result == 200
console.log(a / b)  //result == 0.5
console.log(a % b)  //result == 10

/**
 * (++) this is called incremental sign in arithmetic operators
 *      incremental sign kind of 2
 *      pre-incremental
 *      post-incremental
 */

var a = 50
console.log(++a)        //this is a pre-incremental
console.log(a++)        //this is a post-incremental, but this result haven't action bcz of second line is final result
console.log(a)


var b = 30
console.log(--b)        //this is a pre-decremental 
console.log(b--)        //this is a post-decremental, but this result haven't action bcz of second line is final result
console.log(b)



// Assignment      == =, +=, -=, *=, /=, %= those called Assignment sign

var a = 40
var b = 60

a += b          //this is short form, but this is long/main form (a = a + b)
console.log(a)

a -= b          //this is short form, but this is long/main form (a = a - b)
console.log(a)

a *= b          //this is short form, but this is long/main form (a = a * b)
console.log(a)

a /= b          //this is short form, but this is long/main form (a = a / b)
console.log(a)

a %= b          //this is short form, but this is long/main form (a = a % b)
console.log(a)



// Comparison      == ==, !=, >, <, >=, <=, { when we will use comparison Operators when so result always return BooleanValue(true/flase) }

var a = 10
var b = 20 
console.log(a == b)         //false
var a = 10
var b = 20 
console.log(a != b)         //true
var a = 10
var b = 20 
console.log(a > b)          //false
var a = 10
var b = 20 
console.log(a < b)          //true
var a = 10
var b = 20 
console.log(a >= b)         //false
var a = 10
var b = 20 
console.log(a <= b)         //true

var c = '50'
var d = 50
console.log(c === d)        // akhane triple =(===) used hoyese bcz of 'comparison with type' checking this methods on the others hand double =(==) used hoy only checking comparison
var c = '50'
var d = 50
console.log(c !== d)        // akhane triple =(===) used hoyese bcz of 'comparison with type' checking this methods on the others hand double =(==) used hoy only checking comparison
