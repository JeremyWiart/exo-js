const lettre = "abcdefghijklmnopqrstuvwyxz";
let wordEntry = "banane"
let nbrEntry = 3
let newWord = ""

function decal(nbr,word){
    wordSplit = word.split('')

    for(let j = 0 ; j < wordSplit.length; j++){
        for(let i = 0 ; i < lettre.length; i++){

            if(wordSplit[j] == lettre.charAt(i)){
                console.log("la lettre : " +wordSplit[j]+ " est identique à : " + lettre.charAt(i))
                newWord +=  lettre.charAt(i+nbr)  
            }
            
        }
    }
    
console.log(wordSplit)
console.log("Mot saisie : "+wordEntry)
console.log("Mot décaler : "+newWord)
       
}decal(nbrEntry,wordEntry)



