// escolher personagem aleatória
const answer = characters[Math.floor(Math.random() * characters.length)]

document.getElementById("silhouette").src = answer.image

let attempts = 0
let gameOver = false
let firstGuess = true;

const input = document.getElementById("guessInput")
const suggestions = document.getElementById("suggestions")

let selectedIndex = -1;

//Função para comparar os elementos do palpite com os do personagem resposta
function checkElements(guessElements, answerElements){

const comuns = guessElements.filter(e =>
answerElements.includes(e)
)

if(comuns.length === answerElements.length && guessElements.length === answerElements.length){
return "🟩"
}

if(comuns.length > 0){
return comuns.join(", ")
}

return "🟥"

}

// função para processar o palpite
function submitGuess(){

if(firstGuess){
document.querySelector(".guess-header").style.display = "grid";
document.getElementById("results").style.display = "block";
firstGuess = false;
}

if(gameOver){
return
}

const guessName = document.getElementById("guessInput").value.trim()

if(!guessName){
return
}

const guess = characters.find(c =>
c.name.toLowerCase() === guessName.toLowerCase()
)

if(!guess){
alert("Please choose a character from the list.")
return
}

// limpar input e sugestões
document.getElementById("guessInput").value = "";
document.getElementById("suggestions").innerHTML = "";
document.getElementById("guessInput").focus();

attempts++

function checkAttr(a,b){
return a === b ? "✅" : "❌";
}

let genero = checkAttr(guess.genero, answer.genero);
let vila = checkAttr(guess.Vila, answer.Vila);
let jutsu = checkAttr(guess.jutsu, answer.jutsu);
let elementos = checkElements(guess.elementos, answer.elementos);

document.getElementById("results").innerHTML += `
<div class="guess-row">
<span class="col-name"><b>${guess.name}</b></span>
<span>${genero}</span>
<span>${vila}</span>
<span>${jutsu}</span>
<span>${elementos}</span>
</div>
`;

// revelar parte da silhueta a cada tentativa
let revealLevel = attempts * 0.15;
document.getElementById("silhouette").style.filter =
`brightness(${revealLevel})`;

if(guess.name === answer.name){

gameOver = true


// revelar totalmente a imagem
document.getElementById("silhouette").style.filter = "brightness(1)";

// mensagem de vitória
document.getElementById("message").innerHTML =
"🎉 Parabéns! Você acertou <b>" + answer.name + "</b> em " + attempts + " tentativa(s)!";


// desabilitar input e botão
document.getElementById("guessInput").disabled = true
document.getElementById("guessBtn").disabled = true


// mostrar botão de reiniciar
document.getElementById("restartBtn").style.display = "block"

}

if(attempts >= 6){
alert("Game Over! The answer was " + answer.name)

document.getElementById("guessInput").disabled = true
document.getElementById("guessBtn").disabled = true
document.getElementById("restartBtn").style.display = "block"
}
}

//Ser capaz de navegar entre as opções com TAB
input.addEventListener("keydown", function(event){

const items = document.querySelectorAll(".suggestion")

if(event.key === "Tab"){
event.preventDefault()

selectedIndex++

if(selectedIndex >= items.length){
selectedIndex = 0
}

updateSelection(items)
}
//Usar enter para selecionar a opção e enviar o palpite
if(event.key === "Enter"){

if(selectedIndex >= 0){
event.preventDefault()
input.value = items[selectedIndex].innerText
suggestions.innerHTML = ""
selectedIndex = -1
}

submitGuess()
}

})

//Highlight da opção selecionada com TAB
function updateSelection(items){

items.forEach(item => item.classList.remove("selected"))

if(items[selectedIndex]){
items[selectedIndex].classList.add("selected")
}

}

input.addEventListener("input", function(){

const value = input.value.toLowerCase()

suggestions.innerHTML = ""

if(value.length === 0){
return
}

let count = 0

characters.forEach(character => {

if(character.name.toLowerCase().includes(value) && count < 5){

const div = document.createElement("div")
div.classList.add("suggestion")
div.innerText = character.name

div.onclick = function(){
input.value = character.name
suggestions.innerHTML = ""
}

suggestions.appendChild(div)

count++

}

})

})

/*Reiniciar o jogo*/
function restartGame(){

firstGuess = true;

document.querySelector(".guess-header").style.display = "none";
document.getElementById("results").style.display = "none";


location.reload()
}

