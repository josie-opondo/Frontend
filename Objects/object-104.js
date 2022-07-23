//object methods
//refers to objects where keys have the value of function

let restaurant = {
    name: 'Gaucho',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
    
    
}

restaurant.seatParty(74)
console.log(restaurant.checkAvailability(3))
restaurant.removeParty(2)
console.log(restaurant.checkAvailability(3))