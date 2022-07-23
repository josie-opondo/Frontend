console.log('awesome notes')

//add a new element

const newParagraph = document.createElement("p")
newParagraph.textContent = "Josie likes music"
document.querySelector('body').appendChild(newParagraph)

const notes = [
    {
        title: "My next trip",
        body: "awesome spain it is",
    },
    {
        title: "attend book session",
        body: "london arts",
    },
    {
        title: "book I am reading",
        body: "safe habour",
    },
    {
        title: "javascript conference",
        body: "Amsterdam center, Netherlands",
    },
    {
        title: "formula1",
        body: "qatar rally",
    },
]

notes.forEach(function(note ){
    const p = document.createElement('p')
   // p.textContent = note.title + ' - '  + note.body
      p.textContent = `${note.title} -- ${note.body}`  //Sam's way
    document.querySelector('body').appendChild(p)
})

document.querySelector('#CreateNote').addEventListener('click', function(event){
    event.target.textContent = 'the button was clicked'
   // console.log(event)
})

document.querySelector('#RemoveNote').addEventListener('click', function(event){
    document.querySelectorAll('p').forEach(function(item){
        item.remove()
    })
})