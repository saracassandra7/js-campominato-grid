/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata. >>> Fatto
Ogni cella ha un numero progressivo, da 1 a 100. >>> Fatto
Ci saranno quindi 10 caselle per ognuna delle 10 righe. >>> Fatto
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/ 

const container = document.querySelector('.container');
const elementsPerRow = 10;
const start =document.getElementById('btn-start');
let square;

start.addEventListener('click', function(){
  container.innerHTML = ' ';
  init(elementsPerRow);
})

function init (numElements){
  //elevo al quadrato il numero di elementi per riga
  const totSquares = Math.pow(numElements, 2); 
  console.log(totSquares);

  //faccio un ciclo che mi stampa tutti i quadrati, utilizzando la funzione createSquare
  for (let i = 0; i<totSquares; i++){
    createSquare(i);

  }

}

function createSquare(idSquare){
  //creo quadratino
  const square = document.createElement('div');

  //gli aggiungo la classe
  square.className = 'square';

  //ci scrivo dentro il numero
  square.innerHTML = idSquare + 1;

  // creo proprietà custom di square in cui salvo il numero
  square.IdElement = idSquare + 1;

  //al click del quadratino si colora di azzurro e scrive in console il numero
  square.addEventListener('click', clickSquare);

  //lo appendo al container
  container.append(square);

}

//funzione che colora il quadratino di azzurro e scrive in console in numero
function clickSquare(){
  /*console.log(this.idElement); 
  this.innerHTML = this.idElement; -----> non funziona :( */
  this.classList.add('active');
}