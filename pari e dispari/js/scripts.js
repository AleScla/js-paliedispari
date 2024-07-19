// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// variabili globali
let somma 
const form = document.querySelector('form')
const user = document.getElementById('utente')
const pc = document.getElementById('pc')


// funzioni


function calcRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



function sum (minSomma, maxSomma){
    // calcolo la somma di due numeri random (in questo caso tra 1 , 5)
    let pcnumber = calcRandom(minSomma, maxSomma);
    // stampo il numero in html
    pc.innerHTML = 'Pc ha scelto:  ' + pcnumber; 
    // creo una variabile per la scelta dell'utente pari o dispari
    let userchoice = document.getElementById('scelta-utente').value;
    // creo una variabile per il numero scelto dall'utente
    let usernumber = parseInt(document.getElementById('scelta-numero').value);
    // stampo le scelte dell'utente in pagina
    user.innerHTML = 'Le tue scelte sono: ' + userchoice + ' e ' + usernumber; 
    // sommo i numeri dell'utente e del pc 
    somma = pcnumber + usernumber;
    // metto le condizioni di vittoria
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

// evento sul form per raccogliere i dati dell'utente
form.addEventListener('submit', function winner(event){
    event.preventDefault();
    sum(1, 5);
    document.getElementById('estrazione').innerHTML = ('La somma dei due numeri è: ' + somma);
    
})



