/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
let amarillo = "mi color es amarillo"
try {
    console.log(verde)
} catch (error) {
    console.log("Disculpas ocurrio un error " + error)
}
// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(amarillos)
} catch (error) {
    console.log("Disculpas ocurrio un error " + error) 
}finally{
    console.log("No se ha podido definir un color")
}
// 3. Lanza una excepción genérica
let email = ''
function correo(email) {
    if (email.includes("@") != 1 ) {
        throw new Error("El correo esta mal ya que no incluye un @ por favor corregir");
        
    } else {
        console.log("El email es correcto")
    }
}

try {
    correo("juane@mail.com")
} catch (error) {
    console.log(error)
}
// 4. Crea una excepción personalizada
class Manejo_Errores extends Error{
    constructor(c){
        super(`"${c}" no es un correo  válido.`);
        this.name = "NumberError";
        
    }

}

function revision_Correo(c) {
    
    if(c.includes("@") != 1 ){
        throw new Manejo_Errores(c)
    }
    if(c.length < 8){
        throw new Manejo_Errores("El correo esta muy corto ")
       
    }
    if (c.includes(".com") != 1) {
        throw new Manejo_Errores("El correo debe llevar el .com ")
    }
}


// 5. Lanza una excepción personalizada
try {
    revision_Correo("j@vcbvbcvbco.com")
    console.log("todo salio bien")
} catch (error) {
    console.log(error.name + ":" , error.message)
}

// 6. Lanza varias excepciones según una lógica definida
try {
   // revision_Correo("j@v.com")
   // revision_Correo("j@vcbvbcvbco")
    //revision_Correo("jvcbvbcvbco.com")
    //revision_Correo("j@vcbvbcvbco.com")
    console.log("todo salio bien")
} catch (error) {
    console.log(error.name + ":" , error.message)
}
// 7. Captura varias excepciones en un mismo try-catch
try {
    revision_Correo("jv@vcfbcvb.com")
    revision_Correo("j@vvcfbcvb")
} catch (error) {
    if (error instanceof Error){
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["3.14", "abc", "42", "NaN", "", "7e4", null, undefined];

for (const valor of valores) {
  try {
    const numero = parseFloat(valor);
    if (isNaN(numero)) {
      throw new Error(`No se puede convertir '${valor}' a float`);
    }
    console.log(`Convertido: ${valor} → ${numero}`);
  } catch (error) {
    console.error(`Error al convertir '${valor}': ${error.message}`);
  }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function propiedas(perro,propiedad) {
    if ( typeof perro !='object' ) {
        throw new Error (`El primer parametro de la funcion tiene que ser un objecto valido`)
    }
    if (!(propiedad in perro)) {
        throw new Error (`Propiedad '${propiedad}' no encontrada en el objeto.` )
    }
}
const perro = {
    nombre : "matias",
    pelo : "liso",
    color : "cafe",
    raza : "labrador",
    edad : 9 
}

try {
    propiedas(perro,'velocidad')
    propiedas(lola,'velocidad')
} catch (error) {
    console.error("exepcion capturada: ", error.message)
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10 
  async function operacion(func, maxIntentos = 10) {
    let intentos = 0
    while (intentos < maxIntentos) {
      try {
        return await func()
      } catch (error) {
        intentos++
        console.log(`Error en el intento ${intentos}. Reintentando...`)
        if (intentos >= maxIntentos) {
          throw error
        }
      }
    }
  }
  
  // Ejemplo de uso
  async function buscarNumero() {
    // Simula una función que puede fallar
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
      }
    const aleatorio = getRandomInt(15)
    console.log(aleatorio)
    if (aleatorio != 5 ) {
       throw new Error("no se encontro el numero")
    } else {
      return "Éxito"
    }
  }
  
  operacion(buscarNumero)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.error(error))
  