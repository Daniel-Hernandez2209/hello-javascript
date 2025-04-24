/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let array =["perro","cocodrillo","pez","iguana","elefante"]
console.log(array)

// 2. Añade dos más. Uno al principio y otro al final
array.push("jirafa")
console.log(array)
array.unshift("gallina")
console.log(array)
// 3. Elimina el que se encuentra en tercera posición
array.splice(3,1)
console.log(array)
// 4. Crea un set que almacene cinco libros
let myset = new Set(["libro1","libro2","libro3","libro4","libro5"]) 
console.log(myset)
// 5. Añade dos más. Uno de ellos repetido
console.log(myset.add("libro4").add("libro7"))

// 6. Elimina uno concreto a tu elección
console.log(myset.delete("libro2"))
console.log(myset)
// 7. Crea un mapa que asocie el número del mes a su nombre
let map = new Map([
    ["1","enero"],
    ["2","febrero"],
    ["3","marzo"],
    ["4","abril"],
    ["5","mayo"],
    ["6","junio"],
    ["7","julio"],
    ["8","agosto"],
    ["9","septiembre"],
    ["10","octubre"],
    ["11","noviembre"],
    ["12","diciembre"]
    
])

console.log(map)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(map.has("5"))
console.log(map.get("5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
map.set("verano",["enero","febrero","marzo"])
console.log(map)
let array_verano = map.get("verano")
console.log(array_verano[2])
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array1 = ["gordo","flaco","trozo","obeso","anorexico"]
console.log(array1)
let set1 = new Set (array1)
console.log(set1)
let map1 = new Map([
    ["tipo_cuerpo", set1]
])
console.log(map1)