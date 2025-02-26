// Elementos pegos pelo id
const nav = document.getElementById("nav");
const openNavBtn = document.getElementById("nav-btn");
const closeNavBtn = document.getElementById("close-nav-btn");


// Elemento pego pelo nome da tag
const header = document.getElementsByTagName("header")[0];


// Abre o menu de navegacao
openNavBtn.addEventListener("click", () => {
    nav.style.display = "block";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "block";

    header.style.justifyContent = "center";
})


// Fecha o menu de navegacao
closeNavBtn.addEventListener("click", () => {
    nav.style.display = "none";
    openNavBtn.style.display = "block";
    closeNavBtn.style.display = "none";

    header.style.justifyContent = "left";
})