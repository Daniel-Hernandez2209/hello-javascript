/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
 let i = 1
while (i<=20) {
    console.log(i)
    i++
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
while (i<=100) { 
    suma += i
    console.log(suma)
    i++
}
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let pares = 1
while (pares<=50 ) {
    if (pares % 2 == 0)  {
        console.log(pares)
    }
    pares++
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres=["camilo","jose","martin","pedro","juan"]

for (const element of nombres) {
    console.log(element)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const cadena = "tengo si letras en mi cadena de texto"
let vocales ="aeioou"
let l = 0
for (const element of cadena) {
   
    if (vocales.includes(element)) {
        l++
    }
}
console.log(i)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1,2,3,4,5,6,7,8,9]
let suma4 = 0
for (let i = 0; i < numeros.length; i++) {
  const  suma1 = numeros[i];
    suma4+=suma1
    console.log(suma4)
}

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
    let multiplo = 5
    multiplo *= i
    console.log(multiplo)
}

// 8. Usa un bucle para invertir una cadena de texto
let cadena1 = "cambiame si puedes"
for (let i = cadena1.length-1; i >= 0; i--) {
    console.log(cadena1[i])
    
}


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci


let fibo = [0,1];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
}
console.log(fibo);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let array = [2,3,4,5,6,7,8,9,20,30,40,50,60]
let array1 = []
for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
       
        array1.push(array[i])
        
    }
    
}

console.log(array1)
