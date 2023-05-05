// Comparison operator checking this methods
var a = 10
var b = 20

if(a > b) {
    console.log("A= " + a + " is greater than B= " + b)
}

if(a < b){
    console.log("B= " + b + " is greater than A= " + a)
}


// Even or Odd Number checking this methods
var n = 50
if(n%2===0){
    console.log(n + 'is Even Number')
}

if(n%2===1){
    console.log(n + 'is Odd Number')
}


// this is practice part in here

// We are siblings Miraj & shamima Example:1
var sureName = 'miraj'
var sureName0= 'shmima'

if(sureName > sureName0){
    console.log('Ami' + sureName + 'holam' + sureName0 + 'apor elder brother')
}

if(sureName < sureName0){
    console.log('Ami ' + sureName + ' holam ' + sureName0 + ' apor younger brother')
}


// We are siblings Miraj & shamima, but we are not same ages in our family. Example:2
var sureNameWithAge = 'miraj 23'
var sureNameWithAge0 = 'shamima 26'

if(sureNameWithAge > sureNameWithAge0){
    console.log('Ami ' + sureNameWithAge + ' holam ' + sureNameWithAge0 + ' apir elder brother')
    console.log('she is my younger')
}
if(sureNameWithAge < sureNameWithAge0){
    console.log('Ami ' + sureNameWithAge + ' holam ' + sureNameWithAge0 + ' apir younger brother')
    console.log('she is my elder sisters')
}