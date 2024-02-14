    // Función para revertir el efecto de la clase "emptyRegions" mediante la aplicacion de otro span con la clase "nonEmptyRegion"
    function revertirEmptyRegions() {
        // Selecciono todos los spans con la clase "nonEmptyRegion" dentro de spans con la clase "emptyRegions"
        var spansNonEmptyRegion = document.querySelectorAll('.emptyRegions .nonEmptyRegion');

        // Itero sobre cada spanNonEmptyRegion encontrado
        spansNonEmptyRegion.forEach(function (spanNonEmptyRegion) {
            // Obtengo el elemento padre del spanNonEmptyRegion (que es el span con la clase "emptyRegions")
            var spanEmptyRegions = spanNonEmptyRegion.parentNode;

            // Reemplazo el span con la clase "emptyRegions" con su contenido (el span con la clase "spanNonEmptyRegion"). 
            // De esta manera, se elimina el span "emptyRegions" y se conserva el contenido del span "spanNonEmptyRegion".
            spanEmptyRegions.parentNode.replaceChild(spanNonEmptyRegion, spanEmptyRegions);
        });
    }

    // Ver de llamar a la función cuando el DOM esté completamente cargado
    revertirEmptyRegions();

    /*
    function revertirEmptyRegions() {
        var spansNonEmptyRegion = document.querySelectorAll('.emptyRegions .nonEmptyRegion');
        spansNonEmptyRegion.forEach(function (spanNonEmptyRegion) {
            var spanEmptyRegions = spanNonEmptyRegion.parentNode;
            spanEmptyRegions.parentNode.replaceChild(spanNonEmptyRegion, spanEmptyRegions);
        });
    }

    revertirEmptyRegions();
    
    
    CSS
    
    .nonEmptyRegion {

    display: inline-block;
    padding: 12px 16px;
    background: var(--white);
    color: var(--primary-blue);
    cursor: pointer;
    pointer-events: all;
    box-shadow: none !important;
    }
    */

    function revertirHasContent() {
        //Capturo los botones que tienen un span con clase 'hasNotContent', que a su vez tiene otro span con clase 'hasContent'
        var botonesConHasContent = document.querySelectorAll('button .hasNotContent .hasContent');
    
        botonesConHasContent.forEach(function (spanHasContent) {
            // guardo el contenido interno del span con clase hasContent, que sería el nombre de la filial
            var nombreFilial = spanHasContent.textContent;
    
            // Creo un nuevo nodo de texto con el contenido obtenido
            var nuevoNodoTexto = document.createTextNode(nombreFilial);
    
            // Reemplazo el spanHasContent con el nuevo nodo de texto
            spanHasContent.parentNode.replaceChild(nuevoNodoTexto, spanHasContent.parentNode.firstChild);
        });
    }
    
    revertirHasContent();

    /*
    function revertirHasContent() {
        var botonesConHasContent = document.querySelectorAll('button .hasNotContent .hasContent'); 
        botonesConHasContent.forEach(function (spanHasContent) {
            var nombreFilial = spanHasContent.textContent;
            var nuevoNodoTexto = document.createTextNode(nombreFilial);
            spanHasContent.parentNode.replaceChild(nuevoNodoTexto, spanHasContent.parentNode.firstChild);
        });
    }
    revertirHasContent();
    
    SUmar al css:
   .hasNotContent {
        color: var(--medium-gray) !important;
    }

    Para cuando aplican, revierten, y vuelven a aplicar:
    .hasContent .hasNotContent {
        color: var(--primary-black) !important;
    }
    */