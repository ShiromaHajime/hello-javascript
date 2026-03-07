// if, else if, else

// if (si)

let age = 38

if (age == 37) {
    console.log('La edad es 37 \n')
}


// else (si no)

if (age == 37) {
    console.log('La edad es 37 \n')
} else {
    console.log('La edad no es 37 \n')
}

// else if (si no, si)

if (age == 37) {
    console.log('La edad es 37 \n')
} else if (age < 18) {
    console.log('La edad es menor a 18\n')
} else {
    console.log('La edad no es 37 ni es menor de edad\n')
}

// Operador ternario

let message = (age == 37) ? 'La edad es 37 \n' : 'La edad no es 37 \n'
console.log(message)

// switch

let day = 7
let dayname

if (day == 0) {
    dayname = 'Domingo'
} else if (day == 1) {
    dayname = 'Lunes'
} else if (day == 2) {
    dayname = 'Martes'
} else if (day == 3) {
    dayname = 'Miercoles'
} else if (day == 4) {
    dayname = 'Jueves'
} else if (day == 5) {
    dayname = 'Viernes'
} else if (day == 6) {
    dayname = 'Sabado'
} else {
    dayname = 'Indice fuera de rango'
}

console.log(dayname)

switch (day) {
    case 0:
        dayname = 'Domingo'
        break;
    case 1:
        dayname = 'Lunes'
        break;
    case 2:
        dayname = 'Martes'
        break;
    case 3:
        dayname = 'Miercoles'
        break;
    case 4:
        dayname = 'Jueves'
        break;
    case 5:
        dayname = 'Viernes'
        break;
    case 6:
        dayname = 'Sabado'
        break;

    default:
        dayname = 'Indice fuera de rango'
}

console.log(dayname)