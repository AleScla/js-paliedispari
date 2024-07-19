// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// funzioni
function calcRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let somma 

function sum (){
    let min = 1;
    let max = 5;
    let pcnumber = calcRandom(min, max);
    console.log('Pc number è:', pcnumber);
    pc.innerHTML = 'Pc ha scelto:  ' + pcnumber; 
    let userchoice = document.getElementById('scelta-utente').value;
    console.log(userchoice);
    let usernumber = parseInt(document.getElementById('scelta-numero').value);
    console.log(usernumber);
    user.innerHTML = 'Le tue scelte sono: ' + userchoice + ' e ' + usernumber; 
    somma = pcnumber + usernumber

    if(somma % 2 == 0 && userchoice == 'pari') {
        console.log('Pari! User win');
        return document.getElementById('risultato').innerHTML = ('Pari! User win');
    }
    else if (somma % 2 == 1 && userchoice == 'dispari'){

        console.log('Dispari! User wins');
        return document.getElementById('risultato').innerHTML = ('Dispari! User win');
    }
    else {
        console.log('PC wins');
        
        return document.getElementById('risultato').innerHTML = ('PC wins');
    }
}

const form = document.querySelector('form')
const user = document.getElementById('utente')
const pc = document.getElementById('pc')
form.addEventListener('submit', function winner(event){
    event.preventDefault();
    sum()
    document.getElementById('estrazione').innerHTML = ('La somma dei due numeri è: ' + somma);
    
})



