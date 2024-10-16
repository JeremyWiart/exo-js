const lettre = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const nbr = "0123456789";
let lettrePlaque = "";
let plaque="";
let split_1="";


function genLettre(lettre){
        for(let i=0;i<4;i++){
            lettrePlaque += lettre.charAt(Math.floor(Math.random()*lettre.length));
            // genere 4 lettres aleatoirement
        }
        split_1 = lettrePlaque.split("");// stock les 4 lettres separement dans un array
        lettrePlaque="";//vide la variable pour une prochaine utilisation
        return split_1;//retourne l'array pour l'appel dans une fonction
}

function genNbr(nbr){
    let split_1 = genLettre(lettre); //appel et stockage fonction
    plaque += split_1[0] + split_1[1];//rassemble le deux première lettre de la plaque et ajout
    plaque += "-";//ajout du separateur pour la plaque 
        for(let i2=0;i2<3;i2++){
            plaque += nbr.charAt(Math.floor(Math.random()*nbr.length));
            //genere 3 chiffres aleatoirement   
        }
    plaque += "-";
    plaque += split_1[2] + split_1[3] + " <|> ";//rassemble et ajoute les deux dernieres lettre
    split_1= new Array;//vide l'array
}



let nbplaque = prompt("Entré un nombre de plaque");//affiche de la saisie au clavier
    for(let i=0;i< nbplaque;i++){
        genNbr(nbr);
        //itaire le nombre de plaque voulu et saisi dans le prompt
    }
console.log(plaque);

function addElement(){
       
        let newContent = document.createTextNode(plaque);
        //creer le node et insert les plaques dans une variable
        let parentDiv = document.getElementById("plaques");
        //recupere la div parent du ficher HTML 
        let childDiv = document.createElement("div");
        //creer une div pour stocker les plaques
        childDiv.appendChild(newContent);
        //ratache les plaques a la div creer
        parentDiv.appendChild(childDiv);
        //ratache la div creer à la div parent du fichier HTML
        console.log(childDiv);
}document.body.onload = addElement;//charge la fonction des l'appel de la page