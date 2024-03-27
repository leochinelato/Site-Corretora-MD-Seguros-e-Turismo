document.addEventListener('DOMContentLoaded', function () {
    // Atualiza o título do modal com o título do card ao exibi-lo
    var buttons = document.querySelectorAll('.abrir-modal');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var cardTitle = this.querySelector('.card-title').innerText;
            var modalTitle = document.querySelector('#myModal .modal-title');
            modalTitle.innerText = cardTitle;
        });
    });
});


document.getElementById('btnCopiar').addEventListener('click', function () {
    var telefone = document.getElementById('telefone').textContent
    navigator.clipboard.writeText(telefone)
        .then(() => console.log('Texto copiado!'))
        .catch(err => console.error('Falha ao copiar: ', err))
})