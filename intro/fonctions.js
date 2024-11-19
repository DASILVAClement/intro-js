//Les fonctions en JavaScript
console.log("Les fonctions en JavaScript")

//Fonctions "classiques"
function addition1(a,b){
    return a + b
}
console.log(addition1(2,3))

//Fonction anonymes (ne portent pas de nom explicite)
const addition2 = function (a,b){
    return a + b
}
console.log(addition2(2,3))

//Fonctions fléchées (arrow functions -> ES6)
const addition3 = (a,b) => {
    return a + b
}
console.log(addition3(2,3))

//Si la fonction possède une seule instruction (return implicite)
const addition4 = (a,b) => a+b
console.log(addition4(2,3))

//Si la fonction possède un seul paramètre
const puissance2 = a => a*a
console.log(puissance2(9))

//Si la fonction ne possède aucun paramtre
const salut = () => console.log("Salut à tous !")
salut()

//Portée des variables dans les fonctions
//une variable définie en dehors de toute fonction à une portée globale et est accessible partout dans le code
let variableGlobale = 10
const afficherVariable = () => console.log(variableGlobale)
afficherVariable()

//Fonctions fléchées et tableaux
let nombres = [2,8,15,17,9,42,4]
//Afficher tous les nombres pairs
for (const nombre of nombres) {
    if (nombre % 2 === 0){
        console.log(nombre)
    }
}

//Afficher tous les nombres pairs avec la méthode foreach
nombres.forEach(nombre => {
    if (nombre % 2 === 0)
        console.log(nombre)
})

//Récupérer dans un tableau tous les nombres > 10 puis les afficher
const nombresSup10 = []
for (const nombre of nombres) {
    if (nombre > 10){
        nombresSup10.push(nombre)
    }
}
nombresSup10.forEach(nombre => console.log(nombre))

//Récupérer dans un tableau tous les nombres > 10 puis les afficher avec la méthode filter
const nombresSup10Filter = nombres.filter(nombre => nombre > 10)
nombresSup10Filter.forEach(nombre =>console.log(nombre))
//Amélioration
nombres
    .filter(nombre => nombre > 10)
    .forEach(nombre => console.log(nombre))

//Récupérer dans un tableau les nombres à la puissance 2 et les afficher
let nombresPuissance2 = []
for (const nombre of nombres) {
    nombresPuissance2.push((nombre*nombre))
}
nombresPuissance2.forEach(nombre => console.log(nombre))
//Méthode alternative avec map
nombres
    .map(nombre => nombre * nombre)
    .forEach(nombre => console.log(nombre))

//Exemple
const prixHT = [15,18,26,89,75,125]
//Afficher tous les prix TTC supérieurs à 100 euros (TVA = 20%)
prixHT
    .map(prix => prix * 1.2)
    .filter(prixTTC => prixTTC > 100)
    .forEach(prixTTC => console.log(prixTTC))

//Calculer et afficher la somme des prix TTC
let sommePrixTCC = prixHT
    .map(prix => prix * 1.2)
    .reduce((somme, prixTTC) => somme + prixTTC, 0)
console.log(sommePrixTCC)
