// Elementos pegos pelo id
const headerTitle = document.getElementById("header-title");
const nav = document.getElementById("nav");
const openNavBtn = document.getElementById("nav-btn");
const closeNavBtn = document.getElementById("close-nav-btn");
const navSectionBtn = document.getElementsByClassName("nav-section-btn");


// Elemento pego pelo nome da tag
const header = document.getElementsByTagName("header")[0];


closeNavBtn.style.display = "none";


window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
        header.style.backgroundColor = "#0c2963";
        header.style.marginTop = "0";

    } else {
        header.classList.remove("scrolled");
        header.style.backgroundColor = "transparent";
        header.style.marginTop = "30px";

        hideNav();
    }
})


// Abre o menu de navegacao
openNavBtn.addEventListener("click", () => {
    headerTitle.style.display = "block";
    nav.style.display = "block";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "block";

    header.style.justifyContent = "center";
    header.style.marginTop = "0";
    header.style.backgroundColor = "#021233";
})


// Fecha o menu de navegacao
closeNavBtn.addEventListener("click", () => {
    headerTitle.style.display = "none";
    header.style.backgroundColor = "#0c2963";
    nav.style.display = "none";
    openNavBtn.style.display = "block";
    closeNavBtn.style.display = "none";

    header.style.justifyContent = "left";

    if (window.scrollY < 30) {
        header.style.backgroundColor = "transparent";
        header.style.marginTop = "30px";
    }
})


navSectionBtn[0].addEventListener("click", () => {
    hideNav();
})
navSectionBtn[1].addEventListener("click", () => {
    hideNav();
})
navSectionBtn[2].addEventListener("click", () => {
    hideNav();
})
navSectionBtn[3].addEventListener("click", () => {
    hideNav();
})
navSectionBtn[4].addEventListener("click", () => {
    hideNav();
})
navSectionBtn[5].addEventListener("click", () => {
    hideNav();
})



function hideNav() {
    headerTitle.style.display = "none";
    closeNavBtn.style.display = "none";
    nav.style.display = "none";
    openNavBtn.style.display = "block";
}