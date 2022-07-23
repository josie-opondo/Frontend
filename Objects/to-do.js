const todos = [ 'order water', 'clean compound', 'buy food']
todos[2] = 'watch tv'

todos.forEach(function(item, index) {  //for.Each is an array method. Checks thru every item and logs back on the console. array methods use callback function.
    console.log(`${index + 1} -- ${item}`)
})

let index = todos.findIndex(function(todo) {
    return todo == 'clean compound'
})
console.log(index)

