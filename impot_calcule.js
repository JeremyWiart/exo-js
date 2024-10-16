let ageContribuable = 25; 
let sexeContribuable = 'femme';
function imposable(age, sexe) {
    if (sexe === 'homme' && age > 18) {
        return true;
    } else if (sexe === 'femme' && age >= 18 && age <= 35) {
        return true; 
    } else {
        return false; 
    }
}


function afficher(age, sexe) {
    if (imposable(age, sexe)) {
        console.log("Le contribuable est imposable.");
    } else {
        console.log("Le contribuable n'est pas imposable.");
    }
}
afficher(ageContribuable, sexeContribuable);