const categorie = ['A','B','C','D']
const ageLimite = 25
const permisProba = 2
let categ =""

let age = prompt("Entrez votre age : ex: 34")
let permisDepuis = prompt("Permis en années : ex: 2")
let accident = prompt("Avez-vous déjà un accident : oui/non")
let nbrAccident = prompt("Combien avez-vous eu d'accident : ex: 4")
let responsable = prompt("Avez-eu un accident responsable : oui/non")



function recupInfoConduct(age,permisDepuis,accident,nbrAccident,responsable){
    console.log("vous avez : " +age+ " ans")
    console.log("vous avez le permis depuis : " +permisDepuis+ " ans")
    console.log("vous avez déjà eu un accident : " +accident)
    console.log("vous avez eu : " +nbrAccident+ " accident ")
    console.log("vous avez déjà eu un accident responsable: " +responsable)

}recupInfoConduct(age,permisDepuis,accident,nbrAccident,responsable)

function calculeTarif(age,permisDepuis,accident,nbrAccident,responsable){
    let stats = ""
    if(age < ageLimite && permisDepuis < permisProba && responsable == "non"){
        categ = categorie[3]
        stats = "accepter"
    }else{stats = "refuser"}

    if(age < ageLimite && permisDepuis >= permisProba || age >= ageLimite && permisDepuis < permisProba){
        if(accident == "non"){
            categ = categorie[2]
            stats = "accepter"
        }else{
            categ = categorie[3]
            stats = "accepter"
        }
    }else{stats = "refuser"}

    if(age > ageLimite && permisDepuis >= permisProba){
        if(nbrAccident == 0){
            categ = categorie[1]
            stats = "accepter"
        }else if(nbrAccident == 1){
            categ = categorie[2]
            stats = "accepter"
        }else if(nbrAccident == 2){
            categ = categorie[3]
            stats = "accepter"
        }else{stats = "refuser"}

    }
    
    console.log(stats,categ)

}calculeTarif(age,permisDepuis,accident,nbrAccident,responsable)

/*function addElement(){
       
    let ageContent = document.createTextNode(age);
    //creer le node et insert les plaques dans une variable
    let parentDiv = document.getElementById("client");
    //recupere la div parent du ficher HTML 
    let childTable = document.createElement("table");
    let childTr = document.createElement("tr");
    let childTd = document.createElement("td");
        childTd.setAttribute("class", "bg-blue-500 text-white border-2 border-black")
    //creer un tableau pour stocker les clients
        //childTd.appendChild(ageContent);
        childTr.appendChild(childTd);
        childTable.appendChild(childTr);
    //ratache les elements enfant à leur parent
        parentDiv.appendChild(childTable);
    //ratache le tableau creer à la div parent du fichier HTML
        console.log(childTable);
}document.body.onload = addElement;//charge la fonction des l'appel de la page*/