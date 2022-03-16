// Snack1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
let numero = parseInt(prompt("Inserisci un numero"));
let risultato = document.getElementById("container_number");

if ( numero % 2 === 0 ) {
    risultato.innerHTML = `<span style="font-weight: bold">${numero}</span> è un numero pari`;
} else {
    risultato.innerHTML = `${numero} è un numero dispari quindi stampiamo <span style="font-weight: bold">${numero + 1}</span>`;
}