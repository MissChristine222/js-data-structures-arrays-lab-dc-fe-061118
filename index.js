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
  const driversPlusOneBack = [...drivers, 'Broom'];
}

function prependDriver (name) {
  const driversPlusOneFront = ['Arnold', ...drivers];
}



