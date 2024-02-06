CKEDITOR.config.removePlugins='scayt,wsc';
CKEDITOR.editorConfig = function(config) {
    config.google_fonts = 'Nunito', 'Nunito:wght@500';

    config.stylesSet.push({ name : 'warningImportant', element : 'p', wrap:true, attributes : { 'class' : 'warningImportant' } });
    config.stylesSet.push({ name : 'warningChannels', element : 'p', wrap:true, attributes : { 'class' : 'warningChannels' } });
    config.stylesSet.push({ name : 'warningRegistration', element : 'p', wrap:true, attributes : { 'class' : 'warningRegistration'} });
    config.stylesSet.push({ name : 'iconosPequenos', wrap:false, attributes : { 'class' : 'iconosPequenos'} });
    config.stylesSet.push({ name : 'definitionBox', element : 'p', wrap:true, attributes : { 'class' : 'definitionBox'} });
    config.stylesSet.push({ name : 'hasContent', wrap:false, attributes : { 'class' : 'hasContent'} });
    config.stylesSet.push({ name : 'emptyRegions', wrap:false, attributes : { 'class' : 'emptyRegions'} });
    // config.stylesSet.push({ name : 'tooltips', wrap: false, attributes: { 'class': 'tool-tip-link', 'title': '{{reemplazarAqui}}'}});
    /*        
    config.stylesSet.push({ name : 'tooltips_CAT-CAD', wrap: false, attributes: { 'class': 'tool-tip-link CAT-CAD'}});
    config.stylesSet.push({ name : 'tooltips_CGD', wrap: false, attributes: { 'class': 'tool-tip-link CGD'}});
    config.stylesSet.push({ name : 'tooltips_CAP', wrap: false, attributes: { 'class': 'tool-tip-link CAP'}});
    config.stylesSet.push({ name : 'tooltips_todosLosPuestos', wrap: false, attributes: { 'class': 'tool-tip-link todosLosPuestos'}});
    config.stylesSet.push({ name : 'tooltips_todosAsesores', wrap: false, attributes: { 'class': 'tool-tip-link todosAsesores'}});
    config.stylesSet.push({ name : 'tooltips_CAT-CGD', wrap: false, attributes: { 'class': 'tool-tip-link CAT-CGD'}});
    config.stylesSet.push({ name : 'tooltips_CGD-CAP', wrap: false, attributes: { 'class': 'tool-tip-link CGD-CAP'}});
    config.stylesSet.push({ name : 'tooltips_CAT-CAP', wrap: false, attributes: { 'class': 'tool-tip-link CAT-CAP'}});
    config.stylesSet.push({ name : 'tooltips_todosAsesoresCGD-CAP', wrap: false, attributes: { 'class': 'tool-tip-link todosAsesoresCGD-CAP'}});
    */
    config.stylesSet.push({ name : '2 Columnas', element : 'div', wrap:true, attributes : { 'class' : 'generateColumns twoColumns' } });
    config.stylesSet.push({ name : '3 Columnas', element : 'div', wrap:true, attributes : { 'class' : 'generateColumns threeColumns' } });
    config.stylesSet.push({ name : '4 Columnas', element : 'div', wrap:true, attributes : { 'class' : 'generateColumns fourColumns' } });
};



       