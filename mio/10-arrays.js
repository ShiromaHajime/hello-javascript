// array

let myArray = []

let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [1]
myArray2 = new Array(3) // crea un array de tres elemento, pero vacio

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 'hola']
myArray2 = new Array(1, 2, 3, 'hola') // crea un array de 4 elementos inicializados

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = 'Hajime'
myArray2[1] = 'Shiroma'
myArray2[2] = 24

console.log(myArray2)

// Metodos comunes

myArray = []

// push y pop

myArray.push('Hajime', 'Shiroma') // agrega elementos al final
myArray.push('Shime')
myArray.push(24)
myArray.push('pop')

console.log(myArray)

console.log(myArray.pop()) // saca el ultimo elemento y lo devuelve

console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // saca el primer elemento y lo devuelve
console.log(myArray.shift())
console.log(myArray)

myArray.unshift('Hajime', 'Shiroma') // agrega elementos al principio
console.log(myArray)

// length

console.log(myArray.length)

// slice

console.log(myArray.slice(2,4)) // devuelve del 2 al 3

// splice

myArray.splice(1,2) // elimina 2 elementos a partir del 1
console.log(myArray)

myArray = ['Hajime', 'Shiroma', 'Shime', 24]

myArray.splice(1,2,'Nuevo Elemento') // eliminamos 2 elementos a partir del 1 y en su lugar ponemos 'Nuevo Elemento'

console.log(myArray)

