/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma = 2 + 3
let resta = 2 - 3
let multiplicacion = 2 * 3
let division = 4 / 2
let modulo = 5 % 2
let exponencial = 2 ** 3
let incremento = 0
incremento++
let decremento = 0
decremento--

console.log('suma: 2 + 3 =', suma)
console.log('resta: 2 - 3 =', resta)
console.log('multiplicacion: 2 * 3 =', multiplicacion)
console.log('division: 4 / 2 =', division)
console.log('modulo: 5 % 2 =', modulo)
console.log('exponencial: 2 ** 3 =', exponencial)
console.log('incremento: 0++ =', incremento)
console.log('decremento: 0-- =', decremento)
console.log()

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let igual = 1
let suma2 = suma
let resta2 = resta
let multiplicacion2 = multiplicacion
let division2 = division
let modulo2 = modulo
let exponencial2 = exponencial

suma2 += 1
resta2 -= 1
multiplicacion2 *= 3
division2 /= 2
modulo2 %= 2
exponencial2 **= 2

console.log('igual: ', igual)
console.log('suma2: 5 + 1 =', suma2)
console.log('resta2: -1 - 1 =', resta2)
console.log('multiplicacion2: 6 * 3 =', multiplicacion2)
console.log('division2: 2 / 2 =', division2)
console.log('modulo2: 1 % 2 =', modulo2)
console.log('exponencial2: 8 ** 2 =', exponencial2)

console.log()

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

let a = 1

console.log(1 == 1)
console.log(a === 1)
console.log(1 < 2)
console.log(1 > 0)
console.log(1 != 2)

console.log()

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(0 == true)
console.log(1 == 2)
console.log('1' === 1)
console.log(1 < 0)
console.log('algo' == 'otra cosa')

console.log()

// 5. Utiliza el operador lógico and

console.log(1 > 0 && 2 > 1)

console.log()

// 6. Utiliza el operador lógico or

console.log(false || true)

console.log()

// 7. Combina ambos operadores lógicos

console.log((1 > 0 && 1 < 0) || true)

console.log()

// 8. Añade alguna negación

console.log((1 > 0 && 1 < 0) || !true)

console.log()

// 9. Utiliza el operador ternario

let llueve = true

llueve ? console.log('llueve') : console.log('no llueve')

llueve = false

llueve ? console.log('llueve') : console.log('no llueve')

console.log()

// 10. Combina operadores aritméticos, de comparáción y lógicas

let b = 1
let c = 2

let resultado = b + c

console.log(b > c || resultado >= 3)