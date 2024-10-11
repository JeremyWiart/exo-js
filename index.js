const lettre = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const nbr = "0123456789";
let lettrePlaque = "";
let plaque="";
let Split_1="";


function genLettre(lettre){
        for(let i=0;i<4;i++){
            lettrePlaque += lettre.charAt(Math.floor(Math.random()*lettre.length));
        }
        Split_1 = lettrePlaque.split("");
        lettrePlaque="";
        console.log(Split_1);
        return Split_1;
}

function genNbr(nbr){
    let Split_1 = genLettre(lettre);
    plaque += Split_1[0] + Split_1[1];
    plaque += "-";    
        for(let i2=0;i2<3;i2++){
            plaque += nbr.charAt(Math.floor(Math.random()*nbr.length));   
        }
    plaque += "-";
    plaque += Split_1[2] + Split_1[3];
    Split_1= new Array;  
}

let nbplaque = prompt("Entré un nombre de plaque");
    for(let i=0;i< nbplaque;i++){
        genNbr(nbr); 
    }
console.log(plaque);

