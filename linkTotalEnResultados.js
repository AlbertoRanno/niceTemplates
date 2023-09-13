//Forma 1 - Paso el summary a título, para que se muestre al pasar el mouse. Y el resto es enlace:

if (window.location.href.startsWith("https://osde-prod1.mindtouch.us/Special:Search")) {
    // capturo los <li> que representan cada resultado:
    var results = document.querySelectorAll("li.result");

    // Itero a través de ellos y modifico los enlaces
    results.forEach(function(result) {
        // Obtengo el enlace existente
        var link = result.querySelector("a.go.result-spacer.mt-tracked-result");

        // Obtengo el resumen de la página
        var summary = result.querySelector(".mt-search-partial-content");

        // Verifico si existen enlace y resumen
        if (link && summary) {
            // Obtengo la URL del enlace original
            var originalUrl = link.getAttribute("href");

            // Creo un nuevo enlace 
            var newLink = document.createElement("a");
            newLink.className = "go result-spacer mt-tracked-result";
            newLink.title = summary.textContent; // Utilizo el resumen como título 
            newLink.href = originalUrl; // Mantengo la URL original

            // Mantengo el contenido
            newLink.textContent = link.textContent;

            // Reemplazo el enlace existente con el nuevo enlace
            link.parentNode.replaceChild(newLink, link);
        }
    });
}

//Forma 2 - Agrego eventos de click
if (window.location.href.startsWith("https://osde-prod1.mindtouch.us/Special:Search")) {
    // capturo los <li> que representan cada resultado:
    var results = document.querySelectorAll("li.result");

    // Itero a través de ellos y agrego eventos de clic a los resúmenes
    results.forEach(function(result) {
        // Obtengo el resumen de la página
        var summary = result.querySelector(".mt-search-partial-content");

        // Verifico si existe el resumen
        if (summary) {
            // Agrego un evento de click al resumen
            summary.addEventListener("click", function() {
                // Obtengo el enlace existente
                var link = result.querySelector("a.go.result-spacer.mt-tracked-result");

                // Verifico si encouentro el enlace
                if (link) {
                    // Redirijo al usuario a la URL del enlace existente
                    window.location.href = link.getAttribute("href");
                }
            });
        }
    });
}


//Forma 3 -  Agrego eventos de click, considerando el botón de "más" (los "..." que completan el resumen)
if (window.location.href.startsWith("https://osde-prod1.mindtouch.us/Special:Search")) {
    // capturo los <li> que representan cada resultado:
    var results = document.querySelectorAll("li.result");

    // Itero a través de ellos y agrego eventos de clic a los resúmenes
    results.forEach(function(result) {
        // Obtengo el resumen de la página
        var summary = result.querySelector(".mt-search-partial-content");

        // Verifico si existe el resumen
        if (summary) {
            // Agrego un evento de clic al resumen
            summary.addEventListener("click", function() {
                // Obtengo el enlace existente
                var link = result.querySelector("a.go.result-spacer.mt-tracked-result");

                // Obtengo el enlace "Más" si existe
                var moreLink = result.querySelector("button.mt-help-more-content");

                // Verifico si se encontró el enlace "Más"
                if (moreLink) {
                    // Redirijo al usuario al enlace "Más" en lugar del enlace original
                    window.location.href = moreLink.getAttribute("data-track-uri");
                } else if (link) {
                    // Redirijo al usuario a la URL del enlace original
                    window.location.href = link.getAttribute("href");
                }
            });
        }
    });
}

//Forma 4 - independientemente de si existe un botón "Más" o no, tomo el resumen de la página y lo paso como título del enlace, 
//(para que se vea al posar el cursor sobre el enlace) y haga que la totalidad del elemento <li> sea un enlace a la URL de esa página. 
if (window.location.href.startsWith("https://osde-prod1.mindtouch.us/Special:Search")) {
    // Capturo los <li> que representan cada resultado:
    var results = document.querySelectorAll("li.result");

    // Itero a través de ellos:
    results.forEach(function(result) {
        // Obtengo el resumen de la página:
        var summary = result.querySelector(".mt-search-partial-content");

        // Obtengo el enlace existente:
        var link = result.querySelector("a.go.result-spacer.mt-tracked-result");

        // Ahora verifico si existe el resumen y el enlace:
        if (summary && link) {
            // Obtengo la URL de la página original:
            var originalUrl = link.getAttribute("href");

            // Modifico el texto del enlace con el resumen:
            link.textContent = summary.textContent;

            // Establezco el título del enlace como el resumen:
            link.title = summary.textContent;

            // Hago que todo el <li> sea un enlace a la URL original:
            result.addEventListener("click", function() {
                window.location.href = originalUrl;
            });
        }
    });
}

//Forma 5 - simil Forma 4, pero con ejecución retrasada, por si los resultados no están aún allí cuando se ejecuta el script:
if (window.location.href.startsWith("https://osde-prod1.mindtouch.us/Special:Search")) {
    //retrazo la ejecución
    setTimeout(function() {
        // Capturo los <li> que representan cada resultado:
        var results = document.querySelectorAll("li.result");

        // Itero a través de ellos:
        results.forEach(function(result) {
            // Obtengo el resumen de la página:
            var summary = result.querySelector(".mt-search-partial-content");

            // Obtengo el enlace existente:
            var link = result.querySelector("a.go.result-spacer.mt-tracked-result");

            // Ahora verifico si existe el resumen y el enlace:
            if (summary && link) {
                // Obtengo la URL de la página original:
                var originalUrl = link.getAttribute("href");

                // Modifico el texto del enlace con el resumen:
                link.textContent = summary.textContent;

                // Establezco el título del enlace como el resumen:
                link.title = summary.textContent;

                // Hago que todo el <li> sea un enlace a la URL original:
                result.addEventListener("click", function() {
                    window.location.href = originalUrl;
                });
            }
        });
    }, 2000);
}

//Forma 6 - Definitiva: Retrazo, sino no están los resultados, y asigno evento de click a cada resultado (LI), haciendo que todo el LI, sea link.
//Excluyo al botón de ampliación de resumen

if (window.location.href.startsWith("https://osde-prod1.mindtouch.us/Special:Search")) {
    setTimeout(function() {
        var results = document.querySelectorAll("li.result");
        results.forEach(function(result) {
            var link = result.querySelector("a.go.result-spacer.mt-tracked-result");
            var moreButton = result.querySelector("button.mt-help-more-content");

            if (link) {
                var originalUrl = link.getAttribute("href");
                result.addEventListener("click", function(event) {
                    if (!moreButton || event.target !== moreButton) {
                        // Redirige solo si no se hizo clic en el botón "Más"
                        window.location.href = originalUrl;
                    }
                });
            }
        });
    }, 2000);
}




// CSS para chequear que se está capturando correctamente:

/* <li> que representan resultados 
li.result {
    border: 2px solid red; 
    margin: 10px; 
}

/* enlaces dentro de los elementos <li> 
li.result a.go.result-spacer.mt-tracked-result {
    border: 2px solid blue; 
    padding: 5px; 
}

/*  resumen de la página 
.mt-search-partial-content {
    border: 2px solid green;
    margin: 35px; 
    padding: 5px; 
}
*/