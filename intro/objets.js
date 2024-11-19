console.log("Les objets en JavaScript")

//Créer un objet
const personne1 = {
    nom: "Dupond",
    prenoms: ["Jean", "Pierre"],
    age: 30,
    adresse: {
        rue: "20 rue de la gare",
        codePostal: 25000,
        ville: "Besançon"
    }
}

//Accéder aux propriétés d'un objet
console.log(personne1)
console.log(personne1.nom)
console.log(personne1['nom'])
console.log(personne1.adresse.ville)
console.log(personne1.prenoms)
console.log(personne1.prenoms[0])

//Combiner les objets et les tableaux
const personnes = [
    {prenom: "Jean", nom: "Dupond", age: 50},
    {prenom: "Pierre", nom: "Feuille", age: 22},
    {prenom: "Anne", nom: "Claire", age: 5}
]

//Afficher le nom de toutes les personnes en majuscules
console.log("Afficher le nom de toutes les personnes en majuscules :");
personnes.forEach(personne => console.log(personne.nom.toUpperCase()))

//Récupérer dans un tableau l'identité de chaque personne sous la forme "prénom nom"
console.log('Récupérer dans un tableau l\'identité de chaque personne sous la forme "prénom nom" :')
let tableauIdentites = personnes.map(personne => `${personne.prenom} ${personne.nom}`)
console.log(tableauIdentites)

//Afficher les noms de toutes les personnes majeures
console.log("Afficher les noms de toutes les personnes majeures :")
personnes
    .filter(personne => personne.age >= 18)
    .forEach(personne => console.log(personne.nom));

//Calculer et afficher la moyenne d'âge des personnes
console.log("Calculer et afficher la moyenne d'âge des personnes :")
let moyenneAge = personnes
    .map(personne => personne.age)
    .reduce((ages, age) => ages + age, 0) / personnes.length
console.log(Math.round(moyenneAge))

//Ajouter une nouvelle personne
console.log("Ajouter une nouvelle personne :");
personnes.push({prenom: "Lucie", nom: "Martin", age: 27})
personnes.forEach(personnes => console.log(personnes.prenom))

//Trouver la personne la plus âgée (renvoie l'objet)
console.log("Trouver la personne la plus âgée (renvoie l'objet) :")
let personnePlusAgee = personnes
    .reduce((personnePlusAgee, personne) => {
        if (personne.age > personnePlusAgee.age){
            return personne
        }
        return personnePlusAgee
    },personnes[0])
console.log(personnePlusAgee)

//Lister les prénoms triés par ordre alphabétique
console.log("Lister les prénoms triés par ordre alphabétique :")

//Compter le nombre de mineurs et de majeurs
console.log("Compter le nombre de mineurs et de majeurs :")
let nbMajeurs = personnes
    .filter(personnes => personnes.age >= 18)
console.log(`Il y a ${nbMajeurs.length} majeurs et ${personnes.length - nbMajeurs.length} mineurs`)

//Vérifier si tout le monde est majeur
console.log("Vérifier si tout le monde est majeur :")

//Rechercher une personne par prénom

//Supprimer une personne spécifique par son nom

//Trouver l'âge moyen des personnes majeures

//Vérifier si aux moins une personne a un prénom commençant par 'J'