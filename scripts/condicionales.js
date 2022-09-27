console.log("sesion js 03 condicionales!");

//+++++++++++Declaracion de bloque++++++++++++++++++
let nombre="Rafa";
//var ciudad = "Guadalajara"; var es incorrecto, asi crea un conflicto con el var dentro del bloque, en cambio con let no pasa eso
let ciudad ="Guadalajara";
{
    let nombre="Fer";
    let ciudad="CDMX";
    let apellido = "palapa";
    console.log(`Mi nombre es ${nombre} ${apellido}, vivo en ${ciudad}`);
}
console.log(`Participante: ${nombre}, que vive en ${ciudad}`); //da error pues esta fuera del alcance

//+++++++++++++++++++++Condicional if++++++++++++++++++++++++++++++

/**
 *  Sintaxis:
 *  if (condicion = verdadera){instrucciones;}
 *  if (condicion = verdadera) Instruccion; para cuando es solo una instruccion
 * 
 */

let edad = 23;
console.log("****Declaracción antes del if---->");

if(edad > 24)console.log("la edad es mayor a 24");
else{ //llaves necesarias solo si es mas de una instruccion
    console.log("la edad es menor a 25");
    console.log("seguiremos evaluando");
}

console.log(("<--------Declaracion despues del if****"));


//++++++++++++++++++++++ Operador Ternario ++++++++++++++++++++++++

//*se esta usando la misma variable edad de arriba

/**
 *  sintaxis:   condicion ? condicion_verdadera : condicion_falsa;
 */
console.log(`la edad es ${edad>24 ? "mayor":"menor"} a 25`);

console.log(`La edad es ${edad===25 ? "es igual": (edad>24 ? "mayor":"menor")} a 25`);

//otra forma con mas cosas
console.log(`la edad es ${edad>24 ? "mayor":"menor"} a 25`);
let comparacion = edad ===25? "es igual": edad > 24 ? "mayor":"menor"; 

//+++++++++++++++++++++++++condicional if, if else, else+++++++++++++++++++

/**
 * sintaxis:
 * 
 * if(CondiionVerdadera){
 *  Instrucciones;
 * }
 * else if(OtraCondicion){
 * }
 * else if(OtraCondicion){
 * }
 * else {
 *  instrucciones:
 * }
 */


console.log("--------------Uso de IF, if else, else");
edad = 16;

if (edad === 25 ){
    console.log("la edad si es 25!");
}
else if(edad > 25){
    console.log("la persona es mayor de 25");
}
else if(edad>15 && edad<17){
    console.log("la persona ya casi es mayor de edad, pero le falta para los 25");
}
else {
    console.log("la persona es menor de 25");
}

//otra forma
 if (edad ===25) comparacion = "igual";
else if (edad >24) comparacion = "mayor";
else comparacion = "menor";

//console.log(comparacion)
console.log(`(claru) la edad es ${ comparacion } a 25`);

//esta linea sola (despues de haber definido la variable edad) podria hacer lo que hizo la instruccion de arriba, las 4 lineas.
console.log(`la edad es ${ edad === 25 ? "es igual": edad > 24 ? "mayor": "menor"} a 25`);

//++++++++++++++++++++++++++ Condicional Switch ++++++++++++++++++++++++++++

/**
 * Sintaxis: 
 *  switch(expresion){
 *    case valor1:
 *         instrucciones;
 *         break;
 *    case valor2:
 *         instrucciones;
 *         break;
 *    case valor3:
 *         instrucciones;
 *         break;
 *    default:
 *         instrucciones;
 * 
 * }
 */

edad = 24;
comparacion="";

switch(edad){
    case 25:
        comparacion = "es igual";
        break;
    case 24:
        comparacion = "es menor";
        break;
    case 26:
        comparacion = "es mayor";
        break;
    default:
        comparacion="*No se puede saber*";

}

console.log(`(switch) la edad es ${comparacion} a 25`);

//otra forma de switch mas simple con math sign
let valor = Math.sign(25 - edad);

