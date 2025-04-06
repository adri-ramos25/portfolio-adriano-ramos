const boxSoftSkill = document.getElementsByClassName("box-soft-skill");
const softSkillBtn = document.getElementsByClassName("soft-skill-btn");
const closeSoftSkill = document.getElementsByClassName("btn-close");


// Mostram as caixas aonde ficam as informacoes das habilidades pessoais
softSkillBtn[0].addEventListener("click", () => {
    boxSoftSkill[0].style.display = "block";
    header.style.backgroundColor = "transparent";
})
softSkillBtn[1].addEventListener("click", () => {
    boxSoftSkill[1].style.display = "block";
    header.style.backgroundColor = "transparent";
})
softSkillBtn[2].addEventListener("click", () => {
    boxSoftSkill[2].style.display = "block";
    header.style.backgroundColor = "transparent";
})
softSkillBtn[3].addEventListener("click", () => {
    boxSoftSkill[3].style.display = "block";
    header.style.backgroundColor = "transparent";
})


// Escondem as caixas aonde ficam as informacoes das habilidades pessoais
closeSoftSkill[0].addEventListener("click", () => {
    boxSoftSkill[0].style.display = "none";
    header.style.backgroundColor = "#0c2963";
})
closeSoftSkill[1].addEventListener("click", () => {
    boxSoftSkill[1].style.display = "none";
    header.style.backgroundColor = "#0c2963";
})
closeSoftSkill[2].addEventListener("click", () => {
    boxSoftSkill[2].style.display = "none";
    header.style.backgroundColor = "#0c2963";
})
closeSoftSkill[3].addEventListener("click", () => {
    boxSoftSkill[3].style.display = "none";
    header.style.backgroundColor = "#0c2963";
})