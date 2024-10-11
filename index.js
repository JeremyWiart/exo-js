const lettre = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const nbr = "0123456789";
let lettrePlaque = "";
let plaque="";
let split_1="";


function genLettre(lettre){
        for(let i=0;i<4;i++){
            lettrePlaque += lettre.charAt(Math.floor(Math.random()*lettre.length));
        }
        split_1 = lettrePlaque.split("");
        lettrePlaque="";
        console.log(split_1);
        return split_1;
}

function genNbr(nbr){
    let split_1 = genLettre(lettre);
    plaque += split_1[0] + split_1[1];
    plaque += "-";    
        for(let i2=0;i2<3;i2++){
            plaque += nbr.charAt(Math.floor(Math.random()*nbr.length));   
        }
    plaque += "-";
    plaque += split_1[2] + split_1[3];
    split_1= new Array;  
}

let nbplaque = prompt("Entré un nombre de plaque");
    for(let i=0;i< nbplaque;i++){
        genNbr(nbr); 
    }
console.log(plaque);

