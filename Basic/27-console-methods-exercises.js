/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function errores(a,b) {
if(typeof a == 'number' && typeof b == 'number'){
  let suma = a + b
  console.log(`la suma de las variables es: ${suma}`)
}else{
    console.error("No se puede sumar porque porque las variables no son numeros ")
}
}
errores(5,12)
errores(5,'jose')

// 2. Crea una función que utilice warn correctamente
function multiplicacion(a,b) {
    if(typeof a == 'number' && typeof b == 'number'){
      if (a == 0 || b == 0) {
        console.warn("toda multiplicacion por 0 es igual a 0")
      }else{
        let multiplicacion = a * b
        console.log(`la multiplicacion de las variables es: ${multiplicacion}`)
      }
    }else{
        console.error("No se puede multiplicar porque porque las variables no son numeros ")
    }
    }
    multiplicacion(5,12)
    multiplicacion(5,0)
    multiplicacion(5,'jose')
// 3. Crea una función que utilice info correctamente
function multi(a,b) {
    if(typeof a == 'number' && typeof b == 'number'){
      if (a == 0 || b == 0) {
        console.warn("toda multiplicacion por 0 es igual a 0")
      }else{
        let multi= a * b
        console.log(`la multiplicacion de las variables es: ${multi}`)
      }
    }else{
        console.error("No se puede multiplicar porque porque las variables no son numeros ")
    }
    }
    console.info("Recuerde que los datos deben ser numeros y diferentes a cero ")
    multi(5,12)
    multi(5,0)
    multi(5,'jose')
// 4. Utiliza table
let table = ([
    {Nombre: "Daniel", Edad: 23, Rol: "Estudiante" },
    {Nombre: "Montse", Edad: 19, Rol: "Estudiante"  }
])
console.table(table)
// 5. Utiliza group
console.group("entrevistados")
console.group("Nombre: Daniel", "Edad: 23")
console.group("Nombre: Montse","Edad: 19")
console.groupEnd()
// 6. Utiliza time
console.time("oferta")
for (let i = 0; i < 1; i++) {
    
    
}
console.timeEnd("oferta")
// 7. Valida con assert si un número es positivo
let numero = -5
console.assert(numero > 0, "El numero debe ser mayor de 0" )
// 8. Utiliza count
console.count("sesion1")
console.count("sesion1")
console.count("sesion1")
console.countReset("sesion1")
console.count("sesion2")

// 9. Utiliza trace
function trace1(){
trace2()
}
function trace2(){
    trace3()
}
function trace3(){
    console.trace("Este fue mi proceso")
}
trace1()
// 10. Utiliza clear
//console.clear()