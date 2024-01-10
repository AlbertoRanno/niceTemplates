  $(function() {
    $('.EXPAND_COLLAPSE').find('dt').on('click', function() {
        $(this).next().toggle('350');   
     });
  });

    /* función que se encarga de alternar la visibilidad de un elemento específico y ocultar otros*/
        

    // La función alternarCollapse recibe un parámetro 'id', el cual será, si existe, el identificador único del elemento a manejar.
    function alternarCollapse(id) {
      // Se busca el elemento en el DOM con el ID proporcionado.
      const elemento = document.getElementById(id);

      // Se verifica si el elemento existe.
      if (elemento) {
          // Se obtienen todas las subregiones del elemento padre que tengan la clase 'collapse'.
          const subregiones = elemento.parentElement.querySelectorAll('.collapse');

          // Se itera sobre todas las subregiones encontradas.
          subregiones.forEach((subregion) => {
              // Se verifica si la subregión actual no es la misma que el elemento proporcionado.
              if (subregion !== elemento) {
                  // Si no es la misma, se le quita la clase 'active' para ocultarla.
                  subregion.classList.remove('active');
              }
          });

          // Finalmente, se le añade o quita la clase 'active' al elemento proporcionado, alternando su visibilidad.
          elemento.classList.toggle('active');
      }
  }

  /*
  En resumen, esta función busca un elemento en el DOM por su ID, y si existe, alterna la clase 'active'en ese elemento para controlar
  su visibilidad.Además, desactiva la clase 'active' en otras subregiones del mismo padre para ocultarlas y garantizar que solo una subregión 
  esté visible a la vez. Esto puede ser útil en implementaciones de sistemas de colapsar o expandir secciones en una interfaz de usuario*/