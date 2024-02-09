CKEDITOR.config.removePlugins='scayt,wsc';
CKEDITOR.editorConfig = function(config) {
    //Fuente
    config.google_fonts = 'Nunito', 'Nunito:wght@500';
    //Warnings
    config.stylesSet.push({ name : 'warningImportant', element : 'p', wrap:true, attributes : { 'class' : 'warningImportant' } });
    config.stylesSet.push({ name : 'warningChannels', element : 'p', wrap:true, attributes : { 'class' : 'warningChannels' } });
    config.stylesSet.push({ name : 'warningRegistration', element : 'p', wrap:true, attributes : { 'class' : 'warningRegistration'} });
    config.stylesSet.push({ name : 'definitionBox', element : 'p', wrap:true, attributes : { 'class' : 'definitionBox'} });

    //Iconos en contenido
    config.stylesSet.push({ name : 'iconosPequenos', wrap:false, attributes : { 'class' : 'iconosPequenos'} });

    //Particularidades
    config.stylesSet.push({ name : 'hasContent', wrap:false, attributes : { 'class' : 'hasContent'} });
    config.stylesSet.push({ name : 'emptyRegions', wrap:false, attributes : { 'class' : 'emptyRegions'} });

    //Tooltips-Textos (Variables Globales)
    config.stylesSet.push({ name : 'tooltips', wrap: false, attributes: { 'class': 'tool-tip-link', 'title': '{{reemplazarAqui}}'}});
    
    //Tooltips-Imagenes    
        //Sueltos
    config.stylesSet.push({ name : 't_coordiCAT', wrap: false, attributes: { 'class': 'tool-tip-link coordiCAT'}});    
    config.stylesSet.push({ name : 't_coordiCGD', wrap: false, attributes: { 'class': 'tool-tip-link coordiCGD'}});
    config.stylesSet.push({ name : 't_coordiCAP', wrap: false, attributes: { 'class': 'tool-tip-link coordiCAP'}});
    config.stylesSet.push({ name : 't_asesorCAT', wrap: false, attributes: { 'class': 'tool-tip-link asesorCAT'}});
    config.stylesSet.push({ name : 't_asesorCGD', wrap: false, attributes: { 'class': 'tool-tip-link asesorCGD'}});
    config.stylesSet.push({ name : 't_asesorCAP', wrap: false, attributes: { 'class': 'tool-tip-link asesorCAP'}});
        //Grupos
    config.stylesSet.push({ name : 't_todos', wrap: false, attributes: { 'class': 'tool-tip-link todos'}});
    config.stylesSet.push({ name : 't_todosCoordi', wrap: false, attributes: { 'class': 'tool-tip-link todosCoordi'}});
    config.stylesSet.push({ name : 't_todosAsesores', wrap: false, attributes: { 'class': 'tool-tip-link todosAsesores'}});
        //Combinaciones de Coordinadores                
    config.stylesSet.push({ name : 't_coordiCAT-CGD', wrap: false, attributes: { 'class': 'tool-tip-link coordiCAT-CGD'}});
    config.stylesSet.push({ name : 't_coordiCGD-CAP', wrap: false, attributes: { 'class': 'tool-tip-link coordiCGD-CAP'}});
    config.stylesSet.push({ name : 't_coordiCAT-CAP', wrap: false, attributes: { 'class': 'tool-tip-link coordiCAT-CAP'}});
        //Combinaciones de Asesores
    config.stylesSet.push({ name : 't_asesoresCAT_CGD', wrap: false, attributes: { 'class': 'tool-tip-link asesoresCAT_CGD'}});
    config.stylesSet.push({ name : 't_asesoresCGD_CAP', wrap: false, attributes: { 'class': 'tool-tip-link asesoresCGD_CAP'}});             
    config.stylesSet.push({ name : 't_asesoresCAT_CAP', wrap: false, attributes: { 'class': 'tool-tip-link asesoresCAT_CAP'}});
        //A medida
    config.stylesSet.push({ name : 't_todosAsesoresCGD-CAP', wrap: false, attributes: { 'class': 'tool-tip-link todosAsesoresCGD-CAP'}});
    /*
    //Tablas Wan y Rodo
    config.stylesSet.push({ name : '2 Columnas', element : 'div', wrap:true, attributes : { 'class' : 'generateColumns twoColumns' } });
    config.stylesSet.push({ name : '3 Columnas', element : 'div', wrap:true, attributes : { 'class' : 'generateColumns threeColumns' } });
    config.stylesSet.push({ name : '4 Columnas', element : 'div', wrap:true, attributes : { 'class' : 'generateColumns fourColumns' } });
    */
};



       