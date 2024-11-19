//Les variables en JavaScript
console.log("Cours JavaScript")

//Déclaration d'une variable
let a = 10
console.log(a)
a = 20
console.log(a)
let b
console.log(b) //Undefined

//Déclaration d'une constance
const c = 10
console.log(10)
//const b -> erreur

//Déclaration d'une chaine de caractère
let promotion = "BTS SIO 2"
console.log(promotion)

//Immutabilité des chaines
let prenom = "john"
console.log(prenom)
prenom[0] = "J"
console.log(prenom)

//Boxing
//C'est le processus par lequel une valeur primitive (nombre, chaine, booléen) est temporairement convertie en objet
//afin de permettre l'utilisation de méthodes

//Boxing sur les nombres (classe Number)
let nombre = 20
let resultat = nombre.toFixed(2)
console.log(resultat)

//Boxing sur les chaines (classe String)
let str = "hello"
console.log(str.toUpperCase())
let str2 = new String("hello")

//Concaténation de chaines
let ch1 = "Bonjour "
let ch2 = "tout le monde !"
let message = ch1 + ch2
console.log(message)
ch1 = "3"
ch2 = "7"
message = ch1 + ch2
console.log(message) //37

//Template literals `` (backsticks)
let nom = "Pierre"
let age = 30
let presentation = `Je m'appelle ${nom} et j'ai ${age} ans`
console.log(presentation)

