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

var prevScrollpos = window.scrollY
window.onscroll = function () {
    var currentScrollPos = window.scrollY
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0'
    } else {
        document.getElementById('navbar').style.top = '-110px'
    }
    prevScrollpos = currentScrollPos
}

const menuHamburger = document.querySelector('.menu-hamburger')
const navLinks = document.querySelector('.nav-links')

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})