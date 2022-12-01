/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
(attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi. Ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
 */


//comprensione in italiano

//-devo generare 16 numeri casuali, posso usare un while e creare un array vuoto a cui do lunghezza 16 e ci metto dei numeri da 1 a 100 


const newGameButton = document.querySelector('a.btn');

newGameButton.addEventListener('click', function handler(){
    //dichiaro l'array bomba
    let bomb =[];
    //do la lunghezza all'array vuoto e ci pusho i numeri da 1 a 100 in modo random al suo interno
    while(bomb.length < 16){
        let bombRandom = getRandomNumber(1 , 100);

        if(!bomb.includes(bombRandom)){
            bomb.push(bombRandom);
        }
    }
    console.log(bomb);

   // § 1 - recupero il parent
    const gridContainer = document.querySelector('div.grid');
   // console.log(gridContainer);

   // § 1.1 - svuoto il parent se voglio che i click successivi generino una nuova partita
    gridContainer.innerHTML = "";

   // § 1.5 per ogni elemento dei 100 che voglio creare
    for (let  i = 1 ; i <= 100 ; i++){

        const newSquare = getMeANewSquare();
        newSquare.innerHTML = `<span class="fs-4 m-auto"> ${i} </span>`;

      // § 4 - aggiungo il div al parent
        gridContainer.appendChild(newSquare);
    }
});

//creo un numero randomico da mettere nell'array
function getRandomNumber(min, max){
    if(min === max){
        return max;
    }

    return Math.floor(Math.random()* ( max - min + 1) + min);
}


// funzione per creare un quadrato
function getMeANewSquare(){
   // - creo il div
    const newSquare = document.createElement('div');

   // - gli attribuisco le proprietà che voglio
    newSquare.classList.add('square', 'd-flex');

   //- tra le quali un comportamento sul click
    newSquare.addEventListener("click", function(){
        newSquare.classList.toggle('clicked');
    });

    return newSquare;
}

