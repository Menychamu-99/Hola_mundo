"use strict";//modo estricto para programar con buenas practicas

//imprime la pantalla
console.log(
  "Hola Mundo desde Node.js, esto se vera en la terminal de comandos"
);

//hacemos una operacion básica
console.log(2 * 5);

//al utilizar una instruccion de js frontend marca error en node js
console.log(window);

//imprime en consola todo lo relacionado con el modulo GLOBAL
console.log(global);

//realizamos una función para imprimir cada segundo 'hola nodejs'
setInterval(function () {
    console.log('hola nodejs')
},1000)
