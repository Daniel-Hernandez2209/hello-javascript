/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
  export function sumar (a,b){

   return  a + b
 }
console.log(sumar(5,6))
// 2. Exporta una constante
export const PI = 3.1416
// 3. Exporta una clase
 export let moto_registrada = new Map()
export class Moto {
    constructor(marca,cilindraje){
        this.marca = marca
        this.cilindraje = cilindraje
    }
     tipo_Moto(marca,cilindraje){
    
     moto_registrada.set(marca,cilindraje)
  return moto_registrada
  }
     
 }
let prueba = new Moto()
prueba.tipo_Moto("XTZ","250")
prueba.tipo_Moto("FZ","250")
prueba.tipo_Moto("XR","190")
console.log(moto_registrada)

// 4. Importa una función

// 5. Importa una constante  4-5-6 estan en ./32-modulos-exercises-import.js

// 6. Importa una clase

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
// export default function tiempo(hora) {
//     return hora
// }

// export default function hora(minutos) {
//     return minutos
// }
// export default  segundos = 5.48
// console.log(segundos)
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
        //8 estan en ./32-modulos-exercises-import.js
// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior