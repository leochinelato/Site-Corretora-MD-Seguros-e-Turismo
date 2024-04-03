const hambutton = document.querySelector('.hambutton')
const hamburger = document.querySelector('.hamburger-container')

hambutton.addEventListener('click', () => {
    hamburger.classList.toggle('active')
})