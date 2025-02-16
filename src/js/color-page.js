// Elementos pegos pelo nome da tag
const bodyPage = document.getElementsByTagName("body")[0];
const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];


// Elementos pegos pelo nome da classe
const modeBtn = document.getElementsByClassName("mode-btn");
const sectionBox = document.getElementsByClassName("section-box");



// Altera para o modo escuro
modeBtn[0].addEventListener("click", () => {
    blackMode();
})


// Altera para o modo claro
modeBtn[1].addEventListener("click", () => {
    whiteMode();
})



// Para a pagina ficar no modo escuro
function blackMode() {
    bodyPage.style.backgroundColor = "#000";
    main.style.color = "#fff";
    footer.style.color = "#fff";

    modeBtn[0].style.display = "none";
    modeBtn[1].style.display = "block";
}


// Para a pagina ficar no modo claro
function whiteMode() {
    bodyPage.style.backgroundColor = "#fff";
    main.style.color = "#000";
    footer.style.color = "#000";

    modeBtn[0].style.display = "block";
    modeBtn[1].style.display = "none";
}