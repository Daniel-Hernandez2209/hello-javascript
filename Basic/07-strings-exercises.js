/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena = "hola señor,"+" como sigues?"  

// 2. Muestra la longitud de una cadena de texto
console.log(cadena.length)
// 3. Muestra el primer y último carácter de un string
console.log(cadena[0])
console.log(cadena[23])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena.slice(0, 11).toUpperCase()) 
console.log(cadena.slice(11,24).toLowerCase()) 

// 5. Crea una cadena de texto en varias líneas
let cadena2= `hola voy estoy haciendo
el ejercicio de brais....
feliz haciendo un ejercicio `
let nombre="Daniel"
// 6. Interpola el valor de una variable en un string
console.log(`hola mi nombre es ${nombre}, y estoy viendo el curso de brais`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(cadena2.replace(/[" "]/g ,"-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena2.includes("Daniel"))
// 9. Comprueba si dos strings son iguales
console.log(cadena == cadena)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena.localeCompare(cadena2))