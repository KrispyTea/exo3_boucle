let multiplicateur = 5
for (let i=0; i <=9; i++)
    console.log(multiplicateur + " x " + i + " = " + multiplicateur*i)

let multiplicateurr = 5
for (let i=0; i <=9; i+=2)
    console.log(multiplicateurr + " x " + i + " = " + multiplicateurr*i)

let twenty = 20
for (let i=0; i <=20; i+=2)
    console.log(twenty-i)

let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];
let longPrenoms =  []
for (let i=0; i < eleves.length; i++)
    if (5 < eleves[i].length) {
        longPrenoms.push(eleves[i])
    }
console.log(longPrenoms)

let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
let grossesSommes = []
for (let i=0; i < sommes.length; i++)
    if (sommes[i] > 60) {
        grossesSommes.push(sommes[i])
        sommes.splice(i,1)
        i--
    }
console.log(grossesSommes,sommes)

let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
let typeString = []
let typeNumber = []
let typeObject = []
let typeAutre = []
for (let i=0; i < donnees.length; i++)
    if (typeof donnees[i] === 'string') {
        typeString.push(donnees[i])
        donnees.splice(i,1)
        i--
    }
    else if (typeof donnees[i] === 'number') {
        typeNumber.push(donnees[i])
        donnees.splice(i,1)
        i--
    }
    else if (typeof donnees[i] === 'object') {
        typeObject.push(donnees[i])
        donnees.splice(i,1)
        i--
    }
    else {
        typeAutre.push(donnees[i])
        donnees.splice(i,1)
        i--
    }
console.log(typeString, typeNumber, typeObject, typeAutre, donnees)
