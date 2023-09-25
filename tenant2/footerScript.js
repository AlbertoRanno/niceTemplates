//Footer versión compacta
var footerDefault = document.querySelector(".elm-footer");
if (footerDefault) {   
    var footerPropio = document.createElement("footer");
    footerPropio.className = "footer"; 
    var container = document.createElement("div");
    container.className = "container"; 
    var row = document.createElement("div");
    row.className = "row"; 
    var colLeft = document.createElement("div");
    colLeft.className = "colLeft"; 
    var logo = document.createElement("img");
    logo.src = "@api/deki/files/118/LogoOsde.png";
    logo.alt = "logo OSDE";
    var copyright = document.createElement("p");
    copyright.innerHTML = 'Copyright 2023 OSDE';
    colLeft.appendChild(logo);
    colLeft.appendChild(copyright);
    var colRight = document.createElement("div");
    colRight.className = "colRight"; 
    var ul = document.createElement("ul");
    ul.className = "footer-links"; 
    var link1 = document.createElement("li");
    var link1Anchor = document.createElement("a");
    link1Anchor.href = "https://osde-prod1.mindtouch.us/tutoriales"; 
    link1Anchor.textContent = "Tutoriales"; 
    link1.appendChild(link1Anchor);
    var link2 = document.createElement("li");
    var link2Anchor = document.createElement("a");
    link2Anchor.href = "#";
    link2Anchor.textContent = "Mas consejos para el buscador"; 
    link2.appendChild(link2Anchor);
    ul.appendChild(link1);
    ul.appendChild(link2);
    colRight.appendChild(ul);
    row.appendChild(colLeft);
    row.appendChild(colRight);
    container.appendChild(row);
    footerPropio.appendChild(container);
    footerDefault.parentNode.replaceChild(footerPropio, footerDefault);
}


//Footer con estructura típica de 2 columnas, y con las clases listas para que ajuste Rodo
var footerDefault = document.querySelector(".elm-footer");
if (footerDefault) {
    // Creo el footer propio
    var footerPropio = document.createElement("footer");
    footerPropio.className = "footer"; 

    // Creo el contenedor principal
    var container = document.createElement("div");
    container.className = "container"; 

    // Creo la fila para alinear los elementos
    var row = document.createElement("div");
    row.className = "row"; 

    // Creo la columna izquierda para el logo, y el copyright
    var colLeft = document.createElement("div");
    colLeft.className = "colLeft"; 

    // Añado el logo de OSDE
    var logo = document.createElement("img");
    logo.src = "@api/deki/files/118/LogoOsde.png";
    logo.alt = "logo OSDE";

    // Añado el copyright
    var copyright = document.createElement("p");
    copyright.innerHTML = 'Copyright 2023 OSDE';

    // Agrego el logo y el copyright a la columna izquierda
    colLeft.appendChild(logo);
    colLeft.appendChild(copyright);

    // Creo la columna derecha para los enlaces
    var colRight = document.createElement("div");
    colRight.className = "colRight"; 

    // Creo la lista de enlaces
    var ul = document.createElement("ul");
    ul.className = "footer-links"; 

    // Creo el enlace 1
    var link1 = document.createElement("li");
    var link1Anchor = document.createElement("a");
    link1Anchor.href = "https://osde-prod1.mindtouch.us/tutoriales"; 
    link1Anchor.textContent = "Tutoriales"; 
    link1.appendChild(link1Anchor);

    // Creo el enlace 2
    var link2 = document.createElement("li");
    var link2Anchor = document.createElement("a");
    link2Anchor.href = "#";
    link2Anchor.textContent = "Mas consejos para el buscador"; 
    link2.appendChild(link2Anchor);

    // Agrego los enlaces a la lista
    ul.appendChild(link1);
    ul.appendChild(link2);

    // Agrego la lista a la columna derecha
    colRight.appendChild(ul);

    // Agrego las columnas a la fila
    row.appendChild(colLeft);
    row.appendChild(colRight);

    // Agrego la fila al contenedor
    container.appendChild(row);

    // Agrego el contenedor al footer propio
    footerPropio.appendChild(container);

    // Reemplazo el footer default por el propio
    footerDefault.parentNode.replaceChild(footerPropio, footerDefault);
}

