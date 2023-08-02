const contenidoOriginal = document.querySelector('article#elm-main-content').innerHTML;
const contenido = document.querySelector('article#elm-main-content');
const searchInput = document.getElementById('mt-site-search-input');
let searchText = "";

searchInput.addEventListener('input', function () {
    searchText = this.value.trim();
    if (searchText !== "") {
        searchText = escapeHTML(searchText);
        highlightText(searchText);
    } else {
        contenido.innerHTML = contenidoOriginal;
    }
});

function highlightText(searchText) {
    const regex = new RegExp(escapeRegExp(searchText), 'gi');
    contenido.innerHTML = contenidoOriginal.replace(regex, match => {
        return `<span style="background-color: yellow">${match}</span>`;
    });
}

function escapeHTML(text) {
    return text.replace(/[<>&]/g, match => {
        return {'<': '&lt;', '>': '&gt;', '&': '&amp;'}[match];
    });
}

function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


/*
 La idea general de este código es proporcionar una funcionalidad de resaltado de texto en tiempo real mientras el usuario escribe en un campo de búsqueda.
 Cuando el usuario ingresa texto en el campo de búsqueda, el contenido de la página se actualiza dinámicamente mostrando el texto resaltado en amarillo 
 en todas las ocurrencias del texto buscado.

Paso a paso de la ejecución del código:

Se obtiene el contenido original del elemento con ID "elm-main-content" y se almacena en la variable contenidoOriginal.
Se obtiene el elemento con ID "elm-main-content" y se almacena en la variable contenido.
Se obtiene el campo de búsqueda por su ID "mt-site-search-input" y se almacena en la variable searchInput.
Se inicializa la variable searchText con una cadena vacía.
Se agrega un evento de escucha "input" al campo de búsqueda (searchInput). Esto significa que cada vez que el usuario escribe algo en el campo de búsqueda, 
se ejecuta la función de callback asociada.
Dentro del evento "input":
6. Se obtiene el texto ingresado en el campo de búsqueda y se elimina cualquier espacio en blanco al principio o al final. 
El resultado se almacena en la variable searchText.

Se verifica si el searchText no está vacío (es decir, si el usuario ha ingresado algún texto en el campo de búsqueda).
Si hay texto en el campo de búsqueda, se llama a la función escapeHTML(searchText) para escapar cualquier carácter especial en el texto ingresado y
se almacena nuevamente en la variable searchText.
Luego, se llama a la función highlightText(searchText) para realizar el resaltado del texto ingresado.
Si el searchText está vacío (es decir, el usuario ha borrado todo el texto del campo de búsqueda), se restaura el contenido original en el elemento 
contenido mediante contenido.innerHTML = contenidoOriginal.
La función highlightText(searchText):
9. Crea una expresión regular global e insensible para buscar todas las ocurrencias del texto de búsqueda (searchText) en el contenido original.

Realiza el reemplazo de todas las ocurrencias del texto de búsqueda con el mismo texto pero envuelto en un elemento <span> con un estilo de fondo 
amarillo (background-color: yellow). Esto crea el efecto de resaltado en la página.
La función escapeHTML(text):
11. Escapa cualquier carácter especial dentro del texto (text) para que pueda ser utilizado de manera segura en una expresión regular.

La función escapeRegExp(text):
12. Escapa cualquier carácter especial dentro del texto (text) para que pueda ser utilizado de manera segura en una expresión regular.

En resumen, este código permite realizar un resaltado en tiempo real del texto ingresado en un campo de búsqueda en el contenido de la página.
*/