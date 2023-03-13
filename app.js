const pierre = 1;
const feuille = 2;
const ciseaux = 3;

let playerChoice;
let botCard;

const jouer = document.querySelector(".nav-btn");
const app = document.querySelector("#app");

const playerValue = document.querySelectorAll("#player-card input");
const playerCard = document.querySelectorAll("#player-card");
const ennemieImg = document.querySelector(".background");
const ennemieTxt = document.querySelector(".ennemi-card .card-title");
const result = document.querySelector(".result")
const resultText = document.querySelector(".result-text")

function showEnnemie(){
    if(typeof playerChoice != "undefined"){
        if(botCard == pierre){
            ennemieTxt.innerHTML="PIERRE"
            ennemieImg.style.background="url(./assets/malaphite.jpg)"
        }else if(botCard == feuille){
            ennemieTxt.innerHTML="FEUILLE"
            ennemieImg.style.background="url(./assets/ivern.jpg)"
        }else{
            ennemieTxt.innerHTML="CISEAUX"
            ennemieImg.style.background="url(./assets/gwen.jpg)"
        }
    }
}

playerCard.forEach(item => {
    item.addEventListener("click", () => {
        if(parseInt(item.childNodes[5].value) == pierre){
            playerChoice = parseInt(item.childNodes[5].value)
            if(botCard == null || botCard == 0){
                botCard = Math.round(Math.random() * (3 - 1)+ 1)
            }
            if(botCard != null || botCard == 0){
                showEnnemie()
                if(playerChoice === pierre && botCard === pierre){
                    result.classList.add("egalite")
                    resultText.innerHTML="Egalité"
                    resultText.style.display="inline"
                    setTimeout(()=>{
                        result.classList.remove("egalite")
                        resultText.style.display="none"
                    }, 2000)
                    setTimeout(() => {
                        ennemieTxt.innerHTML=" "
                        ennemieImg.style.background="#061C25"
                    }, 2500)
                    botCard = 0;
                }else if(playerChoice === pierre && botCard  === ciseaux){
                    result.classList.add("victoire")
                    resultText.innerHTML="Victoire"
                    resultText.style.display="inline"
                    setTimeout(()=>{
                        result.classList.remove("victoire")
                        resultText.style.display="none"
                    }, 2000)
                    setTimeout(() => {
                        ennemieTxt.innerHTML=" "
                        ennemieImg.style.background="#061C25"
                    }, 2500)
                    botCard = 0;
                }else if(playerChoice === pierre && botCard === feuille){
                    result.classList.add("defaite")
                    resultText.innerHTML="Défaite"
                    resultText.style.display="inline"
                    setTimeout(()=>{
                        result.classList.remove("defaite")
                        resultText.style.display="none"
                    }, 2000)
                    setTimeout(() => {
                        ennemieTxt.innerHTML=" "
                        ennemieImg.style.background="#061C25"
                    }, 2500)
                    botCard = 0;
                }
            }
            
        }
        else if(parseInt(item.childNodes[5].value) == feuille){
            playerChoice = parseInt(item.childNodes[5].value)
            if(botCard == null || botCard == 0){
                botCard = Math.round(Math.random() * (3 - 1)+ 1)
            }
            if(botCard != null || botCard == 0){
                showEnnemie()
                if(playerChoice === feuille && botCard === pierre){
                    result.classList.add("victoire")
                    resultText.innerHTML="Victoire"
                    resultText.style.display="inline"
                    setTimeout(()=>{
                        result.classList.remove("victoire")
                        resultText.style.display="none"
                    }, 2000)
                    setTimeout(() => {
                        ennemieTxt.innerHTML=" "
                        ennemieImg.style.background="#061C25"
                    }, 2500)
                    botCard = 0;
                }else if(playerChoice === feuille && botCard  === ciseaux){
                    result.classList.add("defaite")
                    resultText.innerHTML="Défaite"
                    resultText.style.display="inline"
                    setTimeout(()=>{
                        result.classList.remove("defaite")
                        resultText.style.display="none"
                    }, 2000)
                    setTimeout(() => {
                        ennemieTxt.innerHTML=" "
                        ennemieImg.style.background="#061C25"
                    }, 2500)
                    botCard = 0;
                }else if(playerChoice === feuille && botCard === feuille){
                    result.classList.add("egalite")
                    resultText.innerHTML="Egalité"
                    resultText.style.display="inline"
                    setTimeout(()=>{
                        result.classList.remove("egalite")
                        resultText.style.display="none"
                    }, 2000)
                    setTimeout(() => {
                        ennemieTxt.innerHTML=" "
                        ennemieImg.style.background="#061C25"
                    }, 2500)
                    botCard = 0;
                }
            }
            
        }
        else if(parseInt(item.childNodes[5].value) == ciseaux){
            playerChoice = parseInt(item.childNodes[5].value)
            if(botCard == null || botCard == 0){
                botCard = Math.round(Math.random() * (3 - 1)+ 1)
            }
            if(botCard != null || botCard == 0){
                showEnnemie()
                if(playerChoice === ciseaux && botCard === pierre){
                    result.classList.add("defaite")
                    resultText.innerHTML="Défaite"
                    resultText.style.display="inline"
                    setTimeout(()=>{
                        result.classList.remove("defaite")
                        resultText.style.display="none"
                    }, 2000)
                    setTimeout(() => {
                        ennemieTxt.innerHTML=" "
                        ennemieImg.style.background="#061C25"
                    }, 2500)
                    botCard = 0;
                }else if(playerChoice === ciseaux && botCard  === ciseaux){
                    result.classList.add("egalite")
                    resultText.innerHTML="Egalité"
                    resultText.style.display="inline"
                    setTimeout(()=>{
                        result.classList.remove("egalite")
                        resultText.style.display="none"
                    }, 2000)
                    setTimeout(() => {
                        ennemieTxt.innerHTML=" "
                        ennemieImg.style.background="#061C25"
                    }, 2500)
                    botCard = 0;
                }else if(playerChoice === ciseaux && botCard === feuille){
                    result.classList.add("victoire")
                    resultText.innerHTML="Victoire"
                    resultText.style.display="inline"
                    setTimeout(()=>{
                        result.classList.remove("victoire")
                        resultText.style.display="none"
                    }, 2000)
                    setTimeout(() => {
                        ennemieTxt.innerHTML=" "
                        ennemieImg.style.background="#061C25"
                    }, 2500)
                    botCard = 0;
                }
            }
            
        }
    })
})