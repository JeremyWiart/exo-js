let towers = [
    [3, 2, 1], // Tour 1
    [],        // Tour 2
    []         // Tour 3
];

// Fonction pour afficher l'état actuel des tours
function printTowers() {
    console.log("Tour 1:", towers[0]);
    console.log("Tour 2:", towers[1]);
    console.log("Tour 3:", towers[2]);
    console.log("---------------------");
}

// Fonction pour déplacer un disque d'une tour à une autre
function moveDisc(from, to) {
    if (towers[from].length === 0) {
        console.log("La tour", from + 1, "est vide. Déplacement impossible.");
        return false;
    }

    const disc = towers[from][towers[from].length - 1]; // Dernier disque de la tour d'origine

    // Vérifier si le mouvement est valide
    if (towers[to].length === 0 || towers[to][towers[to].length - 1] > disc) {
        towers[from].pop();  // Retirer le disque de la tour d'origine
        towers[to].push(disc); // Ajouter le disque à la tour cible
        console.log(`Déplacement du disque ${disc} de la tour ${from + 1} vers la tour ${to + 1}`);
        return true;
    } else {
        console.log("Déplacement invalide. Un disque plus grand ne peut pas être placé sur un disque plus petit.");
        return false;
    }
}

// Fonction pour vérifier si le joueur a gagné
function checkWin() {
    if (towers[2].length === 3) {
        console.log("Félicitations ! Vous avez résolu les Tours d'Hanoï !");
        return true;
    }
    return false;
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    towers = [
        [3, 2, 1], // Remettre tous les disques sur la première tour
        [],
        []
    ];
    console.log("Le jeu a été réinitialisé.");
    printTowers();
}

// Fonction principale pour jouer
function play(from, to) {
    if (moveDisc(from - 1, to - 1)) { // Appel de la fonction de déplacement
        printTowers();
        if (checkWin()) {
            console.log("Le jeu est terminé.");
        }
    }
}

// Instructions pour l'utilisateur
console.log("Bienvenue dans le jeu des Tours d'Hanoï !");
console.log("Instructions : Utilisez la fonction `play(from, to)` pour déplacer un disque d'une tour à une autre.");
console.log("Par exemple, pour déplacer un disque de la tour 1 vers la tour 3, tapez `play(1, 3)`.");
console.log("Le but est de déplacer tous les disques vers la tour 3.");
printTowers();