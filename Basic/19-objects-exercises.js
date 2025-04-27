/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
 let carro = {
    marca : "bmw",
    modelo : 2024,
    color :"blanco"

 }
// 2. Accede y muestra su valor
 console.log(carro)
// 3. Agrega una nueva propiedad
carro.altura = "1.5 cm"
console.log(carro)

// 4. Elimina una de las 3 primeras propiedades
 delete carro.color
 console.log(carro)
// 5. Agrega una función e invócala
 carro.work = function(){
    console.log("El carro es utilizado para trabajar")
 }

 console.log(carro)
 carro.work()
 
// 6. Itera las propiedades del objeto
 for (const key in carro) {
    if (Object.prototype.hasOwnProperty.call(carro, key)) {
        const element = carro[key];
        console.log(key + ": " + carro[key])
    }
 }
// 7. Crea un objeto anidado
carro.partes = {
    llantas : "michelin",
    transmision : "automatica",
    vidrios : "polarizados",
    tapiceria :"sin tapices"
}
console.log(carro)
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(carro.partes)
// 9. Comprueba si los dos objetos creados son iguales
console.log(carro == carro.partes )
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(carro.modelo==carro.marca)