window.addEventListener('load', function () {

    function encodeSpecialCharacters(text) {
        text = text.replace(/\s*\n\s*/g, '\n');
        return text.replace(/á/g, '.C3.A1')
            .replace(/Á/g, '.C3.81')
            .replace(/é/g, '.C3.A9')
            .replace(/É/g, '.C3.89')
            .replace(/í/g, '.C3.AD')
            .replace(/Í/g, '.C3.8D')
            .replace(/ó/g, '.C3.B3')
            .replace(/Ó/g, '.C3.93')
            .replace(/ú/g, '.C3.BA')
            .replace(/Ú/g, '.C3.9A')
            .replace(/ñ/g, '.C3.B1')
            .replace(/Ñ/g, '.C3.91')
            .replace(/¿/g, '.C2.BF')
            .replace(/\//g, '.2F')
            .replace(/\?/g, '.3F')
            .replace(/ /g, '_')
            .replace(/\n/g, '.0A____________')
            .replace(/&nbsp;/g, '_')
            .replace(/,/g, '_')
            .replace(/'/g, '.27')
            .replace(/"/g, '.22');
    }

    function setUniqueIdsToHeaders(headers) {
        headers.forEach((header) => {
            const encodedText = encodeSpecialCharacters(header.textContent.trim());
            if (!header.id) {
                header.id = encodedText;
            }
        });
    }

    const contenedorPrincipal = document.querySelector('.mt-content-container');
    const divTocContenedor = document.createElement('div');
    divTocContenedor.id = 'mt-toc-container';
    divTocContenedor.dataset.title = 'Índice';
    divTocContenedor.dataset.collapsed = 'false';
    divTocContenedor.className = 'mt-toggle-container indiceIntegracion';
    const tocLista = document.createElement('ol');
    tocLista.className = 'mt-toc-content mt-collapsible-section';
    divTocContenedor.appendChild(tocLista);

    const encabezadosH2 = contenedorPrincipal.querySelectorAll('h2');
    const encabezadosH3 = contenedorPrincipal.querySelectorAll('h3');

    setUniqueIdsToHeaders(encabezadosH2);
    setUniqueIdsToHeaders(encabezadosH3);

    if (encabezadosH2.length > 0) {
        encabezadosH2.forEach((encabezadoH2) => {
            const tocLiH2 = document.createElement('li');
            const tocLinkH2 = document.createElement('a');
            tocLinkH2.rel = 'internal';
            tocLinkH2.textContent = encabezadoH2.textContent.trim();
            tocLinkH2.href = `#${encabezadoH2.id}`;
            tocLiH2.appendChild(tocLinkH2);

            const h3InSameContainer = Array.from(encabezadoH2.parentNode.querySelectorAll('h3')).filter(h3 => h3.compareDocumentPosition(encabezadoH2) & Node.DOCUMENT_POSITION_FOLLOWING);
            if (h3InSameContainer.length > 0) {
                const flechaH2 = document.createElement('img');
                flechaH2.classList.add('imgFlechaIndice');
                flechaH2.style.marginLeft = "10px";
                flechaH2.src = '/@api/deki/files/22/downArrowBlue.png.png';
                flechaH2.alt = 'Flecha';
                tocLiH2.appendChild(flechaH2);

                const listaHermanosH2 = document.createElement('ol');
                listaHermanosH2.classList.add('collapsed');
                h3InSameContainer.forEach((encabezadoH3) => {
                    const tocLiH3 = document.createElement('li');
                    const tocLinkH3 = document.createElement('a');
                    tocLinkH3.rel = 'internal';
                    tocLinkH3.textContent = encabezadoH3.textContent.trim();
                    tocLinkH3.href = `#${encabezadoH3.id}`;
                    tocLiH3.appendChild(tocLinkH3);
                    listaHermanosH2.appendChild(tocLiH3);
                });

                tocLiH2.appendChild(listaHermanosH2);
                flechaH2.addEventListener('click', function () {
                    listaHermanosH2.classList.toggle('collapsed');
                    flechaH2.src = listaHermanosH2.classList.contains('collapsed') ? '/@api/deki/files/22/downArrowBlue.png.png' : '/@api/deki/files/101/upArrowBlue.png';
                });
            }

            tocLista.appendChild(tocLiH2);
        });
    } else {
        encabezadosH3.forEach((encabezadoH3) => {
            const tocLiH3 = document.createElement('li');
            const tocLinkH3 = document.createElement('a');
            tocLinkH3.rel = 'internal';
            tocLinkH3.textContent = encabezadoH3.textContent.trim();
            tocLinkH3.href = `#${encabezadoH3.id}`;
            tocLiH3.appendChild(tocLinkH3);
            tocLista.appendChild(tocLiH3);
        });
    }

    contenedorPrincipal.insertBefore(divTocContenedor, contenedorPrincipal.firstChild);
    tocLista.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const enlace = event.target;
            const idEncabezado = enlace.getAttribute('href').substring(1);
            const encabezadoDestino = document.getElementById(idEncabezado);
            if (encabezadoDestino) {
                const posicionElemento = encabezadoDestino.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: posicionElemento,
                    behavior: 'smooth'
                });
            }
        }
    });

    const botonColapso = document.createElement('button');
    botonColapso.className = 'mt-toggle mt-summary-toggle ui-button-icon mt-toggle-collapse';
    botonColapso.type = 'button';
    botonColapso.textContent = 'Índice';
    divTocContenedor.insertBefore(botonColapso, tocLista);

    botonColapso.addEventListener('click', function () {
        divTocContenedor.classList.toggle('collapsed');
        tocLista.classList.toggle('collapsed');
        botonColapso.className = divTocContenedor.classList.contains('collapsed') ? 'mt-toggle mt-summary-toggle ui-button-icon mt-toggle-expand' : 'mt-toggle mt-summary-toggle ui-button-icon mt-toggle-collapse';
    });


});