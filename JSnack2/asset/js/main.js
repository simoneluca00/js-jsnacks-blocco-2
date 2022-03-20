// Snack2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
const nome = [ "Marta", "Cristian", "Simone", "Luisa", "Mario", "Giulia", "Michele", "Annalisa"];
const cognome = [ "Rossi", "Zaino", "Esposito", "Icolari", "Molinari", "Miccoli", "Stasi", "Abbatiello"];
const tavolo = ["ROCK", "POP", "JAZZ", "BLUES", "DANCE", "TECHNO", "HIP-HOP", "REGGAE"];

let numeroInvitati = 15;

for ( i = 0; i < numeroInvitati; i++ ){
    let nomeRandom = nome[Math.floor(Math.random()* nome.length)];
    let cognomeRandom = cognome[Math.floor(Math.random()* cognome.length)];
    let tavoloRandom = tavolo[Math.floor(Math.random()* tavolo.length)];
    let invitati = `${nomeRandom} ${cognomeRandom} `

    document.getElementById("nome_cognome").innerHTML += 
    `
        <li>${invitati} (tavolo 
            <span style="color: red">${tavoloRandom}</span>)
        </li>
    `
}

// come escludere i nomi/cognomi già utilizzati?