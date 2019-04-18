/**
 * @copyright KrustyLabDevelopers
 * @version 0.0.1
 * @description Integración de formulario de pagos en línea con la librería de Conekta
 */
(function () {

    function makeRequest() {
        const Http = new XMLHttpRequest();
        const url = 'https://jsonplaceholder.typicode.com/posts';
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            console.log(Http.responseText)
        }
    }


    Conekta.setPublicKey("key_JT4EwCbV5CC84AMBxxuwSxQ");
    Conekta.setLanguage("es");
})();