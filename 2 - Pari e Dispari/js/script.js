/*
Pari e Dispari
1 - L'utente sceglie pari o dispari e 
2 - inserisce un numero da 1 a 5.
3 - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
4 - Sommiamo i due numeri
5 - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
6 - Dichiariamo chi ha vinto.
*/

var choice = '';
var results = '';
var userNum;

//odd or even input
do {
    choice = prompt("Pari o dispari? (Q per uscire)").toLowerCase();

    //'q' to break loop
    if (choice == 'q'){
        break;
    }

} while (choice != 'pari' && choice != 'dispari');
console.log('Hai scelto', choice);

//number input
do {
    userNum = parseInt(prompt('Inserisci un numero da 1 a 5:'));

} while (isNaN(userNum) || userNum < 1 || userNum > 5);
console.log('Hai scelto il numero', userNum);

//PC number
var PCnum = getRandomIntInclusive(1, 5);
console.log('Il numero del PC e\'', PCnum);

//sums the two numbers
var sum = userNum + PCnum;
console.log('La somma dei due numeri e\'', sum);

//checks if sum is even or odd
if (isEven(sum)) {
    results = 'pari';
} else {
    results = 'dispari'
}
console.log(sum, 'e\'', results);

//prints winner
if (choice == results){
    console.log('Hai vinto!');
}else {
    console.log('Hai perso!');
}

//Functions

//gets int between included min and max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//returns true if int is even, false if not
function isEven(int) {
    return int % 2 == 0;
}
  