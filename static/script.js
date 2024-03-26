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