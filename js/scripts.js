

let pali = prompt('Inserisci una parola');
console.log(pali)


function palicheck (){
    let palisplitted = pali.split('');
    console.log(palisplitted);
    let palireverse = palisplitted.reverse();
    console.log(palireverse);
    let paliunited = palireverse.join('');
    console.log(paliunited);
    if (pali == paliunited) {
        return alert('Palindromo!')
    }
    else {
        return alert ('Non palindromo!')
    }
}

palicheck(pali)


// FRANCESCO VAI VIA