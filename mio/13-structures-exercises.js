/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ['perro', 'gato', 'vaca', 'chancho', 'paloma']

console.log(animales, '\n')

// 2. Añade dos más. Uno al principio y otro al final

animales.unshift('loro')
animales.push('oveja')

console.log(animales, '\n')

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1)

console.log(animales, '\n')

// 4. Crea un set que almacene cinco libros

let libros = new Set(['libro1', 'libro2', 'libro3', 'libro4', 'libro5'])

console.log(libros, '\n')

// 5. Añade dos más. Uno de ellos repetido

libros.add('libro6')
libros.add('libro3')

console.log(libros, '\n')

// 6. Elimina uno concreto a tu elección

libros.delete('libro6')

console.log(libros, '\n')

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    [1, 'enero'],
    [2, 'febrero'],
    [3, 'marzo'],
    [4, 'abril'],
    [5, 'mayo'],
    [6, 'junio'],
    [7, 'julio'],
    [8, 'agosto'],
    [9, 'septiembre'],
    [10, 'octubre'],
    [11, 'noviembre'],
    [12, 'diciembre']
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (meses.has(5))
    console.log(meses.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set(13, ['diciembre', 'enero', 'febrero', 'marzo'])

console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let nuevoArray = [1, 2, 3, 4, 4, 5]

console.log(nuevoArray)

let nuevoSet = new Set(nuevoArray)

console.log(nuevoSet)

let nuevoMap = new Map()


nuevoSet.forEach(element => {
    nuevoMap.set(element,element)
});

console.log(nuevoMap)