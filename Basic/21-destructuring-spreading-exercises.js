/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array = [2,4,5,6,6,7]
let  [n1,n2] = array
console.log(n1,n2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let array1 = [2,4,5,6,6,7]
let  [n3 = 0,n4 = 0, , , , ,n5 = 0] = array
console.log(n1,n2,n5)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let carro = {
    marca : "bmw",
    modelo : 2024,
    color :"blanco"
 }
 let {marca,color} = carro
 console.log(marca,color)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let carro1 = {
    marca : "bmw",
    modelo : 2024,
    color :"blanco"
 }
 let {marca:marca1,color:color1} = carro
 console.log(marca1,color1)
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let carro3 = {
    marca : "bmw",
    modelo : 2024,
    color :"blanco",
    partes : {
        llantas: "michelin",
    transmision: "automatica",
    vidrios: "polarizados",
    tapiceria: "sin tapices"
    }
 }
 let {partes:{llantas:llantas1},partes:{vidrios:vidrios1}} = carro3
 console.log(llantas1)
 console.log(vidrios1)
// 6. Usa propagación para combinar dos arrays en uno nuevo
let array2 = [2,4,8,6,16,7]
let array3 = [2,56,5,14,6,23,27]
let array4 = [...array2,...array3]
console.log(array4)

// 7. Usa propagación para crear una copia de un array
let array5 = [...array2]
console.log(array5)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let carro4 = {
    nombreC : "Bmw M340i 3.0 Xdrive At 4x4",
    marca : "bmw",
    modelo : 2024,
    color :"blanco"
 }
 let moto = {
    nombreM :"mt 09",
    marca : "yamaha",
    modelo : 2024,
    color :"negra"
 }
 let vehiculos = {carros : {...carro4},motos : {...moto}}
 console.log(vehiculos)
// 9. Usa propagación para crear una copia de un objeto
let motos = {...moto}
console.log(motos)
// 10. Combina desestructuración y propagación
let  {marca :marca_Carro , nombreC : nombre_Carro} = carro4
let {marca :marca_moto, nombreM : nombre_moto} = moto
let newobjects = {                                  //carateristicas carro y moto con 
    carro :{marca_Carro,nombre_Carro},              //desestructuracion
    moto:{marca_moto,nombre_moto}}

let  {modelo :modelo_Carro } = carro4
let {modelo :modelo_moto} = moto                    //Modelo carro y moto con 
let newobjects1 = {                                 //desestructuracion
    carro :{modelo_Carro},
    moto:{modelo_moto}}

let carateristicas = {                              //propagacion de los datos en un nuevo objecto
    carateristicas_1 :{...newobjects},
    modelo : {...newobjects1}
}
    
console.log(carateristicas)
