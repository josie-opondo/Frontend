const todos = [
    {
        text: "order food",
        body: "ring road shop",
    },
    {
        text: "attend movie show",
        body: "swan park",
    },
    {
        text: "design website",
        body: "sunset systems",
    },
]
//console.log(todos[1].body)
//console.log(todos[2].text)
//callback function- a function inside another function. Array methods use callback function
//todos.forEach(function(item) {
   // console.log(item.text)
//})

const findTodo = function(todoData, todoBody) {
    return todoData.find(function(item){
        return item.body ===todoBody
    })
}

console.log(findTodo(todos, "sunset systems"))

const findTodo2 = function(todoData, todoBody) {
    return todoData.findIndex(function(item){
        return item.body ===todoBody
    })
}

console.log(findTodo2(todos, "sunset systems"))