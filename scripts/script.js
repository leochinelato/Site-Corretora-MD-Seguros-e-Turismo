const hambutton = document.querySelector('.hambutton')
const hamburger = document.querySelector('.hamburger-container')

if (hambutton) {
    hambutton.addEventListener('click', () => {
        hamburger.classList.toggle('active')
    })
}

fetch('head.html')
    .then(response => response.text())
    .then(data => {
        document.head.innerHTML = data
    })

fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data
    })

let services = {
    bens: [
        {
            serviceName: "Seguro Auto",
            category: "seguros",
            image: "../assets/img/auto.png",
            description: "Seguro que cobre danos ao veículo e seus ocupantes, além de oferecer proteção contra roubo, furto, acidentes, e terceiros envolvidos."
        },
        {
            serviceName: "Seguro Moto",
            category: "seguros",
            image: "../assets/img/moto.png",
            description: "Seguro específico para motocicletas, oferecendo cobertura para danos, roubo, furto, acidentes e proteção contra terceiros."
        },
        {
            serviceName: "Seguro Caminhão",
            category: "seguros",
            image: "../assets/img/caminhao.png",
            description: "Seguro voltado para caminhões, cobrindo danos ao veículo, roubo, furto, acidentes, e responsabilidade civil em caso de danos a terceiros."
        },
        {
            serviceName: "Seguro Bike",
            category: "seguros",
            image: "../assets/img/bike.png",
            description: "Seguro que protege bicicletas contra roubo, furto, danos em acidentes e possíveis responsabilidades civis."
        },
        {
            serviceName: "Seguro Residência",
            category: "seguros",
            image: "../assets/img/residencia.png",
            description: "Seguro que cobre danos à propriedade residencial e seu conteúdo, incluindo incêndio, roubo, desastres naturais e outros imprevistos."
        },
        {
            serviceName: "Seguro Empresarial",
            category: "seguros",
            image: "../assets/img/empresarial.png",
            description: "Seguro destinado a proteger empresas contra diversos riscos, como danos à propriedade, roubo, incêndio e interrupções nos negócios."
        },
        {
            serviceName: "Seguro Condomínio",
            category: "seguros",
            image: "../assets/img/condominio.png",
            description: "Seguro que oferece cobertura para áreas comuns de condomínios, incluindo danos por incêndio, roubo, e responsabilidades civis."
        },
        {
            serviceName: "Seguro Frota",
            category: "seguros",
            image: "../assets/img/frota.png",
            description: "Seguro para empresas que possuem múltiplos veículos, cobrindo danos, roubos, furtos e acidentes envolvendo a frota."
        },
        {
            serviceName: "Seguro Responsabilidade Civil Empresarial",
            category: "seguros",
            image: "../assets/img/rce.png",
            description: "Seguro que protege a empresa contra reclamações de terceiros por danos causados por suas operações, produtos ou serviços."
        },
        {
            serviceName: "Seguro Equipamentos Portáteis",
            category: "seguros",
            image: "../assets/img/portateis.png",
            description: "Seguro que cobre danos, roubo e furto de equipamentos portáteis, como celulares, laptops e tablets."
        },
        {
            serviceName: "Seguro Equipamentos Diversos",
            category: "seguros",
            image: "../assets/img/diversos.png",
            description: "Seguro que cobre uma variedade de equipamentos, como máquinas e ferramentas, contra danos, roubo e furto."
        }
    ],
    pessoas: [
        {
            serviceName: "Seguro Vida",
            category: "seguros",
            image: "../assets/img/vida.png",
            description: "Seguro que oferece proteção financeira para os beneficiários em caso de falecimento do segurado, garantindo segurança para a família."
        },
        {
            serviceName: "Seguro Acidente Pessoais",
            category: "seguros",
            image: "../assets/img/acidente.png",
            description: "Seguro que cobre despesas médicas, invalidez ou morte acidental do segurado, oferecendo suporte financeiro em momentos difíceis."
        },
        {
            serviceName: "Seguro Responsabilidade Civil Profissional",
            category: "seguros",
            image: "../assets/img/rcp.png",
            description: "Seguro que protege profissionais contra reclamações de terceiros por erros ou omissões cometidos no exercício de suas atividades."
        },
        {
            serviceName: "Seguro DIT (Diária por Incapacidade Temporária)",
            category: "seguros",
            image: "../assets/img/dit.png",
            description: "Seguro que oferece um pagamento diário ao segurado em caso de incapacidade temporária para o trabalho devido a acidente ou doença."
        },
        {
            serviceName: "Seguro Viagem",
            category: "seguros",
            image: "../assets/img/viagem.png",
            description: "Seguro que cobre despesas médicas, cancelamentos de viagem, perda de bagagem e outros imprevistos durante viagens."
        },
        {
            serviceName: "Seguro Saúde",
            category: "seguros",
            image: "../assets/img/saude.png",
            description: "Seguro que cobre despesas médicas, hospitalares e de medicamentos, garantindo acesso a cuidados de saúde de qualidade."
        },
        {
            serviceName: "Seguro Fiança",
            category: "seguros",
            image: "../assets/img/fianca.png",
            description: "Seguro que substitui o fiador em contratos de aluguel, garantindo o pagamento do aluguel e outras obrigações do locatário ao proprietário."
        }
    ]
};

document.addEventListener("DOMContentLoaded", function() {

    let cardsGrid = document.getElementById("cards-grid")

    if (cardsGrid) {
        for (let i of services.bens) {
            let card = document.createElement("div");
            card.classList.add("card-element");
        
            let imgContainer = document.createElement("div");
            imgContainer.classList.add("card-header");
        
            let image = document.createElement("img");
            image.setAttribute("src", i.image);
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
            cardA.appendChild(cardButton)
            cardButton.innerText = "Saiba Mais"
        
            card.appendChild(imgContainer);
            card.appendChild(cardBody);
        
            cardsGrid.appendChild(card)
        
        }
    }
})



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
        logoImg.src = `./assets/img/logos/${logo}`;
        logoImg.alt = '';

        logoDiv.appendChild(logoImg);
        logosSlide.appendChild(logoDiv);
    });
});


// function filterProduct(value) {
//     let buttons = document.querySelectorAll(".button-value");
//     buttons.forEach(button => {
//         if (value.toUpperCase() == button.innerText.toUpperCase()) {
//             button.classList.add("active")
//         }
//         else {
//             button.classList.remove("active")
//         }
//     });

//     let elements = document.querySelectorAll(".card");
//     elements.forEach(element => {
//         if(value == "todos"){
//             element.classList.remove("hide");
//         }
//         else{
//             if(element.classList.contains(value)){
//                 element.classList.remove("hide");
//             }
//             else{
//                 element.classList.add("hide");
//             }
//         }
//     });
// }

// window.onload = () => {
//     filterProduct("todos")
// }