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


    function setupCarousel(containerSelector, itemSelector, arrowSelector) {
        const container = document.querySelector(containerSelector)
        if (!container) return

        const items = container.querySelectorAll(itemSelector)
        if (items.length === 0) return

        const controls = document.querySelectorAll(arrowSelector)
        if (controls.length === 0) return

        let currentItem = 0
        const maxItems = items.length

        const scrollToItem = (index) => {
            items.forEach(item => item.classList.remove("active"))
    
            items[index].scrollIntoView({
                inline: "center",
                behavior: "smooth",
                block: "nearest"
            })
    
            items[index].classList.add("active")
            
        }

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
    }

    setupCarousel("#about-us", ".about-card", ".arrow")
    setupCarousel(".cards-grid-container", ".card-element", ".seguro-arrow")
    setupCarousel(".cards-grid-container2", ".card-element2", ".seguro-arrow2")
    



    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show")
            } else {
                entry.target.classList.remove("show")
            }
        })
    })
    
    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((el) => observer.observe(el))



    let services = {
        bens: [
            {
                serviceName: "Seguro Auto",
                category: "seguros",
                image: "../assets/images/auto.png",
                description: "Seguro que cobre danos ao veículo e seus ocupantes, além de oferecer proteção contra roubo, furto, acidentes, e terceiros envolvidos."
            },
            {
                serviceName: "Seguro Moto",
                category: "seguros",
                image: "../assets/images/moto.png",
                description: "Seguro específico para motocicletas, oferecendo cobertura para danos, roubo, furto, acidentes e proteção contra terceiros."
            },
            {
                serviceName: "Seguro Caminhão",
                category: "seguros",
                image: "../assets/images/caminhao.png",
                description: "Seguro voltado para caminhões, cobrindo danos ao veículo, roubo, furto, acidentes, e responsabilidade civil em caso de danos a terceiros."
            },
            {
                serviceName: "Seguro Bike",
                category: "seguros",
                image: "../assets/images/bike.png",
                description: "Seguro que protege bicicletas contra roubo, furto, danos em acidentes e possíveis responsabilidades civis."
            },
            {
                serviceName: "Seguro Residência",
                category: "seguros",
                image: "../assets/images/residencia.png",
                description: "Seguro que cobre danos à propriedade residencial e seu conteúdo, incluindo incêndio, roubo, desastres naturais e outros imprevistos."
            },
            {
                serviceName: "Seguro Empresarial",
                category: "seguros",
                image: "../assets/images/empresarial.png",
                description: "Seguro destinado a proteger empresas contra diversos riscos, como danos à propriedade, roubo, incêndio e interrupções nos negócios."
            },
            {
                serviceName: "Seguro Condomínio",
                category: "seguros",
                image: "../assets/images/condominio.png",
                description: "Seguro que oferece cobertura para áreas comuns de condomínios, incluindo danos por incêndio, roubo, e responsabilidades civis."
            },
            {
                serviceName: "Seguro Frota",
                category: "seguros",
                image: "../assets/images/frota.png",
                description: "Seguro para empresas que possuem múltiplos veículos, cobrindo danos, roubos, furtos e acidentes envolvendo a frota."
            },
            {
                serviceName: "Seguro Responsabilidade Civil Empresarial",
                category: "seguros",
                image: "../assets/images/rce.png",
                description: "Seguro que protege a empresa contra reclamações de terceiros por danos causados por suas operações, produtos ou serviços."
            },
            {
                serviceName: "Seguro Equipamentos Portáteis",
                category: "seguros",
                image: "../assets/images/portateis.png",
                description: "Seguro que cobre danos, roubo e furto de equipamentos portáteis, como celulares, laptops e tablets."
            },
            {
                serviceName: "Seguro Equipamentos Diversos",
                category: "seguros",
                image: "../assets/images/diversos.png",
                description: "Seguro que cobre uma variedade de equipamentos, como máquinas e ferramentas, contra danos, roubo e furto."
            }
        ],
        pessoas: [
            {
                serviceName: "Seguro Vida",
                category: "seguros",
                image: "../assets/images/vida.png",
                description: "Seguro que oferece proteção financeira para os beneficiários em caso de falecimento do segurado, garantindo segurança para a família."
            },
            {
                serviceName: "Seguro Acidente Pessoais",
                category: "seguros",
                image: "../assets/images/acidente.png",
                description: "Seguro que cobre despesas médicas, invalidez ou morte acidental do segurado, oferecendo suporte financeiro em momentos difíceis."
            },
            {
                serviceName: "Seguro Responsabilidade Civil Profissional",
                category: "seguros",
                image: "../assets/images/rcp.png",
                description: "Seguro que protege profissionais contra reclamações de terceiros por erros ou omissões cometidos no exercício de suas atividades."
            },
            {
                serviceName: "Seguro DIT (Diária por Incapacidade Temporária)",
                category: "seguros",
                image: "../assets/images/dit.png",
                description: "Seguro que oferece um pagamento diário ao segurado em caso de incapacidade temporária para o trabalho devido a acidente ou doença."
            },
            {
                serviceName: "Seguro Viagem",
                category: "seguros",
                image: "../assets/images/viagem.png",
                description: "Seguro que cobre despesas médicas, cancelamentos de viagem, perda de bagagem e outros imprevistos durante viagens."
            },
            {
                serviceName: "Seguro Saúde",
                category: "seguros",
                image: "../assets/images/saude.png",
                description: "Seguro que cobre despesas médicas, hospitalares e de medicamentos, garantindo acesso a cuidados de saúde de qualidade."
            },
            {
                serviceName: "Seguro Fiança",
                category: "seguros",
                image: "../assets/images/fianca.png",
                description: "Seguro que substitui o fiador em contratos de aluguel, garantindo o pagamento do aluguel e outras obrigações do locatário ao proprietário."
            }
        ]
    };

    function generateCards(serviceList, cardsGrid, cardElement) {

        const phoneNumber = "+5513997110258"

        if (cardsGrid) {
            for (let i of serviceList) {
                let card = document.createElement("div");
                card.classList.add(cardElement);
            
                let imgContainer = document.createElement("div");
                imgContainer.classList.add("card-header");
            
                let image = document.createElement("img");
                image.setAttribute("src", i.image);
                image.classList.add("image-card")
                imgContainer.appendChild(image);
            
                let cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
            
                let cardTextContainer = document.createElement("div")
                cardTextContainer.classList.add("card-text-container")
                cardBody.appendChild(cardTextContainer)
            
                let cardTitle = document.createElement("h3");
                cardTextContainer.appendChild(cardTitle);
                cardTitle.innerText = i.serviceName;
            
                let cardDescription = document.createElement("p");
                cardTextContainer.appendChild(cardDescription);
                cardDescription.innerText = i.description
            
                let cardButtonContainer = document.createElement("div")
                cardButtonContainer.classList.add("card-button-container")
                cardBody.appendChild(cardButtonContainer)
            
                let cardA = document.createElement("a")
                cardButtonContainer.appendChild(cardA)
            
                let cardButton = document.createElement("button");
                cardButton.classList.add("card-button");
                cardButton.setAttribute("data-bs-toggle", "modal");
                cardButton.setAttribute("data-bs-target", "#meuModal");
                cardA.appendChild(cardButton)
                cardButton.innerText = "Saiba Mais"

                cardButton.addEventListener("click", function() {
                    document.getElementById("modalTitle").innerText = i.serviceName
                    document.getElementById("modalDescription").innerText = i.description

                    let whatsappMessage = `Olá, quero saber mais sobre o ${i.serviceName}`
                    let whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`
                    document.getElementById("whatsappButton").setAttribute("href", whatsappLink)

                })

                card.appendChild(imgContainer);
                card.appendChild(cardBody);
            
                cardsGrid.appendChild(card)

            
            }
        }
    }
    

    let cardsGrid = document.getElementById("cards-grid")
    let cardsGrid2 = document.getElementById("cards-grid-2")

    generateCards(services.bens, cardsGrid, "card-element2")
    generateCards(services.pessoas, cardsGrid2, "card-element")


})