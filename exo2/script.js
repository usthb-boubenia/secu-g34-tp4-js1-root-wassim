"use strict";

// TP4 - Exercice 2
// Manipulation de tableaux et chaînes de caractères

// Fonction F1: Manipulation de tableau
// Concept: Déclaration de tableau (slide 50)
// Concept: Méthodes de tableau push, pop (slide 52)
// Concept: Propriété length (slide 51)
function f1() {
    console.log("=== F1: Manipulation de tableau ===");

    // Déclaration et initialisation d'un tableau (slide 50)
    let nombres = [10, 20, 30, 40, 50];
    console.log("Tableau initial:", nombres);

    // Ajout d'un élément à la fin avec push() (slide 52)
    nombres.push(60);
    console.log("Après push(60):", nombres);

    // Suppression du dernier élément avec pop() (slide 52)
    let dernierElement = nombres.pop();
    console.log("Élément supprimé:", dernierElement);
    console.log("Après pop():", nombres);

    // Affichage de la longueur du tableau avec length (slide 51)
    console.log("Longueur du tableau:", nombres.length);

    // Parcours du tableau avec une boucle for (slide 45, 53)
    console.log("Éléments du tableau:");
    for (let i = 0; i < nombres.length; i++) {
        console.log("Index " + i + ": " + nombres[i]);
    }
    console.log(""); // Ligne vide pour la lisibilité
}

// Fonction F2: Traitement de chaînes de caractères
// Concept: Chaînes de caractères (slide 27)
// Concept: Méthodes de chaînes (slide 29)
// Concept: Propriété length pour les chaînes (slide 28)
function f2() {
    console.log("=== F2: Traitement de chaînes ===");

    // Déclaration de chaînes de caractères (slide 27)
    let prenom = "Mohamed";
    let nom = "BOUBENIA";

    // Concaténation de chaînes (slide 28)
    let nomComplet = prenom + " " + nom;
    console.log("Nom complet:", nomComplet);

    // Utilisation de length pour obtenir la longueur (slide 28)
    console.log("Longueur du nom complet:", nomComplet.length);

    // Conversion en majuscules avec toUpperCase() (slide 29)
    console.log("En majuscules:", nomComplet.toUpperCase());

    // Conversion en minuscules avec toLowerCase() (slide 29)
    console.log("En minuscules:", nomComplet.toLowerCase());

    // Extraction d'une sous-chaîne avec substring() (slide 29)
    let sousChaine = nomComplet.substring(0, 7);
    console.log("Sous-chaîne (0-7):", sousChaine);

    console.log(""); // Ligne vide pour la lisibilité
}

// Fonction F3: Opérations avancées sur tableaux
// Concept: Boucles for (slide 45)
// Concept: Conditions if/else (slide 42)
// Concept: Opérateurs de comparaison (slide 36)
// Concept: Tableaux (slide 50)
function f3() {
    console.log("=== F3: Opérations avancées ===");

    // Création d'un tableau de nombres (slide 50)
    let valeurs = [15, 8, 23, 42, 4, 16, 11, 30];
    console.log("Tableau de valeurs:", valeurs);

    // Calcul de la somme des éléments (slide 45, 40)
    let somme = 0;
    for (let i = 0; i < valeurs.length; i++) {
        somme += valeurs[i]; // Opérateur += (slide 35)
    }
    console.log("Somme des éléments:", somme);

    // Calcul de la moyenne (slide 33)
    let moyenne = somme / valeurs.length; // Division (slide 33)
    console.log("Moyenne:", moyenne);

    // Recherche du maximum (slide 42, 45)
    let maximum = valeurs[0]; // Initialisation avec le premier élément
    for (let i = 1; i < valeurs.length; i++) {
        if (valeurs[i] > maximum) { // Condition if (slide 42)
            maximum = valeurs[i];
        }
    }
    console.log("Maximum:", maximum);

    // Recherche du minimum (slide 42, 45)
    let minimum = valeurs[0];
    for (let i = 1; i < valeurs.length; i++) {
        if (valeurs[i] < minimum) { // Opérateur < (slide 36)
            minimum = valeurs[i];
        }
    }
    console.log("Minimum:", minimum);

    // Comptage des nombres pairs (slide 42, 37)
    let nombrePairs = 0;
    for (let i = 0; i < valeurs.length; i++) {
        if (valeurs[i] % 2 === 0) { // Opérateur modulo % (slide 37)
            nombrePairs++;
        }
    }
    console.log("Nombre de valeurs paires:", nombrePairs);

    console.log(""); // Ligne vide pour la lisibilité
}

// Message de confirmation du chargement du script
console.log("Script.js chargé avec succès - Exercice 2");
console.log("Cliquez sur les boutons pour exécuter les fonctions\n");
