// Map

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicializacion

myMap = new Map([
    ['name', 'Hajime'],
    ['email', 'hajishiro.hs@gmail.com'],
    ['age', 24]
])

console.log(myMap)

// Metodos y Propiedades

// set

myMap.set('alias', 'Shime')
myMap.set('name', 'Hajime2')

console.log(myMap)

// get

console.log(myMap.get('name'))
console.log(myMap.get('name2')) // undefined

// has

console.log(myMap.has('surname'))
console.log(myMap.has('age'))

// delete

myMap.delete('email')
console.log(myMap)

// clear

myMap.clear()
console.log(myMap)

myMap = new Map([
    ['name', 'Hajime'],
    ['email', 'hajishiro.hs@gmail.com'],
    ['age', 24]
])

// size

console.log(myMap.size)

// keys, values, entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())