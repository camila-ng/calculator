
let buffer = '0';
const screen = document.querySelector('.screen');

document.querySelector('.calculator-container').addEventListener('click', function (event) {
    buttonClick(event.target.innerText);
    });

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}

function handleNumber(value){
    if(buffer === '0'){
        buffer = value;
    } else {
        buffer += value;
    }
    reredender();
}

function handleSymbol(value){
}

function reredender() {
    screen.innerText = buffer;
}