import wordsList from "./motmot.js"

console.log(wordsList)

let motATrouver = ""
let motTrouve = []
let erreursCommises = 0
let erreursAutorisees = 10
let lettresDevinees = []


function choisirMot() {
  const indexAleatoire = Math.floor(Math.random() * wordsList.length)
  motATrouver = wordsList[indexAleatoire]
  motTrouve = Array(motATrouver.length).fill("_")
  console.log(motTrouve)
}


function afficherMot() {
  document.getElementById("mot").textContent = motTrouve.join(" ")
}


function afficherPotence() {
  document.getElementById("erreurs").textContent = "Erreurs : " + erreursCommises + "/" + erreursAutorisees

  let potence = document.getElementById("potence")
  potence.innerHTML = "" 
  for (let i = 0; i < erreursCommises; i++) {
    potence.innerHTML += "<div>Potence " + (i + 1) + "</div>";
  }
}


function verifierLettre(lettre) {
  if (lettresDevinees.includes(lettre)) {
    alert("lettre déjà trouver !")
    console.log(lettre)
    return
  }
  
  lettresDevinees.push(lettre);
  
  let bonneLettre = false;
  console.log(bonneLettre)
  for (let i = 0; i < motATrouver.length; i++) {
    if (motATrouver[i] === lettre) {
      motTrouve[i] = lettre
      bonneLettre = true
    }
  }

  if (!bonneLettre) {
    erreursCommises++
    afficherPotence()
  }

  afficherMot()
  verifierFinDeJeu()
}


function verifierFinDeJeu() {
  if (!motTrouve.includes("_")) {
    document.getElementById("resultat").textContent = "vous avez gagné !"
    desactiverJeu()
  } else if (erreursCommises >= erreursAutorisees) {
    document.getElementById("resultat").textContent = "vous avez perdu. Le mot était : " + motATrouver
    desactiverJeu()
  }
}


function desactiverJeu() {
  document.getElementById("lettre").disabled = true
  document.getElementById("bouton").disabled = true
}


document.getElementById("bouton").addEventListener("click", function() {
  const lettre = document.getElementById("lettre").value.toLowerCase()
  if (lettre && lettre.length === 1) {
    verifierLettre(lettre)
    document.getElementById("lettre").value = "" 
  }
});


choisirMot()
afficherMot()
afficherPotence()