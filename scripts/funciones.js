console.log("sesion js 03 funciones")

//+++++++++++++++++Funcion declarada++++++++++++++
/**
 * Este es un ejemplo de una funcion declarada 
 * (function declaration, function statement)
 * Una caracteristica de las funciones declaradas es que tiene un hoisting (elevación)
 * 
 * Realiza la multiplicacion de dos numeros
 * @param {Number} a factor o multiplicando 1
 * @param {Number} b multiplicando 2
 * @returns resultado de la multiplicacion de a*b
 */
function multiplica (a,b){
    
    return a*b;
}
//llamado de la funcion declarada
console.log("multiplicacion de 5x6 = "+ multiplica(4,3))

//++++++++++Funcion expresada+++++++++++++++++++++++++
/**
 * Las funciones expresadas (function expressions)
 * son declaradas dentro de la asignacion de una variable.
 * 
 * Estas funciones pueden ser anonimas (no tener nombre).
 * Las funciones expresadas no tienen hoisting 
 * (osea que hay que declararlas antes de usarlas)
 */


/**
 * Sumatoria de dos numeros 
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado a + b
 */

const suma = function (a,b){
    return a+b;
}
console.log("El resultado de 56 + 4 es igual a: "+ suma(56,4));


//+++++++++++++++Funciones autoinvocadas++++++++++++++++++++++++++

/**
 * Las funciones autoinvocadas (Self invoking functions)
 * pueden ser anonimas y se autoejecutan() en su declaracion (function)()
 */

(function (){
    console.log("===============================")
    console.log("Hola crayola");
    console.log("===============================");
})(); //solo con los parentesis se llama la funcion, ya que no tiene nombre al hacerla anonima


//+++++++++++++++++++Funciones flecha+++++++++++++++++++++++++++++++++++++++++++

/**
 * Las funciones flecha funcionan similar a las 
 * funciones declaradas, pero no requieren la
 * palabra function, y si tienen una sola instruccion
 * y es el retorno, no requiere la instruccion "return"
 */

/**
 * Realiza la operacion de 2 numeros
 * @param {Number} a 
 * @param {Number} b 
 * @returns la resta de a-b
 */

const resta = (a,b) => a-b

console.log("la resta de 10-5 es: "+ resta(10,5));


/**
 * Funcion con parametros inicializados
 */

function divide(a,b=2){
    return a/b
}
console.log("La division de a/b es : " + divide(4));


//++++++++++++++++++++Funciones Autoinvocadas++++++++++++++++++++++++++

function factorial(num){
    if(num<=0) return 1;
    return (num* factorial(num-1));
}
console.log("Factorial de 5 = "+ factorial(5));

//++++++++++REst parameters+++++++++++++añadi desde aqui la rama js
//(parameters) => operation;
//(param1, param2) => {
//return data
//};

function sum(a,b, ...resto){
    let suma = a+b;
    resto.forEach(element => {
        //suma = suma + element;
        suma += element;
    });
    return suma;
}

//esta es otra forma de hacerlo
/* function sum(a,b, ...resto){
    let suma =a+b;
    resto.array.forEach(dato => {suma+=dato;});
    return suma;
} */
console.log("el resultado de varios numeros es: "+sum(2,3,5,7,3));