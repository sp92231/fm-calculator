let input = [];
let output = document.getElementById('output');

console.log("JavaScript file connected!");


function clearDisplay() {
    input = [];
    updateDisplay();
}

function updateDisplay() {
    output.textContent = input.join('') || '0';
}

function appendDisplay(val) {
    input.push(String(val));
    updateDisplay();
}

function add() {
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        total += input[i];
    }

    return total;
}

function subtract() {
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        total -= input[i];
    }

    return total;
}