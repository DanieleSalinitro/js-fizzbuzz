//dichiarazioni variabili
const numbox = 100;
let htmlboxes = '';

//creo contenuto html del titolo e del contenitore degli scacchi
let title = document.createElement('h1');
title.className = 'text-center p-5 fw-bold text-white';
title.innerHTML='FizzBuzzDOM';
let chessboard = document.createElement('div');
chessboard.setAttribute('id', 'chessboard')

//inizio ciclo e generazione scacchi
for (i=1; i<=numbox; i++){
    if (i % 15 === 0){
        htmlboxes += `<div class="ds-box box15">buzzfizz</div>`;
    } else if (i % 3 === 0){
            htmlboxes += `<div class="ds-box box3">fizz</div>`;
    } else if (i % 5 === 0) {
        htmlboxes += `<div class="ds-box box5">buzz</div>`;
    } else {
        htmlboxes += `<div class="ds-box">${i}</div>`;
    }
}

//inserisco la generazione degli scacchi al div chessboard
chessboard.innerHTML=htmlboxes;

//inserisco nel file index.html il titolo e il div chessboard appena riempito
document.getElementById('wrapper').append(title, chessboard);
