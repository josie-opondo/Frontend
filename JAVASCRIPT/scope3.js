//block scoping we use let and const

function num() {
    var data1 = 55    //var is a function scope and has no block scope
    console.log(data1)
}
console.log(num())