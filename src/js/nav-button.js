const nav = document.getElementById("nav");
const openNavBtn = document.getElementById("nav-btn");
const closeNavBtn = document.getElementById("close-nav-btn");


// Abre o menu de navegacao
openNavBtn.addEventListener("click", () => {
    nav.style.display = "block";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "block";
})


// Fecha o menu de navegacao
closeNavBtn.addEventListener("click", () => {
    nav.style.display = "none";
    closeNavBtn.style.display = "none";
    openNavBtn.style.display = "block";
})