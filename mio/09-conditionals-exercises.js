/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let name = 'Hajime'

if (name == 'Hajime') {
    console.log(name)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usr = 'userName'
let pwd = 'SuperSafePassword'

if (usr == 'userName' && pwd == 'SuperSafePassword') {
    console.log('login satisfactorio')
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -1

if (number > 0) {
    console.log('El numero es positivo')
} else if (number < 0) {
    console.log('El numero es negativo')
} else {
    console.log('El numero es 0')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 17

if (age >= 18) {
    console.log('Puede votar')
} else {
    console.log(`Al usuario le faltan ${18 - age} años para poder votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let tipo = age >= 18 ? 'Adulto' : 'Menor'
console.log(tipo)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 8

if (mes == 1 || mes == 2)
    console.log('Estamos en verano')
else if (mes == 3)
    console.log('Dependiendo del dia, estamos entre verano y otonio')
else if (mes == 4 || mes == 5)
    console.log('Estamos en otonio')
else if (mes == 6)
    console.log('Dependiendo del dia, estamos entre otonio e invierno')
else if (mes == 7 || mes == 8)
    console.log('Estamos en invierno')
else if (mes == 9)
    console.log('Dependiendo del dia, estamos entre invierno y primavera')
else if (mes == 10 || mes == 11)
    console.log('Estamos en primavera')
else if (mes == 12)
    console.log('Dependiendo del dia, estamos entre primavera y verano')
else
    console.log('Indice fuera de rango')


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12)
    console.log('Este mes tiene 31 dias')
else if (mes == 2)
    console.log('Este mes tiene 28 dias')
else if (mes > 0 && mes < 13)
    console.log('Este mes tiene 30 dias')
else
    console.log('Indice fuera de rango')

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = 'española'
// let language = 'ingles'

switch (language) {
    case 'español':
        console.log('Bienvenido usuario!')
        break;
    case 'ingles':
        console.log('Wellcome User!')
        break;
    default:
        console.log('Idioma desconocido / Unknown language')
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case 1:
        console.log('Estamos en verano')
        break;
    case 2:
        console.log('Estamos en verano')
        break;
    case 3:
        console.log('Dependiendo del dia, estamos entre verano y oronio')
        break;
    case 4:
        console.log('Estamos en otonio')
        break;
    case 5:
        console.log('Estamos en otonio')
        break;
    case 6:
        console.log('Dependiendo del dia, estamos entre otonio e invierno')
        break;
    case 7:
        console.log('Estamos en invierno')
        break;
    case 8:
        console.log('Estamos en invierno')
        break;
    case 9:
        console.log('Dependiendo del dia, estamos entre invierno y primavera')
        break;
    case 10:
        console.log('Estamos en primavera')
        break;
    case 11:
        console.log('Estamos en primavera')
        break;
    case 12:
        console.log('Dependiendo del dia, estamos entre primavera y verano')
        break;
    default:
        console.log('Indice fuera de rango')
        break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case 1:
        console.log('Enero tiene 31 dias')
        break;
    case 2:
        console.log('Febrero tiene 28 dias')
        break;
    case 3:
        console.log('Marzo tiene 31 dias')
        break;
    case 4:
        console.log('Abril tiene 30 dias')
        break;
    case 5:
        console.log('Mayo tiene 31 dias')
        break;
    case 6:
        console.log('Junio tiene 30 dias')
        break;
    case 7:
        console.log('Julio tiene 31 dias')
        break;
    case 8:
        console.log('Agosto tiene 31 dias')
        break;
    case 9:
        console.log('Septiembre tiene 30 dias')
        break;
    case 10:
        console.log('Octubre tiene 31 dias')
        break;
    case 11:
        console.log('Noviembre tiene 30 dias')
        break;
    case 12:
        console.log('Diciembre tiene 31 dias')
        break;
    default:
        console.log('Indice fuera de rango')
        break;
}