//object references
let myAccount = {
    name: 'Jeffrey Way',
    expenses: 0,
    income: 0,
    balance: 0,
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}
addExpense(myAccount,500)
console.log(myAccount)

let addIncome = function(account, amount) {
    account.income = account.income + amount
}

addIncome(myAccount,15000)
console.log(myAccount)

//let myBalance = function(account, amount) {
  // account.balance = amount - account.expenses

//}
//myBalance(myAccount, 15000)
//console.log(myAccount)

let myBalance2 = function(account) {
    account.balance = account.income - account.expenses
    return `Account for ${account.name} has $${account.balance}. $${account.income} in income and $${account.expenses} in expenses.`
    //without introducing balance as a key 
    //let balance = account.income - account.expenses
    //return `Account for ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses.`
}

console.log(myBalance2(myAccount))