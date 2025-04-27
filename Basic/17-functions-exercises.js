/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios


// 1. Crea una función que reciba dos números y devuelva su suma
const suma = (a=0,b=0) => console.log( a+b)
 suma(5,69)
 suma(5125,69)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayor (array){
    let e = 0
for (let i = 0; i < array.length; i++) {
   
   if(e < array[i]){
    e = array[i]
   
   }
 
}  return console.log(e)
 }
  let array = [2,5,9,8,7,15,9,30]
 mayor(array)
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function  vocales (frase){
    let vocales ="aeioou"
    let l = 0
    for (const element of frase) {
       
        if (vocales.includes(element)) {
            l++
        }
    }return console.log(l)
} 
let frase = "hola, como estas te saluda el kevin"
vocales(frase)
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function array1 (minuscula ){
 let mayuscula = minuscula.toLocaleUpperCase()
 return console.log(mayuscula)
}
let minuscula = "hola señorita como estas en tu casa"
array1(minuscula)
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    if (numero <= 1) return false; 
    if (numero <= 3) return true;  

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

const numero = 367;
console.log(`${numero} es primo: ${esPrimo(numero)}`);

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const newarray = [2,4,5,"Hola",0.5]
const newarray1 = [4,"Hola",0.5,8,9]
function comunes(newarray, newarray1) {
    let array2 = []
    for (const element of newarray) {
        for (const element1 of newarray1) {
            
           if (element == element1) {
            array2.push(element1)
           }
        }
    }
   return console.log(array2)
  
}

comunes(newarray,newarray1)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let numeros = [15,36,48,39,72,12,5,18]
function pares(numeros) {
    let suma = 0
    for (const element of numeros) {
        if (element % 2 === 0) {
            suma += element
        }
    }return console.log(`la suma de los numeros pares es:${suma}` )
}
pares(numeros)
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let n = [15,36,48,39,72,12,5,18]
function cuadrado(n) {
    let resultado = []
    for (const element of n) {
        let resultado1 = element * element
        resultado.push(resultado1)
    }console.log("arrray con los numeros del array n elevados al cuadrado: "+ resultado)
}
cuadrado(n)
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let cadena1 = "cambiame si puedes"
function cadena(cadena1) {
    for (let i = cadena1.length-1; i >= 0; i--) {
        console.log(cadena1[i])
        
    }
}
cadena(cadena1)

// 10. Crea una función que calcule el factorial de un número dado

function factorial(num){
let fac = []
let suma = 1
for (let i = 5;i >=1; i--) {
    
     fac.push(i)
}
console.log(fac)
for (const element of fac) {
    suma *= element
}console.log(`El ${num}!: ${fac} = ${suma}`)
}
let num = 5
factorial(num)