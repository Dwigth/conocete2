/**
 * @copyright KrustyLabDevelopers
 * @version 0.0.1
 * @description Integración de formulario de pagos en línea con la librería de Conekta
 */
(function () {
    const baseURL = 'conoceteyprotegete.com.mx';

    function makeRequest(url, method) {
        const Http = new XMLHttpRequest();
        const url = url;
        Http.open(method, url);
        Http.send();
        Http.onreadystatechange = function (e) {
            console.log(Http.responseText)
        }
    }

    Conekta.setPublicKey("key_JT4EwCbV5CC84AMBxxuwSxQ");
    Conekta.setLanguage("es");
})();