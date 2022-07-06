// A -> 80-100
// B -> 60-79
// C -> 40-59
// D -> 20-30
// E -> 0-19

function gradeCalc(score, totalScore){
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 80 && percent <= 100) {
        letterGrade = 'A'
    }else if (percent >= 60 && percent <=79 ) {
        letterGrade = 'B'
    }else if (percent >= 40 && percent <= 59) {
        letterGrade = 'C'
    }else if (percent >= 20 && percent <= 39) {
        letterGrade ='D'
    }else {
        letterGrade = 'E'
    }
    
    return `You got grade ${letterGrade} which is ${percent}% `
}

let scoreNum1 = gradeCalc(11,20)
console.log(scoreNum1)



function myFunction() { //variables defined inside the function will apply regardless of new function arguments(local variable)
    var dd = 4
    return dd * dd
}
var double = myFunction(8)
console.log(double)

//let a = 4         //a in this case is a global variable
//function jFunction () {
   // return a*a
//}
//console.log(jFunction())

function oFunction (){ //global variable
    a=3
    
}
console.log(oFunction())


















