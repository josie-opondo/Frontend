const form = document.getElementById('form-data')
const input = document.getElementById('input-item')
const todosData = document.getElementById('todos-item')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.array.forEach(todo => {
      return addTodo(todo)  
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault()
    addTodo()
})

function addTodo( todoItem) {
    let todoText = input.value

    if (todoItem) {
        todoText = todoItem.text
    }

    if (todoText) {
        const todoEl = document.createElement('li')

        if (todoItem && todoItem.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText= todoText

        todoEl.addEventListener('click', function() {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', function(event) {
            event.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todosData.appendChild(todoEl)
        input.value =  ""
        updateLS()
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(function(todoEl) {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}