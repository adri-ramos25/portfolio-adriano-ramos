// Elementos pegos pelo nome da classe
const projectBtn = document.getElementsByClassName("project-btn");
const boxMyProjects = document.getElementsByClassName("box-my-projects");


// Elementos pegos pelo id
const closeObterCor = document.getElementById("close-obter-cor-btn");
const closeHamburgueria = document.getElementById("close-hamburgueria-btn");
const closePortfolio = document.getElementById("close-portfolio-btn");


// Mostra as informacoes do projeto hamburgueria
projectBtn[0].addEventListener("click", () => {
    boxMyProjects[0].style.display = "block";
    boxMyProjects[0].style.display = "flex";
})


// Mostra as informacoes do projeto obter cor
projectBtn[1].addEventListener("click", () => {
    boxMyProjects[1].style.display = "block";
    boxMyProjects[1].style.display = "flex";
})


// Mostra as informacoes do projeto portfolio adriano ramos
projectBtn[2].addEventListener("click", () => {
    boxMyProjects[2].style.display = "block";
    boxMyProjects[2].style.display = "flex";
})



closeHamburgueria.addEventListener("click", () => {
    boxMyProjects[0].style.display = "none";
})


closeObterCor.addEventListener("click", () => {
    boxMyProjects[1].style.display = "none";
})


closePortfolio.addEventListener("click", () => {
    boxMyProjects[2].style.display = "none";
})