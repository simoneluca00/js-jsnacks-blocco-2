// Snack2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
let nome = [ "Marta", "Cristian", "Simone", "Luisa", "Mario", "Giulia", "Michele", "Annalisa"];
let cognome = [ "Rossi", "Zaino", "Esposito", "Icolari", "Molinari", "Miccoli", "Stasi", "Abbatiello"];
let tavolo = ["ROCK", "POP", "JAZZ", "BLUES", "DANCE", "TECHNO", "HIP-HOP", "REGGAE"]

for ( i = 0; i < 50; i++ ){
    let nomeRandom = nome[Math.floor(Math.random()* nome.length)];
    let cognomeRandom = cognome[Math.floor(Math.random()* cognome.length)];
    let tavoloRandom = tavolo[Math.floor(Math.random()* tavolo.length)];

    document.getElementById("nome_cognome").innerHTML += `<li>${nomeRandom} ${cognomeRandom} (tavolo 
        <span style="color: red">${tavoloRandom}</span>)
        </li>`
}

