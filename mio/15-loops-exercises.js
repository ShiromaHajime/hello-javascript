/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0
for (let i = 1; i <= 100; i++) {
    suma += i
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0)
        console.log(i)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ['Hajime', 'Nahuel', 'Santiago', 'Noriko', 'Catalina']

for (const name of nombres) {
    console.log(name)
}

nombres.forEach(name => {
    console.log(name)
});

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let vocales = 0
let cadena = 'cadena de prueba para contar vocales'

for (const c of cadena) {
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
        vocales++
}

console.log(vocales)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [1, 56, 8, 4, 12, 65, 2]
let resultado = 1

numeros.forEach(n => {
    resultado *= n
})

console.log(resultado)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
    console.log(i * 5)
}

// 8. Usa un bucle para invertir una cadena de texto

let cadena1 = 'cadena de texto'
let cadena2 = ''
for (let i = cadena1.length - 1; i >= 0; i--) {
    cadena2 = cadena2.concat(cadena1.at(i))
}

console.log(cadena2)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let anterior = 0
let actual = 1
let aux = 0

for (let i = 1; i <= 10; i++) {
    console.log(anterior + actual)
    aux = anterior
    anterior = actual
    actual = aux + actual
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros2 = [1, 5436, 345, 61, 34, 1326, 345, 123, 32145, 435, 123, 4, 23465, 345, 6, 45]
let numeros3 = []
numeros2.forEach(n => {
    if (n > 10)
        numeros3.push(n)
});

console.log(numeros3)