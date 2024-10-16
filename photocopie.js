const prix_1 = "0.10"
const prix_2 = "0.09"
const prix_3 = "0.08"
let prix=""
let nbrcopie = prompt("Entrez le nombre de photocopies")
let i=""
function calculephoto(){
    for(i = 1; i < nbrcopie; i++){
        if(i <= 10){
            prix = (1+i)*prix_1     
        }
        if(i > 10 && i <= 30 ){
                prix = 10*prix_1
                prix = prix + (i-9)*prix_2
            }if(i > 30){
                prix = 10*prix_1
                prix = 20*prix_2
                prix = prix + (i-29)*prix_3
            }
            
            
    }console.log(i)
    console.log(prix)
}
calculephoto()

