/**
 * @copyright KrustyLabDevelopers
 * @version 0.0.1
 * @description Integración de formulario de pagos en línea con la librería de Conekta
 */
(function () {
    const baseURL = 'conoceteyprotegete.com.mx:3002';
    const payBtn = document.querySelector("#pay");

    function makeRequest(url, method, data) {
        const Http = new XMLHttpRequest();
        const uri = url;
        Http.open(method, baseURL + uri, true);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send(data);
        Http.onreadystatechange = function (e) {
            console.log(Http.responseText)
        }
    }

    function buildConektaObject(form) {
        const container = form.children[0];
        const childs = Array.from(container.children);
        var inputValues = [];
        childs.map(function (listElement) {
            const input = listElement.children[1];
            if (input != undefined || input != null) {
                const val = listElement.children[1].value;
                console.log(val);

                inputValues.push(val);
            }
        });
        const tokenParams = {
            card: {
                name: inputValues[0],
                number: inputValues[1],
                exp_year: inputValues[3],
                exp_month: inputValues[2],
                cvc: inputValues[4],
                address: {
                    street1: inputValues[9],
                    street2: inputValues[10],
                    city: inputValues[8],
                    state: inputValues[7],
                    zip: inputValues[11],
                    country: "Mexico"
                }
            }
        };
        return tokenParams;
    }
    Conekta.setPublicKey("key_JT4EwCbV5CC84AMBxxuwSxQ");
    Conekta.setLanguage("es");
    var conektaSuccessResponseHandler = function (token) {
        var form = document.querySelector("#card-form");
        console.log(token);
        //Inserta el token_id en la forma para que se envíe al servidor
        // form.append($('<input type="hidden" name="conektaTokenId" id="conektaTokenId">').val(token.id));
        // form.get(0).submit(); //Hace submit
    };
    var conektaErrorResponseHandler = function (response) {
        var form = document.querySelector("#card-form");
        console.log(response);

        // form.find(".card-errors").text(response.message_to_purchaser);
        // form.find("button").prop("disabled", false);
    };

    payBtn.addEventListener('click', function (event) {
        event.preventDefault();
        var form = document.querySelector("#card-form");
        var tokenParams = buildConektaObject(form);
        Conekta.Token.create(tokenParams, conektaSuccessResponseHandler, conektaErrorResponseHandler);
        return false;
    });
    // $(function () {
    //     $("#card-form").submit(function (event) {
    //         var $form = $(this);
    //         // Previene hacer submit más de una vez
    //         $form.find("button").prop("disabled", true);
    //         Conekta.Token.create($form, conektaSuccessResponseHandler, conektaErrorResponseHandler);
    //         return false;
    //     });
    // });



})();