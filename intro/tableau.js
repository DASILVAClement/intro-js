//Les tableaux en JavaScript
console.log("Les tableaux en JavaScript")

//Déclarer un tableau
const tab = [10,20,44,12]
console.log(tab)

//Un tableau est un objet de la classe Array
console.log(tab.length)

//Accéder à un élément
console.log(tab[1])
//Accéder au dernier élément du tableau
console.log(tab[tab.length-1])

//Ajouter un élément dans le tableau (en fin de tableau)
tab.push(66)
console.log(tab)
//Ajouter un élément au début du tableau
tab.unshift(99)
console.log(tab)
//Ajouter un élément à un index spécifique du tableau
tab.splice(1,0,666)
console.log(tab)

//Parcourir un tableau
//Boucle for "classique"
for (let i = 0; i < tab.length; i++){
    console.log(tab[i])
}
//Boucle for...of
for (const nombre of tab){
    console.log(nombre)
}