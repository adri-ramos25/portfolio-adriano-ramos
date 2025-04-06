// Elementos pegos pelo id
const headerTitle = document.getElementById("header-title");
const openNavBtn = document.getElementById("btn-open-nav");
const closeNavBtn = document.getElementById("close-nav-btn");


// Elemento pego pelo nome da classe
const navSectionBtn = document.getElementsByClassName("nav-section-btn");


// Elementos pegos pelo nome da tag
const header = document.getElementsByTagName("header")[0];
const nav = document.getElementsByTagName("nav")[0];


header.style.backgroundColor = "transparent";
closeNavBtn.style.display = "none";


window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        openNavBtn.style.marginTop = "15px";
        openNavBtn.style.marginBottom = "5px";
        openNavBtn.style.backgroundColor = "transparent";

        header.classList.add("scrolled");
        header.style.paddingTop = "0";
        header.style.marginTop = "0";
        header.style.backgroundColor = "#062055";

    } else {
        nav.style.marginTop = "5px";
        nav.style.display = "none";

        openNavBtn.style.marginTop = "25px";
        openNavBtn.style.backgroundColor = "#021233";

        header.classList.remove("scrolled");
        header.style.backgroundColor = "transparent";
        header.style.marginTop = "30px";

        executionFuncHideNav();
    }
})


// Abre o menu de navegacao
openNavBtn.addEventListener("click", () => {
    nav.style.display = "block";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "block";

    headerTitle.style.display = "block";
    header.style.justifyContent = "center";
    header.style.marginTop = "0";
    header.style.backgroundColor = "#062055";
})


// Fecha o menu de navegacao
closeNavBtn.addEventListener("click", () => {
    nav.style.display = "none";
    openNavBtn.style.display = "block";
    closeNavBtn.style.display = "none";

    header.style.justifyContent = "left";
    headerTitle.style.display = "none";

    if (window.scrollY < 30) {
        header.style.backgroundColor = "transparent";
        header.style.marginTop = "30px";
    }
})



// Esconde o conteudo do menu de navegacao
function hideNav() {
    headerTitle.style.display = "none";
    closeNavBtn.style.display = "none";
    nav.style.display = "none";
    openNavBtn.style.display = "block";
}


// Executa a funcao "hideNav"
function executionFuncHideNav() {
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
}