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



