{
    const toggleImage = () => {
        const headerImage = document.querySelector(".js-headerImage");
        const buttonChange = document.querySelector(".js-buttonChange");
        headerImage.classList.toggle("header__image--hidden");
        buttonChange.innerText = buttonChange.innerText === "Schowaj zdjęcie" ? "Pokaż zdjęcie" : "Schowaj zdjęcie";
    };
    
    const init = () => {
        const headerButton = document.querySelector(".js-headerButton");
        headerButton.addEventListener("click", toggleImage);
    };
    init();
}
