/*
1 - Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//user input in lower case and removes spaces
var str = prompt('Inserire una parola da elaborare: ').toLowerCase().replace(/\s+/g, '');

//
if (isPalindrome(str)) {
    console.log('La stringa inserita e\' palindroma');
}else {
    console.log('La stringa inserita NON e\' palindroma');
}

//returns true if string is palindrome 
function isPalindrome(string) {
    var string2 = '';
    for (var i = string.length - 1; i >= 0; i--) {
        string2 += string[i];
    }    
    return (string == string2);
}

