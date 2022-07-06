//function - input -> parameter
//--> some code is written
//--> return value

//call function -> argument

function greetUser(name) {
    console.log(name)
}

greetUser("Josephine")
greetUser("Juliet")
greetUser("Jane")

function carType(model) {
    console.log(model)
}

carType("Volvo")

function square(num) {
    let result = num * num
    return result
}

let value1 = square(8)
let value2 = square(12)
console.log (value1)
console.log (value2)

//challenge 1
function cToF(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fToC(fahrenheit) {
  return  (fahrenheit - 32) * 5 / 9;
} 
let temp2 = cToF(60);
let temp3 = fToC(45);
console.log(temp2)
console.log(temp3)

function convertToCelsius(fahrenheit) {
    let celsius = ( (fahrenheit - 32) * 5) / 9
    return celsius
}

let tempOne = convertToCelsius(212)
console.log(tempOne)

//challenge 2

function addition(a,b,c) {
    let result = a + b + c  // return a + b + c
    return result
}

let val1 = addition(25,36,7)
console.log(val1)

//challenge 3

function minus (a,b) {
    return a - b
}

let sub = minus(50,71)
console.log (sub)

function getScoreText(name = "Jane",score = 45) { // jane and 45 are default parameters to avoid getting 'undefined'
    return `Name: ${name} - Score: ${score}` //combining diff data types
}

let scoreData = getScoreText("Juliet", 67)//when the arguments are not defined the default parameters will be logged on the console. In this case Juliet and 67 will be the output 
console.log(scoreData)

function myPlace(town) {
    return `I live in ${town}. It's a very beautiful place. And quite hot.` // this is called a template string
}

let location = myPlace()
console.log (location)