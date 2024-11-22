/* eslint-disable */
//import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let tituloRef = document.querySelector(".mt-5");
tituloRef.innerHTML =
  "Necesitas escapar a tus responsabilidades?<br>No te preocupes, aca encontrarás la excusa perfecta!";
let quePaso = [
  "estuve efermo,",
  "me tuve que mudar,",
  "se cortó la luz,",
  "un tornado destrozó mi casa,",
  "tuve que llevar a mi gato al veterinario de urgencia,",
  "mi abuela falleció,",
  "la grúa se llevó mi auto,"
];
let cuandoPaso = [
  "ayer,",
  "antes de ayer,",
  "hoy,",
  "la semana pasada,",
  "el Miercoles,",
  "el Viernes,",
  "hace 3 dias,"
];
let pidiendoDisculpas = [
  "lo siento mucho, me pondré en ello ahora mismo.",
  "pido mil disculpas, me ocuparé de inmediato.",
  "pero lo resolveré cuanto antes, solo necesito un momento para terminarlo.",
  "pero hoy mismo lo tendré hecho al acabar el dia.",
  "solo necesito unas horas más para finalizar, yo le avisaré.",
  "realmente no pude ocuparme, perdón."
];
let quePasoAleatorio = Math.floor(Math.random() * quePaso.length);
let cuandoPasoAleatorio = Math.floor(Math.random() * cuandoPaso.length);
let pidiendoDisculpasAleatorio = Math.floor(
  Math.random() * pidiendoDisculpas.length
);
let mensajeRef = document.getElementById("excusaCompleta");
let mensaje =
  "Imposible!" +
  " " +
  cuandoPaso[cuandoPasoAleatorio] +
  " " +
  quePaso[quePasoAleatorio] +
  " " +
  "estoy consternado," +
  " " +
  pidiendoDisculpas[pidiendoDisculpasAleatorio];

window.onload = function() {
  //write your code here
  mensajeRef.innerHTML = mensaje;
  console.log("Aca", document.getElementById("excusaCompleta"));

  console.log("Hello Rigo !");
};

//////ACA INTENTE QUE EL BOTON REFRESCARA LA WEB Y DE ESA FORMA SE GENERARAN LAS EXCUSAS
//let botonGenerador = getElementById("elBoton")
//botonGenerador.addEventListener('click', function(){
//location.reload();
//}
/////ACA INTENTE QUE EL BOTON SOLO REFRESCARA LA EXCUSA Y ASI GENERAR NUEVAS, SIN NECESIDAD DE CARGAR NUEVAMENTE TODA LA PAGINA COMPLETA
//let botonGenerador = getElementById("elBoton");
//botonGenerador.addEventListener('click', function(){
//let mensajeRef = document.getElementById("excusaCompleta");
//mensajeRef.innerHTML = mensaje;
//
