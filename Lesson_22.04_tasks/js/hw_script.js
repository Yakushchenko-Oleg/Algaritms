let heighHause = 19
let elevatorA = 8
let elevatorB = 1

function elevatorController(floorCall) {
    if (floorCall > heighHause ) { throw new Error ('The elevator call floor must be less or equal then number of floors in the house')
    } else if (Math.abs(floorCall - elevatorA) <= Math.abs(floorCall - elevatorB)) {
        elevatorA = floorCall
        return console.log(`Elevator A is called to floor no. ${floorCall}`);
    } else {
        elevatorB = floorCall
        return console.log(`Elevator B is called to floor no. ${floorCall}`);
    }
}
elevatorController(5)
elevatorController(6)
elevatorController(2)