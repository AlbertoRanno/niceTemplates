//Sugerir nuevo contenido
let sugerirContenidoContenedor = document.createElement('div');
sugerirContenidoContenedor.classList.add('sugerirContenidoContenedor');
let sugerirContenidoBoton = document.createElement('div');
sugerirContenidoBoton.classList.add('sugerirContenidoBoton');
sugerirContenidoBoton.id = 'sugerirContenidoBoton';
sugerirContenidoBoton.textContent = "Sugerir nuevo contenido";
let sugerirContenidoImg = document.createElement('img');
sugerirContenidoImg.classList.add('sugerirContenidoImg');
sugerirContenidoImg.alt = "imagen de enviar mail";
sugerirContenidoImg.src = "/@api/deki/files/147/mail.png"
sugerirContenidoBoton.appendChild(sugerirContenidoImg);
sugerirContenidoContenedor.appendChild(sugerirContenidoBoton);
document.body.appendChild(sugerirContenidoContenedor);

function abrirCorreo() {
    var destinatario = "albertoranno@gmail.com";
    var asunto = "Comentarios";
    var cuerpo = "Lo que quisiera comentar es lo siguiente:";
    var mailtoLink = "mailto:" + destinatario + "?subject=" + encodeURIComponent(asunto) + "&amp;body=" + encodeURIComponent(cuerpo);
    window.location.href = mailtoLink;
}
var boton = document.getElementById("sugerirContenidoBoton");
boton.addEventListener("click", function () {
    abrirCorreo();
});

/*
 <div class="sugerirContenidoContenedor">
    <div id="sugerirContenidoBoton" class="sugerirContenidoBoton">
    <img alt="Imagen de enviar mail" src="https://osde-prod1.mindtouch.us/@api/deki/files/147/mail.png?revision=1" class="sugerirContenidoImg"/>
    Sugerir nuevo contenido</div>
 </div>
*/

/*function abrirCorreo() {
     var destinatario = "albertoranno@gmail.com";
     var asunto = "Comentarios";
     var cuerpo = "Lo que quisiera comentar es lo siguiente:";
     var mailtoLink = "mailto:" + destinatario + "?subject=" + encodeURIComponent(asunto) + "&amp;body=" + encodeURIComponent(cuerpo);
     window.location.href = mailtoLink;}         
 var boton = document.getElementById("botonSugerirContenidos"); 
 boton.addEventListener("click", function() {
     abrirCorreo();});
     */