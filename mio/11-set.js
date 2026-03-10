// set (no tiene posiciones, ni repetidos)

// Declaracion

let mySet = new Set()

// Inicializacion

mySet = new Set(['Hajime', 'Shiroma', 'Shime', 24, 'hajishiro.hs@gmail.com'])

console.log(mySet)

// Metodos comunes

// add y delete

mySet.add('https://linkedin.com/in/hajimeshiroma')

console.log(mySet)

console.log(mySet.delete('Hajime')) // devuelve true como diciendo, encontre y borre el elemento
console.log(mySet)

// has

console.log(mySet.has('Hajime'))
console.log(mySet.has('Shiroma'))

//size

console.log(mySet.size)

// convertir set a array

let myArray = Array.from(mySet)

console.log(myArray)

// convertir array a set

let mySet2 = new Set(myArray)

console.log(mySet2)

