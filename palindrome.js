function estPalindrome() {
    
    let mot = prompt("Entrez un mot :");
    
    mot = mot.replace(/\s+/g, '').toLowerCase();
   
    let motInverse = mot.split('').reverse().join('');

    if (mot === motInverse) {
        console.log(true);
    } else {
        console.log(false);
    }
}

estPalindrome();