function alternarCollapse(id) {
  const elemento = document.getElementById(id);

  if (elemento) {
    elemento.classList.toggle('active');
  }
}

$(function() {
  $('.EXPAND_COLLAPSE').find('dt').on('click', function() {
      $(this).next().toggle('350');   
   });
});