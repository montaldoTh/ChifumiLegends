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
            if(botCard == null){
                botCard = Math.round(Math.random() * (3 - 1)+ 1)
            }
            if(botCard != null){
                showEnnemie()
                if(playerChoice === pierre && botCard === pierre){
                    console.log("Egalité");
                }else if(playerChoice === pierre && botCard  === ciseaux){
                    console.log("Victoire");
                }else if(playerChoice === pierre && botCard === feuille){
                    console.log("Defaite"); 
                }
            }
            
        }
        else if(parseInt(item.childNodes[5].value) == feuille){
            playerChoice = parseInt(item.childNodes[5].value)
            if(botCard == null){
                botCard = Math.round(Math.random() * (3 - 1)+ 1)
            }
            if(botCard != null){
                showEnnemie()
                if(playerChoice === feuille && botCard === pierre){
                    console.log("Victoire");
                }else if(playerChoice === feuille && botCard  === ciseaux){
                    console.log("Defaite"); 
                }else if(playerChoice === feuille && botCard === feuille){
                    console.log("Egalité");
                }
            }
            
        }
        else if(parseInt(item.childNodes[5].value) == ciseaux){
            playerChoice = parseInt(item.childNodes[5].value)
            if(botCard == null){
                botCard = Math.round(Math.random() * (3 - 1)+ 1)
            }
            if(botCard != null){
                showEnnemie()
                if(playerChoice === ciseaux && botCard === pierre){
                    console.log("Defaite"); 
                }else if(playerChoice === ciseaux && botCard  === ciseaux){
                    console.log("Egalité");
                }else if(playerChoice === ciseaux && botCard === feuille){
                    console.log("Victoire");
                }
            }
            
        }
    })
})