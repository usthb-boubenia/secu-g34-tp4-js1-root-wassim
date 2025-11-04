"use strict";

// TP4 - Exercice 1
// Fonctions JavaScript de base

// Fonction F1: Afficher les nombres de 1 à 10
// Concept: Boucle for (slide 45)
// Concept: console.log() pour l'affichage (slide 30)
function f1() {
    console.log("=== F1: Nombres de 1 à 10 ===");
    // Utilisation d'une boucle for pour itérer de 1 à 10 (slide 45)
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    console.log(""); // Ligne vide pour la lisibilité
}

// Fonction F2: Afficher les nombres pairs de 0 à 20
// Concept: Boucle for avec incrément de 2 (slide 45)
// Concept: Opérateur d'incrémentation (slide 35)
function f2() {
    console.log("=== F2: Nombres pairs de 0 à 20 ===");
    // Boucle for avec incrément de 2 pour obtenir les nombres pairs (slide 45)
    for (let i = 0; i <= 20; i += 2) {
        console.log(i);
    }
    console.log(""); // Ligne vide pour la lisibilité
}

// Fonction F3: Afficher les nombres impairs de 1 à 19
// Concept: Boucle for avec incrément de 2 (slide 45)
// Concept: Initialisation de variable (slide 25)
function f3() {
    console.log("=== F3: Nombres impairs de 1 à 19 ===");
    // Boucle for commençan à 1 avec incrément de 2 pour les nombres impairs(slide 45)
    for (let i = 1; i <= 19; i += 2) {
        console.log(i);
    }
    console.log(""); // Ligne vide pour la lisibilité
}

// Fonction F4: Calculer et afficher la somme de 1 à 100
// Concept: Boucle for (slide 45)
// Concept: Accumulateu (slide 40)
// Concept: Opérateur d'addition et assignation (slide 35)
function f4() {
    console.log("=== F4: Somme de 1 à 100 ===");
    let somme = 0; // Initialisation de l'accumulateur (slide 40)
    // Boucle for pour calculer la somme (slide 45)
    for (let i = 1; i <= 100; i++) {
        somme += i; // Addition et assignation (slide 35)
    }
    console.log("La somme de 1 à 100 est: " + somme);
    console.log(""); // Ligne vide pour la lisibilité
}

// Fonction F5: Afficher la table de multiplication de 7
// Concept: Boucle for (slide 45)
// Concept: Opérateur de multiplication (slide 33)
// Concept: Concaténation de chaînes (slide 28)
function f5() {
    console.log("=== F5: Table de multiplication de 7 ===");
    // Boucle for pour générer la table de multiplication (slide 45)
    for (let i = 1; i <= 10; i++) {
        let resultat = 7 * i; // Multiplication (slide 33)
        // Concaténation de chaînes pour l'affichage (slide 28)
        console.log("7 x " + i + " = " + resultat);
    }
    console.log(""); // Ligne vide pour la lisibilité
}

// Fonction F6:Afficher les nombres de 10 à 1(ordre décroissant)
// Concept: Boucle for décroissante (slide 45)
// Concept: Opérateur de décrémentation (slide 35)
function f6() {
    console.log("=== F6: Nombres de 10 à 1 (décroissant) ===");
    // Boucle for décroissante avec décrémentation (slide 45)
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
    console.log(""); // Ligne vide pour la lisibilité
}

// Message de confirmation du chargement du script
console.log("Script.js chargé avec succès - Exercice 1");
console.log("Cliquez sur les boutons pour exécuter les fonctions\n");
