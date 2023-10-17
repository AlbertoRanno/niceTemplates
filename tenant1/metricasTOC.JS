//******************PARA METRICAS TOC******************************** 
var elementNav = document.querySelector(".mt-toc-content");
var contenido;
elementNav.addEventListener("click", function(e){
if(e.target.tagName === "A" && e.target.parentNode.tagName === "LI"){
contenido = e.target.textContent;
console.log("Click en: " + contenido);}});


/*
Este script dentro del head, fue un requisito pedido por Eduardo: "Vean que se puedAn capturar los eventos de click en los enlaces de la TOC, caso
contrario, no trabajamos en vano". Fue posible, y esto es para ver si se pueden sacar métricas de los enlaces más clickeados en la TOC, mediante otro
script que tiene Eduardo, y conectará a google Analytics

Paso a paso de lo que hace este código:

var elementNav = document.querySelector(".mt-toc-content");:
Esta línea busca un elemento HTML que tenga la clase CSS "mt-toc-content" y lo asigna a la variable elementNav. 
En tu caso, este elemento es el nav que contiene una lista de enlaces.

var contenido;:
Se declara una variable llamada contenido sin asignarle ningún valor inicial. 
Esta variable se utilizará más adelante para almacenar el texto del enlace en el que se hace clic.

elementNav.addEventListener("click", function(e) {:
Aquí se agrega un evento de click al elemento elementNav. Esto significa que cuando ocurra un clic dentro de ese elemento 
(o en sus elementos secundarios), se ejecutará la función que se pasa como argumento. 
"e" es el objeto del evento que se pasa como argumento a la función.

if (e.target.tagName === "A" && e.target.parentNode.tagName === "LI") {:
Se verifica si el elemento que desencadenó el evento de clic (e.target) es un enlace (<a>) 
y si su elemento padre es un elemento de lista (<li>).
 Esto se hace para asegurarse de que se hizo clic en un enlace dentro de una lista, ya que el evento de clic se activa para todos
los clics dentro de elementNav.

contenido = e.target.textContent;:
Si se cumple la condición anterior, se asigna el contenido de texto del enlace (e.target.textContent) a la variable contenido.
Esto guarda el texto del enlace en contenido.

console.log("Click en: " + contenido);:
Finalmente, se imprime en la consola el mensaje "Click en: " seguido del contenido del enlace (almacenado en contenido). 
Esto muestra en la consola el texto del enlace en el que se hizo clic.

En resumen, este código escucha los clics dentro del elemento con la clase "mt-toc-content", verifica si el clic se realizó 
en un enlace dentro de una lista y, en caso afirmativo, muestra el texto de ese enlace en la consola.
*/