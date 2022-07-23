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

//console.log(notes[3].body)
//notes.forEach(function(item) {
    //console.log(item.body)
//});

//notes.forEach(function(item) {
    //console.log(item.title)
//})

//const findNote = function(notesData, noteTitle) {
   // return notesData.find(function(item){
       // return item.title ===noteTitle
  //  })
//}

//console.log(findNote(notes, "attend book session"))

//const findNote2 = function(noteData, noteTitle) {
   // return noteData.findIndex(function(item){
   //     return item.title.lowercase() ===noteTitle
   // })
//}

//console.log(findNote2(notes, "attend book session"))

//const findNote = function (notesData, query) {
   // return notesData.filter(function(note) {
       // return note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase())
   // })
//}

//console.log(findNote(notes, "ne"))

//var num = 3
//if(num==4 || num ==3 ){
   // return console.log('awesome')
//}

var data= ['kisumu', 'nairobi']
data.filter(city => city.includes('mu'))//shorthand of writing code