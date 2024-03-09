

/* 
...codice da eseguire prima
*/

// console.log('prima del ciclo');

// for(let i = 1; i <= 10; i++){
//  console.log(i);
// }

/* 
...codice da eseguire dopo
*/
// console.log('dopo il ciclo');

// List Ul dinamica
// let lista = document.getElementById('lista');

// inizializzo una variabile vuota per contenere l'html
// let tempHtml = '';

// for(let i = 1; i <= 10; i++){
    //modo lungo per impostare il colore
    // let color;
    // if(i % 2 === 0){
    //   color = 'even';
    // } else {
    //     color = 'odd';
    // }
    // let color = (i % 2 === 0) ? 'even' : 'odd';
    // const elLi = `
    // <li class="${color}">${i}</li>
    // `;
    //tempHtml += elLi;
//     lista.innerHTML += elLi;
// }
// console.log(tempHtml);
//lista.innerHTML = tempHtml;

//Quadrati dinamici

/* 
 creare una griglia quadrata di 100 quadrati (10 + 10)
 centrata nella pagina con un numero progressivo al centro di ogni quadrato
 i quadrati avranno lo sfondo blue
*/

/* 
template
   <div id="boxes" class="d-flex justify-content-center align-content-center gap-2 ">
            <div class="box">1</div>
            
        </div>

*/

/*const squareWrapper = document.createElement('div');
//console.log(typeof squareWrapper);

squareWrapper.className = 'd-flex justify-content-between align-content-center flex-wrap';
squareWrapper.setAttribute('id','boxes');
//console.dir(squareWrapper);

let numBox = 100;
let tmpHtml = '';

for(let i = 0; i < numBox; i++){
    tmpHtml += ` <div class="box">${i + 1}</div>`;
}

squareWrapper.innerHTML = tmpHtml;

console.dir(squareWrapper);

const container = document.querySelector('.container');
container.append(squareWrapper);*/
let numbox = 100;
let htmlboxes = '';
for (i=0; i<numbox; i++){
    if (i % 15 === 0){
        htmlboxes += `<div class="ds-box box15">buzzfizz</div>`;
    } else if (i % 5 === 0) {
        htmlboxes += `<div class="ds-box box5">buzz</div>`;
    } else if (i % 3 === 0){
            htmlboxes += `<div class="ds-box box3">fizz</div>`;
    } else {
        htmlboxes += `<div class="ds-box">${i+1}</div>`;
    }

}
document.getElementById("chessboard").innerHTML = htmlboxes;