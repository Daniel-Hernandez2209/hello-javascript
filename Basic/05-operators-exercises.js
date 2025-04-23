/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let variable = 15
variable += 15
variable -= 20
variable /=2
variable *= 4
variable %= 3
variable **= 5

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let v1 = 20
let v2 = 15
console.log(v1 >= v2) 
console.log(v1==20)
console.log(v1 != v2)
console.log(v1 !== v2)
console.log(0 == false)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(v1 <= v2)
console.log(v2=="5")
console.log(v1 === v2)
console.log(2 == true)
console.log(0 == "bye")

// 5. Utiliza el operador lógico and
console.log(v1 < v2 && 15 == v2)

// 6. Utiliza el operador lógico or
console.log(v1 < v2 || 15 == v2)
// 7. Combina ambos operadores lógicos
console.log(v1 < v2 || 15 == v2 && v1 =="20")
// 8. Añade alguna negación
console.log(!false)


// 9. Utiliza el operador ternario
const muerto = true
muerto ? console.log("no esta muerto"): console.log(" esta muerto")
// 10. Combina operadores aritméticos, de comparáción y lógicas

 let operacion = 0
 operacion = v1 += 15 
 operacion != 21
 operacion ? console.log("la operacion es perfecta"): console.log("la operacion nones perfecta")