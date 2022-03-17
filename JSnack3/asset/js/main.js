// Snack3
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

let sommaDispari = 0;
let numeriInteri = [2, 13, 22, 18, 3, 32, 28, 16, 42, 12, 18, 50, 10, 20, 38, 19, 11, 27];

// "trasformare" l'array in una stringa per poterlo stampare con gli spazi tra gli elementi
let numeriInteriStringa = numeriInteri.join(', ');
document.getElementById("container_array").innerHTML += `<span style="font-weight: bold;">${numeriInteriStringa}</span>`

// ciclo per trovare tutti gli elementi in posizione dispari e sommarli tra loro
for ( i = 1; i < numeriInteri.length; i += 2 ) {
    sommaDispari += numeriInteri[i];

    document.getElementById("container_somma").innerHTML = `La somma dei numeri in posizione dispari (partendo da 0) è:
    <span style="font-weight:bold">${sommaDispari}</span>`;

}
