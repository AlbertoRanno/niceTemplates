const contenidoOriginal = document.querySelector('article#elm-main-content').innerHTML;
const contenido = document.querySelector('article#elm-main-content');
const searchInput = document.getElementById('mt-site-search-input');

searchInput.addEventListener('input', function () {
    let searchText = this.value.trim();
    if (searchText !== "") {
        highlightText(searchText, contenido);
    } else {
        contenido.innerHTML = contenidoOriginal;
    }
});

function highlightText(searchText, contenido) {
    const regex = new RegExp(escapeRegExp(searchText), 'gi');
    contenido.innerHTML = contenidoOriginal.replace(regex, match => {
        return `<span style="background-color: yellow">${match}</span>`;
    });
}

function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
