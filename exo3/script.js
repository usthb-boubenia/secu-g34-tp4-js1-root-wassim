"use strict";

// TP4 - Exercice 3
// Système de délibération pour étudiants

// Données des étudiants sous forme de tableaux (slide 50)
// Structure: [ID, Prénom, Nom, Note1, Note2]
const students = [
    [1000, "JOHN", "DOE", 14, 5],
[2000, "BOB", "CARLTON", 7, 1],
[3000, "RAYANE", "SMITH", 13, 3]
];

// Fonction B: Vérifie si un étudiant est admis (moyenne >= 10)
// Concept: Fonction avec paramètre (slide 60)
// Concept: Type de retour booléen (slide 62)
// Concept: Opérateurs de comparaison (slide 36)
// Paramètre: moyenne (type float) - la moyenne de l'étudiant
// Retourne: boolean - true si admis (moyenne >= 10), false sinon
function estAdmis(moyenne) {
    // Condition pour vérifier si la moyenne est supérieure ou égale à 10 (slide 42)
    // Opérateur >= pour la comparaison (slide 36)
    return moyenne >= 10; // Retour d'un booléen (slide 62)
}

// Fonction A (deliberation): Traite tous les étudiants et affiche les résultats
// Concept: Fonction principale (slide 60)
// Concept: Appel de fonction (slide 61)
// Concept: Boucle for pour parcourir un tableau (slide 45, 53)
function deliberation() {
    console.log("=== DÉLIBÉRATION DES ÉTUDIANTS ===\n");

    // Parcours du tableau students avec une boucle for (slide 45)
    for (let i = 0; i < students.length; i++) {
        // Accès aux éléments du tableau par index (slide 51)
        let id = students[i][0];       // ID de l'étudiant
        let prenom = students[i][1];   // Prénom
        let nom = students[i][2];      // Nom
        let note1 = students[i][3];    // Première note
        let note2 = students[i][4];    // Deuxième note

        // Calcul de la moyenne (slide 33)
        // Opérateur d'addition (+) et division (/) (slide 33)
        let moyenne = (note1 + note2) / 2;

        // Appel de la fonction B (estAdmis) avec la moyenne (slide 61)
        // La fonction retourne un booléen (slide 62)
        let admis = estAdmis(moyenne);

        // Affichage des informations de l'étudiant (slide 30)
        console.log("ID: " + id);
        console.log("Nom: " + prenom + " " + nom); // Concaténation de chaînes (slide 28)
        console.log("Note 1: " + note1);
        console.log("Note 2: " + note2);
        console.log("Moyenne: " + moyenne);

        // Condition if/else pour afficher le résultat (slide 42)
        if (admis) {
            console.log("Résultat: ADMIS");
        } else {
            console.log("Résultat: REFUSÉ");
        }

        // Ligne vide pour séparer les étudiants
        console.log("");
    }

    console.log("=== FIN DE LA DÉLIBÉRATION ===");
}

// Message de confirmation du chargement du script
console.log("Script.js chargé avec succès - Exercice 3");
console.log("Cliquez sur le bouton 'Délibération' pour lancer le traitement\n");