switch (valor) {
    case -1:
        comparacion = "mayor";
        break;
 
    case 1:
        comparacion = "menor";
        break;
    case 0:
        comparacion = "igual";
        break;
}

console.log(`La edad es ${comparacion} a 25.`);

//un ejemplo random de como usar switch
/*let numeroMes = 10;
let estacion = "", mes = "";

switch (numeroMes) {
  case 12:
    mes = "Diciembre";
  case 1:
    mes = "Enero";
  case 2:
    mes = "Febrero";
    estacion = "Invierno";
    break;
  case 3:
    mes = "Marzo";
  case 4:
    mes = "Abril";
  case 5:
    mes = "Mayo";
    estacion = "Primavera";
    break;
  case 6:
    mes = "Junio";
  case 7:
    mes = "Julio";
  case 8:
    mes = "Agosto";
    estacion = "Verano";
    break;
  case 9:
    mes = "Septiembre";
  case 10:
    mes = "Octubre";
  case 11:
    mes = "Noviembre";
    estacion = "Otoño";
    break;
}

console.log("El mes de " + mes + " se encuentra en la estación " + estacion);
*/

let numeroMes = 12;
let estacion = "", mes = "";

switch (numeroMes) {
  case 12:
    mes = "Diciembre";
    estacion="Invierno";
    break;
  case 1:
    mes = "Enero";
    estacion="invierno";
    break;
  case 2:
    mes = "Febrero";
    estacion = "Invierno";
    break;
  case 3:
    mes = "Marzo";
    estacion="primavera";
    break;
  case 4:
    mes = "Abril";
    estacion="primavera"
    break;
  case 5:
    mes = "Mayo";
    estacion = "Primavera";
    break;
  case 6:
    mes = "Junio";
    estacion="primavera";
    break;
  case 7:
    mes = "Julio";
    estacion="verano";
    break;
  case 8:
    mes = "Agosto";
    estacion = "Verano";
    break;
  case 9:
    mes = "Septiembre";
    estacion="otoño";
    break;
  case 10:
    mes = "Octubre";
    estacion = "otoño";
    break;
  case 11:
    mes = "Noviembre";
    estacion = "Otoño";
    break;
}

console.log("El mes de " + mes + " se encuentra en la estación " + estacion);

//----  lo de arriba pero con if if else
if(numeroMes > 0 && numeroMes <3 || numeroMes === 12){
    console.log("El mes se encuentra en la estacion de invierno!");
} 
else if (numeroMes >2 && numeroMes<7){
    console.log("El mes se encuentra en la estación de primavera");
}
else if(numeroMes > 6 && numeroMes < 9){
    console.log("El mes se encuentra en verano!");
}
else if(numeroMes > 8 && numeroMes < 12){
    console.log("El mes se encuentra en otoño!");
}

/*  Otra forma de hacer lo de arriba

if (numeroMes === 12 || numeroMes === 1 || numeroMes === 2) {
    estacion = "Invierno";
    if (numeroMes === 12) mes = "Diciembre";
    else if (numeroMes === 1) mes = "Enero";
    else mes = "Febrero";
  }
  else if (numeroMes >= 3 && numeroMes <= 5) {
    estacion = "Primavera";
    if (numeroMes === 3) mes = "Marzo";
    else if (numeroMes === 4) mes = "Abril";
    else mes = "Mayo";
  }
  else if (numeroMes >= 6 && numeroMes <= 8) {
    estacion = "Verano";
    if (numeroMes === 6) mes = "Junio";
    else if (numeroMes === 7) mes = "Julio";
    else mes = "Agosto";
  }
  else if (numeroMes >= 9 && numeroMes <= 11) {
    estacion = "Otoño";
    if (numeroMes === 9) mes = "Septiembre";
    else if (numeroMes === 10) mes = "Octubre";
    else mes = "Noviembre";
  }
  else {
    estacion = "No se encontro";
    mes = "No se encontro";
  }   */

  let online = true;
  let active = true;

  online && active && console.log("james"); //esto es solo para repasar lo de los operadores, en este caso se imprime james porque online es true, active tambien, luego pasan a compararse con el log de james que igual es true, entonces se arroja james