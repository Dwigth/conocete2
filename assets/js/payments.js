/**
 * @copyright KrustyLabDevelopers
 * @version 1.0.0
 * @description Integración de formulario de pagos en línea con la librería de Conekta
 */
(function () {
    // const baseURL = 'conoceteyprotegete.com.mx:3003';
    const baseURL = 'http://localhost:3003';
    const payBtn = document.querySelector("#pay");
    const cardNumbers = document.querySelector('#tarjeta');
    const msg = document.querySelector('#errors');
    var client = {};
    //funciones conekta

    function makeRequest(url, method, data) {
        const Http = new XMLHttpRequest();
        const uri = url;
        Http.open(method, baseURL + uri, true);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send(data);
        Http.onreadystatechange = function (e) {
            msg.textContent = `¡Muchas gracias por su compra!, 
            enseguida recibirá un email con la información de su compra.`;
        }
    }

    function buildConektaObject(form) {
        const container = form.children[0];
        const childs = Array.from(container.children);
        const cvc = document.querySelector('#cvc').value;
        var inputValues = [];
        msg.textContent = '';

        childs.map(function (listElement) {
            const input = listElement.children[1];
            if (input != undefined || input != null) {
                const val = listElement.children[1].value;
                inputValues.push(val);
            }
        });

        client = {
            name: inputValues[0],
            email: inputValues[5],
            phone: inputValues[6],
            street1: inputValues[9],
            postal_code: inputValues[11],
            country: 'MX'
        };

        const card = cardNumbers.value;
        const exp_month = inputValues[2];
        const exp_year = inputValues[3];
        const isValidFormat = Conekta.card.validateNumber(card);
        const isValidExpDate = Conekta.card.validateExpirationDate(exp_month, exp_year);
        const isValidCVC = Conekta.card.validateCVC(cvc);

        if (!isValidFormat) {
            msg.textContent = 'El formato de la tarjeta no es válido.';
        } else if (!isValidExpDate) {
            msg.textContent = 'La fecha de expiración no es válida.';
        } else if (!isValidCVC) {
            msg.textContent = 'El código de seguridad no es válido.';
        }

        if (isValidFormat && isValidExpDate && isValidCVC) {
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
        } else {
            return null;
        }
    }
    Conekta.setPublicKey("key_JT4EwCbV5CC84AMBxxuwSxQ");
    Conekta.setLanguage("es");
    var conektaSuccessResponseHandler = function (token) {
        const uri = '/pay';
        let data = {
            conektaResponse: token,
            client: client
        };
        makeRequest(uri, 'POST', JSON.stringify(data));
    };
    var conektaErrorResponseHandler = function (response) {
        msg.textContent = response.message_to_purchaser;
    };

    payBtn.addEventListener('click', function (event) {
        event.preventDefault();
        var form = document.querySelector("#card-form");
        var tokenParams = buildConektaObject(form);
        if (tokenParams != null) {
            Conekta.Token.create(tokenParams, conektaSuccessResponseHandler, conektaErrorResponseHandler);
        }
        return false;
    });

    // validaciones de frontend
    cardNumbers.addEventListener('keydown', function (event) {
        const card = cardNumbers.value;
        if (isNaN(card)) {
            cardNumbers.value = "";
        }
        const brand = Conekta.card.getBrand(card);
        if (brand != null) {
            cardNumbers.style.background = `url(images/${brand}.jpg) no-repeat scroll 7px 7px`;
            cardNumbers.style.paddingLeft = '60px';
            cardNumbers.style.backgroundSize = '45px';
        }
    });

})();