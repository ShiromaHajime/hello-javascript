/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// comentario en una linea

// 2. Escribe un comentario en varias líneas

/* comentario
en varias lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let number = 1
let string = 'texto'
let boolean = true
let bigInt = 123n
let mynull = null
let undefined
let symbol = Symbol('no se que es esto aun')

// 4. Imprime por consola el valor de todas las variables

console.log(number)
console.log(string)
console.log(boolean)
console.log(bigInt)
console.log(mynull)
console.log(undefined)
console.log(symbol)

// 5. Imprime por consola el tipo de todas las variables
console.log()
console.log(typeof(number))
console.log(typeof(string))
console.log(typeof(boolean))
console.log(typeof(bigInt))
console.log(typeof(mynull))
console.log(typeof(undefined))
console.log(typeof(symbol))

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

number = 2
string = 'otro texto'
boolean = false
bigInt = 234n
mynull = null
undefined
symbol = Symbol('sigo sin entender que es esto')

console.log()
console.log(typeof(number))
console.log(typeof(string))
console.log(typeof(boolean))
console.log(typeof(bigInt))
console.log(typeof(mynull))
console.log(typeof(undefined))
console.log(typeof(symbol))

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

number = 'esto ya no es un number'
string = 3
boolean = 'false'
bigInt = 123
mynull = 'algo'
undefined = true
symbol = '$'

console.log()
console.log(number)
console.log(string)
console.log(boolean)
console.log(bigInt)
console.log(mynull)
console.log(undefined)
console.log(symbol)

console.log()
console.log(typeof(number))
console.log(typeof(string))
console.log(typeof(boolean))
console.log(typeof(bigInt))
console.log(typeof(mynull))
console.log(typeof(undefined))
console.log(typeof(symbol))

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const cnumber = 1
const cstring = 'texto'
const cboolean = true
const cbigInt = 123n
const cmynull = null
// no se puede definir una constante undefined porque al no poder darle valor luego no tiene sentido
const csymbol = Symbol('no se que es esto aun')

// 9. A continuación, modifica los valores de las constantes

// no se puede wey

// cnumber = true -> esto da error

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse