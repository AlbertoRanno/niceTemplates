/* *índice a priori abierto…*
Por lo que entiendo, Nice guarda en una variable booleana el estado del índice, que es aquel que elige el usuario por medio de la interacción, osea, si lo colapsa,
 o lo expande en algún artículo, así lo verá la prox vez que abra este artículo, u otro. 
No pude pisar por completo el funcionamiento de esta variable, que cruza todo el sitio, lo que más me acerqué es al siguiente funcionamiento:
-cuando el índice está expandido, y se actualiza el navegador, o se abre otro articulo dentro de Nice, el índice vuelve a aparecer expandido, se muestra el icono "-",
 y con un solo click, se colapsa. Esta parte está bien, y es la óptima. El tema es la siguiente:
-cuando el índice está colapsado, y se actualiza el navegador, o se abre otro artículo dentro de Nice, el índice aparece expandido, lo cual está bien, es lo deseado.
 El único detalle que por más vueltas que le dí, no pude corregir, es que, se muestra el "+", y al primer click, cambia este icono a "-", y recién al siguiente click, 
 lo colapsa. Entiendo hace esto, y después funciona bien, dado que se alinea con el valor de la variable que maneja Nice.
 
 Para lograr este funcionamiento, agregar al evento de carga de pagina el siguiente script
 (Lo eliminimé a pedido de Celina)
 */

//********************************** TOC ********************************************
let toc = document.getElementById('mt-toc-container');
let colapsada = toc.getAttribute('data-collapsed') === 'true';
if (colapsada) {
    let tocContenido = toc.querySelector('.mt-toc-content');
    toc.setAttribute('data-collapsed', colapsada ? 'false' : 'true');
    tocContenido.style.maxHeight = colapsada ? tocContenido.scrollHeight + 'px' : '0px';
    //colapsada = !colapsada;
}