//scope is the environment where variables exist
//global scope - defined outside code blocks
//local scope - defined inside code block
//var ignores conditional statements; can go in and out of scopes. variables defined using let and const limit one to the local scope(inside (block of code ~code within curly braces) )

let myCity = "Nairobi"



if (myCity) {
    let myCity = "Kisumu"
    var myCity2 = "Lamu" //does not work with let
    console.log(myCity)

}

console.log(myCity)
console.log(myCity2)


{
    var name1 = "Josie" 
}
console.log (name1)


{
    let name2 = "oposhe" 
}
console.log (name2)