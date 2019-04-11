(function () {
    var name = document.querySelector('#name');
    var email = document.querySelector('#email');
    var message = document.querySelector('#message');
    var input = document.querySelector('#btn');
    var copyright = document.querySelector('.copyright');

    copyright.append('&copy;');
    copyright.textContent += `Conocete Y Protegete. ${new Date().getFullYear()}.`

    input.addEventListener('click', function (evt) {
        // evt.preventDefault();
        input.href = `mailto:grupoikaro@gmail.com?body=Mi nombre es ${name.value}. ${message.value}`;
    });
})();