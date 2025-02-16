const softSkillBtn = document.getElementsByClassName("soft-skill-btn");
const closeSoftSkill = document.getElementsByClassName("close-soft-skill-btn");
const boxSoftSkill = document.getElementsByClassName("box-soft-skill");


// Mostram as caixas aonde ficam as informacoes das minhas habilidades pessoais
softSkillBtn[0].addEventListener("click", () => {
    boxSoftSkill[0].style.display = "block";
    boxSoftSkill[0].style.display = "flex";
})
softSkillBtn[1].addEventListener("click", () => {
    boxSoftSkill[1].style.display = "block";
    boxSoftSkill[1].style.display = "flex";
})
softSkillBtn[2].addEventListener("click", () => {
    boxSoftSkill[2].style.display = "block";
    boxSoftSkill[2].style.display = "flex";
})
softSkillBtn[3].addEventListener("click", () => {
    boxSoftSkill[3].style.display = "block";
    boxSoftSkill[3].style.display = "flex";
})


// Escondem as caixas aonde ficam as informacoes das minhas habilidades pessoais
closeSoftSkill[0].addEventListener("click", () => {
    boxSoftSkill[0].style.display = "none";
})
closeSoftSkill[1].addEventListener("click", () => {
    boxSoftSkill[1].style.display = "none";
})
closeSoftSkill[2].addEventListener("click", () => {
    boxSoftSkill[2].style.display = "none";
})
closeSoftSkill[3].addEventListener("click", () => {
    boxSoftSkill[3].style.display = "none";
})