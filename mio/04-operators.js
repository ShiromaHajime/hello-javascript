// Operadores

// Operadores aritmeticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division 

console.log(a % b) // Modulo
console.log(a ** b) // Exponencial

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2 // myVariable = myVariable + 2
console.log(myVariable)

myVariable -= 2 // myVariable = myVariable - 2
console.log(myVariable)
myVariable *= 2 // myVariable = myVariable * 2
console.log(myVariable)
myVariable /= 2 // myVariable = myVariable / 2
console.log(myVariable)
myVariable %= 3 // myVariable = myVariable % 2
console.log(myVariable)
myVariable **= 2 // myVariable = myVariable ** 2
console.log(myVariable)

// Operadores de comparacion

console.log(a)
a = 5

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

// Igualdad por valor

console.log(a == b)
console.log(a == a)
console.log(a == 5)
console.log(a == '5')

// Igualdada por identidad (tipo y valor)

console.log(a === a) // true
console.log(a === 5) // true
console.log(a === '5') // false

// Desigualdad

console.log(a != 5)
console.log(a !== '5')

// Cosas raras

console.log(0 == false) // true
console.log(1 == false) // false

console.log(0 == '') // true
console.log(0 == " ") // true
console.log(0 == 'hola') //false

console.log(0 === '') // false

console.log(undefined == null) // true
console.log(undefined === null) // false

// Operadores logicos

// and (&&)
console.log(5 > 10 && 15 > 20) // false
console.log(5 < 10 && 15 < 20) // true
console.log(5 < 10 && 15 > 20) // false

// or (||)
console.log(5 > 10 || 15 > 20) // false
console.log(5 < 10 || 15 < 20) // true
console.log(5 < 10 || 15 > 20) // true

// not (!)
console.log(!(5 > 10 && 15 > 20)) // true
console.log(!(5 > 10 || 15 > 20)) // true

// Operadores ternarios

const isRaining = true

isRaining ? console.log('Esta lloviendo') : console.log('No esta lloviendo')