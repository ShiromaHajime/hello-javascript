// Strings

// Concatenacion

let myName = 'Hajime'

let greeting = 'Hola, ' + myName + '!'

console.log(greeting)

console.log(typeof(greeting))

// Longitud

console.log('longitud del saludo:', greeting.length, 'caracteres')

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[1])

// Metodos comunes

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf('Hajime'))
console.log(greeting.includes('Hola'))
console.log(greeting.slice(0,10))
console.log(greeting.replace('Hajime', 'Shime'))

// Template literals (plantillas literales)

let message = `Hola, este es mi
curso de Javascript`

console.log(message)

let email = 'hajishiro.hs@gmail.com'

console.log(`Hola, ${myName}!
    Tu email es ${email}`)

