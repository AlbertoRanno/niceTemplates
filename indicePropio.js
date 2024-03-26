    window.addEventListener('load', function () {
        console.log('La pagina se termino de cargar');

        // Capturo al contenedor principal
        const contenedorPrincipal = document.querySelector('.mt-content-container');
        console.log('Contenedor principal capturado:', contenedorPrincipal);

        // Creo el contenedor del indice
        const divTocContenedor = document.createElement('div');
        divTocContenedor.id = 'mt-toc-container';
        divTocContenedor.dataset.title = 'Índice';
        divTocContenedor.dataset.collapsed = 'false';
        divTocContenedor.className = 'mt-toggle-container';
        divTocContenedor.style.border = '2px solid red';
        console.log('Contenedor del indice creado:', divTocContenedor);

        // Creo la lista de contenidos del indice
        const tocLista = document.createElement('ul');
        tocLista.className = 'mt-toc-content mt-collapsible-section';
        tocLista.style.list_style = "none";
        divTocContenedor.appendChild(tocLista);
        console.log('Contenido del indice creado:', tocLista);

        // Capturo todos los encabezados dentro del contenedor principal
        const encabezados = contenedorPrincipal.querySelectorAll('h2, h3, h4');
        console.log('Encabezados encontrados:', encabezados);

        // Variables para seguir el orden jerarquico de los encabezados
        let ultimoNivelEncabezado = 0; //Lo defino en cero, para que cualquier Heading sea mayor
        let padreDeLaLista = tocLista;

        // Recorro todos los encabezados
        encabezados.forEach((encabezado) => {
            // Obtengo el nivel del encabezado
            const nivelEncabezado = parseInt(encabezado.tagName[1]);
            //encabezado.tagName[1] => va a devolver si es H2, H3, H4
            //parseInt => extrae el numero del segundo caracter de esa cadena, que es el que va a representar el nivel del encabezado

            // Creo el elemento de ítem de la lista del índice
            const tocLi = document.createElement('li');
            const tocLink = document.createElement('a');
            tocLink.rel = 'internal';
            tocLink.textContent = encabezado.textContent;
            tocLink.textContent = encabezado.textContent.trim();
            tocLink.href = `#${tocLink.textContent}`;
            tocLi.appendChild(tocLink);

            // Verifico si el nivel del encabezado ha cambiado
            if (nivelEncabezado > ultimoNivelEncabezado) { //La primera vez, compara con 0
                // Creo una nueva lista anidada para los encabezados de un nivel inferior
                const subLista = document.createElement('ul');
                tocLi.appendChild(subLista);
                padreDeLaLista.appendChild(tocLi);
                padreDeLaLista = subLista;
            }
              else if (nivelEncabezado < ultimoNivelEncabezado) {
                 // Retroceder al nivel correcto en la jerarquía de listas
                let diferenciaDeNiveles = ultimoNivelEncabezado - nivelEncabezado;
                while (diferenciaDeNiveles > 0) {
                    padreDeLaLista = padreDeLaLista.parentNode; // Retrocede un nivel (ol -> li)
                    diferenciaDeNiveles--;
                }
                padreDeLaLista.parentNode.appendChild(
                    tocLi); // Agrego el nuevo ítem al mismo nivel que el anterior
                padreDeLaLista = tocLi;
             } 
            // else {
            //     // Mismo nivel que el encabezado anterior, agregar al mismo nivel de lista
            //     padreDeLaLista.parentNode.appendChild(tocLi);
            // }

            // Actualizar el nivel del encabezado anterior
            ultimoNivelEncabezado = nivelEncabezado;
        });

        // Agrego el contenedor del indice al documento
        contenedorPrincipal.insertBefore(divTocContenedor, contenedorPrincipal.firstChild);
        console.log('Contenedor del indice agregado al documento.');
    });