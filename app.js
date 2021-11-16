/* ------Objeto, Propiedad y Metodo ------ */
class Monedas {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  formula1(pesosA) {
    let resultadoA = pesosA / dolarHoy.precio;
    alert(
      `la conversion Pesos a ${dolarHoy.nombre} es:  ${resultadoA.toFixed(
        2
      )} Dolares`
    );
    return;
  }
  formula2(pesosB) {
    let resultadoB = pesosB / euroHoy.precio;
    alert(`la conversion Pesos a Euros es:  ${resultadoB.toFixed(2)} Euros`);
    return;
  }
  formula3(euro) {
    let resultadoC = euro * pesosC.precio;
    alert(
      `la conversion Euros a Pesos es:  ${resultadoC.toFixed(2)} Pesos-Ars`
    );
    return;
  }
  formula4(dolar) {
    let resultadoD = dolar * pesosD.precio;
    alert(
      `la conversion Dolar a Pesos es:  ${resultadoD.toFixed(2)} Pesos-Ars`
    );
    return;
  }
}
/* ------Objeto, Propiedad  ------ */
class Usuario {
  constructor(nombre, edad, monedaDeCambio) {
    this.nombre = nombre;
    this.edad = edad;
    this.monedaDeCambio = monedaDeCambio;
  }
}

/* ------variables de mis objetos ------ */
const dolarHoy = new Monedas("Dolar", 206);
const euroHoy = new Monedas("Euro", 232);
const pesosD = new Monedas("Pesos-Ars", 206);
const pesosC = new Monedas("Pesos-Ars", 232);

/* ------Array------ */

const arrayPersona = [];

/* ------nuestro ciclo  ------ */

while (opcionUsuario != "s") {
  
  /*creo una const fuera de las opciones del usuario para realizar una validacion de edad y un if else no guarda info del ese usuario*/

  const usuario = new Usuario();

  /*------------------------------------------------------*/

  var opcionUsuario = prompt(`ingrese las Divisas que desea convertir: 
 A)- Pesos a Dolar?
 B)- Pesos a Euros?
 C)- Euros a Pesos?
 D)- Dolar a Pesos?
 S)- para salir`).toLowerCase();

  var nombreUsuario = prompt("Por Favor Ingrese Nombre:");
  usuario.nombre = nombreUsuario;
  var edadUsuario = parseInt(prompt("Por Favor Ingrese Edad:"));

  /* ------validacion de usuario ------ */

  if (edadUsuario >= 18) {
    usuario.edad = edadUsuario;
    switch (opcionUsuario) {
      case "a":
        alert("Ha Elegido A)- Pesos a Dolar... Gracias!");
        let pesosA = parseFloat(
          prompt(
            'Por favor ingrese el monto en "PesosArs" que desea convertir en dolares. "Gracias" '
          )
        );
        dolarHoy.formula1(pesosA);
        usuario.monedaDeCambio = "Coversión pesos-Ars a Dolar";
        break;
      case "b":
        alert("Ha Elegido B)- Pesos-Ars a Euros... Gracias!");
        let pesosB = parseFloat(
          prompt(
            'Por favor ingrese el monto (en Pesos-Ars) que desea convertir en Euros. "Gracias" '
          )
        );
        euroHoy.formula2(pesosB);
        usuario.monedaDeDambio = "Coversión Pesos-Ars a Euros";
      case "c":
        alert("Ha Elegido C)- Euros a Pesos-Ars... Gracias!");
        let euro = parseFloat(
          prompt(
            'Por favor ingrese el monto (en Euros) que desea convertir en "Pesos-Ars". "Gracias" '
          )
        );
        pesosC.formula3(euro);
        usuario.monedaDeDambio = "Coversión Euros a Pesos-Ars";
        break;
      case "d":
        alert("Ha Elegido D)- Dolar a Pesos ... Gracias!");
        let dolar = parseFloat(
          prompt(
            'Por favor ingrese el monto en "Dolares" que desea convertir en "Pesos-Ars". "Gracias" '
          )
        );
        pesosD.formula4(dolar);
        usuario.monedaDeDambio = "Coversión Dolar a Pesos-Ars";
        break;
      case "s":
        alert("usded ha no querido realizar una operacion cambiaria");
        usuario.monedaDeDambio = " No Realizo Coversión Alguna";
        break;
      default:
    }
  } else { 
    alert('lo sentimos no tiene la edad minima para entrar en el sistema')
   
   break
  }
 /*---sube la informacion conseguida del usuario a mi Array ---*/
  arrayPersona.push(usuario);

   /*----Imprime la informacion conseguida del usuario ----*/
  console.log(arrayPersona);
 
 
  
}
