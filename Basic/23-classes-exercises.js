/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Mascota  {
 constructor(perros,gatos){
    this.perros = perros
    this.gatos= gatos
 }

}
let mascotas1 = new Mascota("matias","max")
console.log(mascotas1)
// 2. Añade un método a la clase que utilice las propiedades
Mascota.run = function (perros) {
    console.log(`las mascotas que mas corren es el perro: ${perros}`)
}
 
// 3. Muestra los valores de las propiedades e invoca a la función
Mascota.run("matias","max")
// 4. Añade un método estático a la primera clase
 Mascota.staticmethod = function (gatos){
     return console.log(`el gato que mas juega es: ${gatos}`)
 }
 
// 5. Haz uso del método estático
Mascota.staticmethod("pedro")

// 6. Crea una clase que haga uso de herencia
class Mascotas_Exoticas extends Mascota {
    cariñosas(){
        console.log("las mascotas son muy cariñosas")
    }
}
// 7. Crea una clase que haga uso de getters y setters
class getsetmascotas {
    #nombre
    #edad
    #tipo
    constructor(nombre,edad,alias,tipo){
        this.#nombre = nombre
        this.#edad = edad
        this.alias = alias
        this.#tipo = tipo
    }
    get nombre() {
    return  this.#nombre
    }
    set edad(edad){
        this.#edad = edad
        console.log(this.#edad)
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
let titan = new getsetmascotas("titan",8,"titi","perro")
console.log(titan)
// 9. Utiliza los get y set y muestra sus valores
console.log(titan.nombre)
titan.edad = 9
// 10. Sobrescribe un método de una clase que utilice herencia 
 Mascotas_Exoticas.run = function (gatos){
    return console.log(`el gato que mas juega es: ${gatos}`)
}
Mascotas_Exoticas.run("martin")