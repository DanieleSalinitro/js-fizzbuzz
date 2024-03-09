//dichiarazioni variabili
const numbox = 100;
let htmlboxes = '';

//creo contenuto html del titolo e del contenitore degli scacchi
let title = document.createElement('h1');
title.className = 'text-center p-5 fw-bold text-white';
title.innerHTML='FizzBuzzDOM';
let chessboard = document.createElement('div');
chessboard.setAttribute('id', 'chessboard')
let prova
//creazione scacco tramite js

//let htmlboxes1 = document.createElement('div');
//htmlboxes1.className = 'ds-box fw-bold';

//inizio ciclo e generazione scacchi
for (i=1; i<=numbox; i++){
    if (i % 15 === 0){
        htmlboxes += `<div class="ds-box box15">buzzfizz</div>`;
    } else if (i % 3 === 0){
            htmlboxes += `<div class="ds-box box3">fizz</div>`;
    } else if (i % 5 === 0) {
        htmlboxes += `<div class="ds-box box5">buzz</div>`;
    } else {
        htmlboxes += `<div class="ds-box fw-bold">${i}</div>`;
    }
}
/*PROVA NON FUNZIONANTE
for (i=1; i<=numbox; i++){
    if (i % 15 === 0){
        htmlboxes1.className = 'ds-box fw-bold box15';
        htmlboxes1+= htmlboxes1.innerHTML = `BuzzFizz`;
    } else if (i % 3 === 0){
        htmlboxes1.className = 'ds-box fw-bold box3';
        htmlboxes1+= htmlboxes1.innerHTML = `Fizz`;
    } else if (i % 5 === 0) {
        htmlboxes1.className = 'ds-box fw-bold box5';
        htmlboxes1+= htmlboxes1.innerHTML = `Buzz`;
    } else {
        htmlboxes1+= htmlboxes1.innerHTML = i;    
    }
}*/

//inserisco la generazione degli scacchi al div chessboard
chessboard.innerHTML=htmlboxes;

//inserisco nel file index.html il titolo e il div chessboard appena riempito
document.getElementById('wrapper').append(title, chessboard);

