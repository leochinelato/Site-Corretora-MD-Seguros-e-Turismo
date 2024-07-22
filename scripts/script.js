document.addEventListener("DOMContentLoaded", (event) => {

    const showNav = document.querySelector(".navbar-show");
    const hideNav = document.querySelector(".navbar-hide");
    const mobileNavbar = document.querySelector(".navbar-mobile");
    const body = document.body

    showNav.addEventListener('click', () => {
        mobileNavbar.classList.add("active-navbar");
        body.classList.add("no-scroll")
        
    });

    hideNav.addEventListener('click', () => {
        mobileNavbar.classList.remove("active-navbar");
        body.classList.remove("no-scroll")
    });



    const logos = [
        'allianz.png',
        'porto.png',
        'azul.png',
        'bradesco.png',
        'hdi.png',
        'itau.png',
        'liberty.png',
        'mapfre.png',
        'mitsui.png',
        'suhai.png',
        'tokio.png'
    ];


    const logosSlide = document.getElementsByClassName('logos-slide')

    Array.from(logosSlide).forEach((logosSlide, index) => {
        logos.forEach(logo => {
            const logoDiv = document.createElement('div');
            logoDiv.classList.add('logo');
            const logoImg = document.createElement('img');
            logoImg.src = `../assets/images/logos/${logo}`;
            logoImg.alt = '';

            logoDiv.appendChild(logoImg);
            logosSlide.appendChild(logoDiv);
        });
    });

    const controls = document.querySelectorAll(".arrow")
    let currentItem = 0
    const items = document.querySelectorAll(".about-card")
    const maxItems = items.length
    const container = document.getElementById("about-us")

    
    const scrollToItem = (index) => {
        items.forEach(item => item.classList.remove("active"))

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })

        items[currentItem].classList.add("active")
        
    }




    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show")
            } else {
                entry.target.classList.remove("show")
            }
        })
    })


    controls.forEach(control => {
        control.addEventListener('click', () => {
            const isLeft = control.classList.contains("prev-arrow")
            if (isLeft) {
                currentItem -= 1
            } else {
                currentItem += 1
            }

            if (currentItem >= maxItems) {
                currentItem = 0
            }

            if (currentItem < 0) {
                currentItem = maxItems - 1
            }

            scrollToItem(currentItem)

        })
    })
    
    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((el) => observer.observe(el))

})