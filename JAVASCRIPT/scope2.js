let name2 = "gracy"

{
    let name2 = "Josephine"
}
{
     name2 = "Juliet" //re-assigned variables can be referenced from global scope because they have no keywords limiting them. In this case the output will be Juliet. If we use let on this line the output will be gracy
}
console.log (name2)