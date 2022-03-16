// Snack4 (Bonus)
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// 1) Dichiarazione container per stampare in HTML
let arrayContainerOne = document.getElementById("arrayContainerOne");
let arrayContainerTwo = document.getElementById("arrayContainerTwo");

// 2) Dichiarazione array
let arrayOne = [];
let arrayTwo = [];

// 3) Dichiarazione button "SAME"
let buttonSame = document.getElementById("buttonSame");

// 4) ciclo per riepire l'array n.1
for(i = 0; i < 20; i++ ) {
    arrayOne.push(Math.floor(Math.random()* 91 + 10));
    arrayContainerOne.innerHTML += `<li class="d-inline-block p-4 m-3 bg-warning ">${arrayOne[i]}</li>`;
    // Dichiarazione array.length
    var arrayOneLength = arrayOne.length;
}

// 4) ciclo per riepire l'array n.2
for(y = 0; y < 2; y++ ) {
    arrayTwo.push(Math.floor(Math.random()* 91 + 10));
    arrayContainerTwo.innerHTML += `<li class="d-inline-block p-4 m-3 bg-danger text-white ">${arrayTwo[y]}</li>`;
    // Dichiarazione array.length
    var arrayTwoLength = arrayTwo.length;
}

console.log(arrayOneLength);
console.log(arrayTwoLength);

// 4)avere lo stesso numero di elementi nelle liste al click del button
buttonSame.addEventListener("click", 

    function () {
        for (y = arrayTwoLength; y < arrayOneLength; y++){
            arrayTwo.push(Math.floor(Math.random()* 91 + 10));
            arrayContainerTwo.innerHTML += `<li class="d-inline-block p-4 m-3 bg-danger text-white">${arrayTwo[y]}</li>`;
        }
    }, {once : true}

);
