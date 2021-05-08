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












// {

//     const showImage = () => {

//        const header__image = document.querySelector(".header__image");

//         if (header__image.classList.contains("hidden")) { 
//             header__image.classList.remove("hidden"); 
//             header__button.innerText = "Schowaj zdjęcie";

//         } else {
//             header__image.classList.add("hidden"); 
//             header__button.innerText = "Pokaż zdjęcie";
//         }

//     clickButton();
// };

// const init = () => {
//     header__button.addEventListener("click");
//      const header__button = document.querySelector(".header__button");

// };

// init();







 //let header__button = document.querySelector(".header__button");
// let header__image = document.querySelector(".header__image");

// header__button.addEventListener("click", () => {
//     if (header__image.classList.contains("hidden")) { // czy jest niewidzialny
//         header__image.classList.remove("hidden"); // usun niewidzialnosc
//         header__button.innerText = "Schowaj zdjęcie";
//     } else {
//         header__image.classList.add("hidden"); // dodaj niewidzialnosc
//         header__button.innerText = "Pokaż zdjęcie";
//     }


//     console.log(button.innerText)
// });


// if(button.innerText === "Pokaż zdjęcie") {
//   button.innerText = "Schowaj zdjęcie";
//     // usuwamy klase hidden
// }else if(button.innerText === "Schowaj zdjęcie") {
//     button.innerText = "Pokaż zdjęcie";
//     // dodajemy klase hidden
// }
//    img1.remove();


            // Co to ClassList?

            // Jesli mamy cos takiego:
            //  <div class="raz dwa trzy"/>

            // To ClassList tego diva zawiera 3 elementy:
            // raz
            // dwa
            // trzy

            // Na ClassList mozesz wykonywac operacje:
            // ClassList.contains(costam) - sprawdza czy jest costam
            // ClassList.add(costam) - dodaje costam
            // ClassList.remove(costam) - usuwa costam