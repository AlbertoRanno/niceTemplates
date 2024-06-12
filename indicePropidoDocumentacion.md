# Documentación del Proyecto de Integración de Índice en CMS Nice

## Introducción

Este proyecto tiene como objetivo crear un índice dinámico dentro de un contenedor específico en el CMS Nice (anteriormente Mindtouch). El índice generado permite la integración con otra aplicación, superando la limitación de que el índice predeterminado de Nice reside en un contenedor externo no accesible para la integración.

## Descripción del Código

El código se divide en dos partes principales: el estilo (CSS) y el comportamiento (JavaScript).

### Estilos (CSS)

1. **.collapsed { display: none; }**
   - Oculta elementos cuando se les añade la clase `collapsed`.

2. **.mt-content-container #mt-toc-container { position: fixed; right: 10px; top: 10px; }**
   - Posiciona el contenedor del índice (`#mt-toc-container`) de manera fija en la parte superior derecha de la pantalla.

3. **#mt-toc-container.collapsed { display: none; }**
   - Oculta el contenedor del índice cuando tiene la clase `collapsed`.

4. **.mt-content-container #mt-toc-container>ol>li::before { display: none !important; }**
   - Oculta los elementos decorativos (::before) de los elementos de la lista del índice.

### Comportamiento (JavaScript)

1. **Función `esconderIndiceIntegracion`**
   - Esconde el índice cuando la URL coincide con `https://osde-prod2.mindtouch.us/`.

2. **Evento `window.addEventListener('load', function () { ... })`**
   - Ejecuta el código principal cuando la página ha cargado completamente.

3. **Función `encodeSpecialCharacters`**
   - Codifica caracteres especiales en los encabezados para formar URLs válidas y compatibles con el CMS Nice. Esta función maneja caracteres acentuados, espacios, y otros símbolos especiales que deben ser transformados.

4. **Creación del Índice**
   - Crea dinámicamente un contenedor (`div`) y una lista (`ol`) para el índice.
   - Busca todos los encabezados `<h2>` y `<h3>` en el contenido principal.
   - Genera elementos de lista (`li`) y enlaces (`a`) para cada encabezado, codificando correctamente el texto para que funcione como un identificador en la URL.
   - Añade funcionalidad de colapsar y expandir para los encabezados `<h2>` que contienen `<h3>` como subsecciones.

5. **Interacción del Usuario**
   - Permite la navegación suave a las secciones correspondientes del contenido al hacer clic en los enlaces del índice.
   - Incluye un botón para colapsar o expandir todo el índice.

## Desafíos y Complejidades

1. **Codificación de URLs**
   - La necesidad de codificar los caracteres especiales para que las URLs sean válidas y funcionales.
   - La codificación personalizada del CMS Nice (por ejemplo, `.C3.A1` en lugar de `%C3%A1`), que difiere del estándar común.

2. **Manipulación del DOM**
   - Creación dinámica de elementos HTML y su inserción en el DOM.
   - Manejo de eventos para la interacción del usuario, como el colapso y expansión de secciones.

3. **Compatibilidad de la URL**
   - Asegurar que las URLs generadas coincidan con el formato esperado por el CMS Nice para evitar enlaces rotos.

## Conclusión

Este script ha sido desarrollado para integrar de manera efectiva un índice de contenidos dentro de un contenedor específico del CMS Nice, solucionando la limitación de acceso al índice predeterminado. La función de codificación personalizada y la estructura dinámica del índice permiten una navegación intuitiva y correcta, cumpliendo con los requisitos específicos del CMS Nice y la aplicación integrada.
