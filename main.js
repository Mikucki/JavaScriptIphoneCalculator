let runningTotal = 0;
let buffer = '0';
let previousCalulator;
const screen = document.querySelector('.calculator-screen')


document.querySelector('.calc-buttons').addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
})


function buttonClick(value) {
    if(isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}


function handleNumber(value) {
    if (buffer === 0) {
        buffer = value;
    } else {
        buffer += value;
    }
    reRender();
}

function handleSymbol(value) {
    
}

function reRender() {
    screen.innerText = buffer
}