/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let cadena1 = 'Hola, '
let cadena2 = 'Hajime'
let saludo = cadena1 + cadena2

console.log(saludo, '\n')

// 2. Muestra la longitud de una cadena de texto

console.log(saludo.length, '\n')

// 3. Muestra el primer y último carácter de un string

console.log(saludo[0], saludo[saludo.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(saludo.toUpperCase(), '\n', saludo.toLocaleLowerCase(), '\n')

// 5. Crea una cadena de texto en varias líneas

let cadenaMultilinea = `cadena
de
texto
multilinea`

console.log(cadenaMultilinea, '\n')

// 6. Interpola el valor de una variable en un string

console.log(`Hola ${cadena2}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(saludo.replace(' ', '-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(saludo.includes('Hajime'))

// 9. Comprueba si dos strings son iguales

console.log(cadena1 == cadena2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(cadena1.length == cadena2.length)