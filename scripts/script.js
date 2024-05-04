const hambutton = document.querySelector('.hambutton')
const hamburger = document.querySelector('.hamburger-container')

hambutton.addEventListener('click', () => {
    hamburger.classList.toggle('active')
})

let services = {
    data: [
        {
            serviceName: "Seguro de Vida",
            category: "seguros",
            image: "../assets/img/family.png",
            description: "Projeta o que realmente importa com os nossos seguros personalizados. Desde o seu lar acolhedor até ao seu veículo de confiança.Garantimos a tranquilidade que você merece."
        },
        {
            serviceName: "Turismo",
            category: "turismo",
            image: "../assets/img/trip.png",
            description: "Projeta o que realmente importa com os nossos seguros personalizados. Desde o seu lar acolhedor até ao seu veículo de confiança.Garantimos a tranquilidade que você merece."
        },
        {
            serviceName: "Consórcio",
            category: "consorcio",
            image: "../assets/img/consorcio.png",
            description: "Projeta o que realmente importa com os nossos seguros personalizados. Desde o seu lar acolhedor até ao seu veículo de confiança.Garantimos a tranquilidade que você merece."
        },

    ]
};

for (let i of services.data) {
    let card = document.createElement("a");
    card.classList.add("card", "rounded-5", "shadow-sm", "text-decoration-none", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("card-img");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);
    cardTitle.innerText = i.serviceName;

    let cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardBody.appendChild(cardDescription);
    cardDescription.innerText = i.description

    card.appendChild(imgContainer);
    card.appendChild(cardBody);



    document.querySelector(".cards-container").appendChild(card);

}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active")
        }
        else {
            button.classList.remove("active")
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach(element => {
        if(value == "todos"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}

window.onload = () => {
    filterProduct("todos")
}