import wordsList from "./motmot.js"

console.log(wordsList)

let motATrouver = ""
let motTrouve = []
let erreursCommises = 0
let erreursAutorisees = 7
let lettresDevinees = []
let bonneLettre = 0

function getCookies (nom) {
  nom = nom + "=";
  var liste = document. cookie. split (';');
  for (var i = 0; i < liste.length; i++) {
    var c = liste[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nom) == 0) return c.substring(nom.length, c.length);
  }
  return null;
}


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
    potence.innerHTML = "<img alt=\"potence\" src=\"pendu_"+i+".png\"></img>"
    document.cookie = "score  = " + erreursCommises
    let score = getCookies('score')
    console.log(score)
  }
}


function verifierLettre(lettre) {
  if (lettresDevinees.includes(lettre)) {
    alert("lettre déjà trouver !")
    console.log(lettre)
    return
  }
  bonneLettre = false
  lettresDevinees.push(lettre);
  
  
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

document.getElementById("bouton_rejouez").addEventListener("click", function() {
  document.getElementById("lettre").disabled = false
  document.getElementById("bouton").disabled = false
  erreursCommises = 0
  motTrouve = []
  lettresDevinees = []
  bonneLettre = false
  motATrouver = ""
  document.getElementById("erreurs").textContent = "Erreurs : " + erreursCommises + "/" + erreursAutorisees
  document.getElementById("resultat").textContent = ""
  potence.innerHTML = ""
  choisirMot()
  afficherMot()
})


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