/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let v1 = 3
if (v1 = 3 ) {
    console.log("El valor es de la variable es 3 y el nombre es Daniel")
}else{
console.log("el numero no de la variable no es correcto")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario ="daniel1223"
let contraseña = "123456789"
if (usuario == "daniel1223" && contraseña == "123456789") {
    console.log("acceso verificado")
}else{
    console.log("acceso denegado")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 6
if (numero < 0) {
    console.log("El numero es negativo")
} else if(numero > 0){
    console.log("El numero es postivo")
}else{
    console.log("El numero es 0")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 30
if (edad >=18) {
    console.log("El ciudadano puede ejercer el derecho al voto")
} else {
  let  edad_nueva = 18 - edad
    console.log(`El ciudadano no puede ejercer el derecho al voto 
        porque es menor de edad, le hace falta ${edad_nueva} de años`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad_Adulto = 15
let edad_final = edad_Adulto > 18 ? "El ciudadano es mayor de edad" : "El ciudadano es menor de edad"
console.log(edad_final)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "diciembre"
if (mes=="enero" || mes=="febrero"||mes =="marzo" ) {
    console.log("Estamos en verano")
} else if (mes=="abril" || mes=="mayo"||mes =="junio" ) {
    console.log("Estamos en otoño")
}else if (mes=="julio" || mes=="agosto"||mes =="septiembre" ) {
    console.log("Estamos en primavera")
}else{
    console.log("Estamos en invierno")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes=="enero" || mes=="febrero"||mes =="marzo" ) {
    console.log("Estamos en verano y tiene 31 dias")
} else if (mes=="abril" || mes=="mayo"||mes =="junio" ) {
    console.log("Estamos en otoño y tiene 30 dias")
}else if (mes=="julio" || mes=="agosto"||mes =="septiembre" ) {
    console.log("Estamos en primavera y tiene 29 dias")
}else{
    console.log("Estamos en invierno y tiene 31 dias")
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "checo"
switch (idioma) {
    case idioma="español":
        console.log("Buenos dias camarada")
        break;
        case idioma="ingles":
            console.log("good mornig babys")
            break;
            case idioma="portugues":
                console.log("Bom dia camaradas")
                break;
                case idioma="español":
                    console.log("Bonjour camaradess  ")
                    break;
                    case idioma="checo":
                        console.log("Dobré ráno soudruzi")
                        break;
                                        
    default:
        console.log("No se encuentra el idioma")
        break;
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes2 = "enero"
let estacion 
switch (mes2) {
    case "enero"||"febrero"||"marzo" :
       estacion = "Estamos en verano"
        break;
        case "abril" || "mayo"||"junio" :
            estacion ="Estamos en otoño"
            break;

        case "julio" || "agosto"||"septiembre":
        estacion ="Estamos en primavera"
        break;

        case "octumbre" || "noviembre"||"diciembre":
            estacion = "Estamos en invierno"
            break;
        
    default:estacion ="El mes no se encuentra, vuelve a intentarlo"
        break;
}
console.log(estacion)
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes2) {
    case "enero"||"febrero"||"marzo" :
       estacion = "Estamos en verano y tiene 31 dias"
        break;
        case "abril" || "mayo"||"junio" :
            estacion ="Estamos en otoño y tiene 30 dias"
            break;

            case "julio" || "agosto"||"septiembre":
            estacion ="Estamos en primavera y tiene 29"
                break;

                 case "octumbre" || "noviembre"||"diciembre":
                 estacion = "Estamos en invierno y tiene 31 dias"
                     break;
        
    default:estacion ="El mes no se encuentra, vuelve a intentarlo"
        break;
}

console .log(estacion)