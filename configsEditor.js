CKEDITOR.config.removePlugins='scayt,wsc';
CKEDITOR.editorConfig = function(config) {
    config.google_fonts = 'Nunito', 'Nunito:wght@500';

    config.stylesSet.push({ name : 'warningImportant', element : 'p', wrap:true, attributes : { 'class' : 'warningImportant' } });
    config.stylesSet.push({ name : 'warningChannels', element : 'p', wrap:true, attributes : { 'class' : 'warningChannels' } });
    config.stylesSet.push({ name : 'warningRegistration', element : 'p', wrap:true, attributes : { 'class' : 'warningRegistration'} });
    config.stylesSet.push({ name : 'noContent', wrap:false, attributes : { 'class' : 'noContent'} });
   
    config.stylesSet.push({ name : 'NiceTable', element : 'table', attributes : { 'class' : 'mt-nice-table', 'title' :'NiceTable', 'style' : ''} });    
    config.stylesSet.push({ name : 'combinarCeldas', element : 'div', wrap:true, attributes : { 'class' : 'combinarCeldas'}});

    config.stylesSet.push({ name : '2 Columnas', element : 'div', wrap:true, attributes : { 'class' : 'generateColumns twoColumns' } });
    config.stylesSet.push({ name : '3 Columnas', element : 'div', wrap:true, attributes : { 'class' : 'generateColumns threeColumns' } });
    config.stylesSet.push({ name : '4 Columnas', element : 'div', wrap:true, attributes : { 'class' : 'generateColumns fourColumns' } });
};