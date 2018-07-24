// Write your solution here!
const drivers=['Milo', 'Otis', 'Garfield'];
console.log(drivers);

function destructivelyAppendDriver(name) {
  drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
}


function appendDriver (name) {
  driversPlusOneBack = [...drivers, 'Broom'];
}

function prependDriver (name) {
  driversPlusOneFront = [...drivers, 'Broom'];
}



