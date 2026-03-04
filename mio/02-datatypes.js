// string (cadena de texto)

let myName = 'Hajime Shiroma'
let alias = 'Shime'
let email = 'hajishiro.hs@gmail.com'

console.log('Nombre y Apellido: ', myName, ' | Tipo: ', typeof(myName))
console.log('Apodo: ', alias, ' | Tipo: ', typeof(alias))
console.log('email: ', email, ' | Tipo: ', typeof(email))


// numeros

let age = 24
let height = 1.64

console.log('Edad: ', age, ' | Tipo: ', typeof(age))
console.log('Altura:', height, ' | Tipo: ', typeof(height))

// boolean

let isStudent = true
let isTeacher = false

console.log('Ocupacion: ')
if (isStudent)
    console.log('   Estudiante')
if (isTeacher)
    console.log('   Profesor')


// undefined

let undefinedValue

console.log('\nvariable undefined: ', undefinedValue, ' | Tipo: ', typeof(undefinedValue))

// null

let nullValue = null

console.log('variable null: ', nullValue, ' | Tipo: ', typeof(nullValue))

// symbol

let mysimbol = Symbol('mysymbol')

// bigint

let myBigInt = BigInt('1231231231231231231231231231238763498172396498712643981273649182734691287346')
let myBigIntn = 1231231231231231231231231231238763498172396498712643981273649182734691287346n

console.log('BigInt con la definicion BigInt(): ', myBigInt, ' | Tipo: ', typeof(myBigInt))
console.log('BigInt con la definicion 123...n: ', myBigIntn, ' | Tipo: ', typeof(myBigIntn))

console.log('para no mostrar la n del final se pasan a string')

console.log('BigInt pasado a string: ', String(myBigInt), ' | Tipo: ', typeof(String(myBigInt)))
console.log('BigIntn pasado a string: ', String(myBigIntn), ' | Tipo: ', typeof(String(myBigIntn)))
