console.log('My hobbies')

//add a new element

const newList = document.createElement("li")
newList.textContent = "cheki fala amecome na amezubaa"
document.querySelector('ol').appendChild(newList)

const newParagraph = document.createElement("p")
newParagraph.textContent = "Okay those are just the lyrics to Geri Inengi by Wakadinali. Now to get a lil bit serious..."
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
    const List = document.createElement('li')
   // List.textContent = note.title + ' - '  + note.body
      List.textContent = `${note.title}`  //Sam's way
    document.querySelector('body').appendChild(List)
})

//const newButton = document.createElement("button")
//newButton.textContent = "Awesomnessss"
//document.querySelector('body').appendChild(newButton)

document.querySelector('#Create-note').addEventListener('click', function(event){
    event.target.textContent = 'you clicked meeee!!!!'
})
//manipulation happens from the document object

document.querySelector('#Remove-note').addEventListener('click', function(event){
    document.querySelectorAll('li').forEach(function(item){
        item.remove()
    })
})