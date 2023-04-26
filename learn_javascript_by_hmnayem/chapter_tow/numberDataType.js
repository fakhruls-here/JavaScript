var n = 234;            // this is a integer number     *(Remember that IntegerNumber/FloatingNumber = Number in JS)
var f = 293.34          // this is a floating number     *(Remember that IntegerNumber/FloatingNumber = Number in JS)
var nn= Number(45)      // this is simple var, but its constructNumber bcz of this is another way to declared, its called NumberObject
var nn0= Number(45.45)  // this is simple var, but its constructNumber bcz of this is another way to declared, its called NumberObject
var nn1= Number('45')   // this is simple var, but its "construct String_2_Number" this is another way to converting any data like this "String(3030)"

console.log(n)
console.log(f)
console.log(nn)
console.log(nn0)
console.log(nn1)
console.log(Number.parseFloat(nn1))
console.log(Number.parseInt(nn0))


// if we see NumberInMaxValue / NumberInMinValue
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// আমরা জানি কোন সংখ্যাকে ০ দ্বারা ভাগ করলে তা ইনফিনিটি হয় ও কোন সংখ্যার ‍সাথে যদি string/boolean/anothe কিছূ +,/,*,-,% করা হয় তাহলে তা NaN== Not a Number হবে
console.log(1/0)
console.log("abc"/10)