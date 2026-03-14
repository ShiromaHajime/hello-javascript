// Loops o bucles

// for

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// while

let i = 0

while (i < numbers.length) {
    console.log(numbers[i])
    i++
}

// do while

i = 0
do {
    console.log(`i = ${i}`)
    i++
} while (i < 10)

// for of

let myMap = new Map([
    ['name', 'Hajime'],
    ['email', 'hajishiro.hs@gmail.com']
])

for (let valor of myMap) {
    console.log(valor)
}

let myString = 'esto es una cadena'

for (let c of myString) {
    console.log(c)
}

// break & continue

for (let i = 1; i <= 10; i++){
    if (i == 5){
        continue // me salteo esta vuelta, pero sigo con el bucle
    }
    console.log(i)
}

for (let i = 1; i <= 10; i++){
    if (i == 5){
        break // detengo la ejecucion del bucle
        
    }
    console.log(i)
}

