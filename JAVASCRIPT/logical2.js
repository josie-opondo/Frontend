let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log ("only offer vegan dishes")
}else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log ("make sure to offer up some vegan dishes")
}else {
    console.log ("offer anything on the menu")
}

if (isGuestOneVegan ==true && isGuestTwoVegan ==false) {
    console.log ("only offer vegan dishes")
}else if (isGuestOneVegan ==true || isGuestTwoVegan ==false) {
    console.log ("make sure to offer up some vegan dishes")
}else {
    console.log ("offer anything on the menu")
}
