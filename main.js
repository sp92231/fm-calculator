let input = [];
let output = document.getElementById('output');

let operator = null;
let nextOperator = null;
let currentOperand = 0;
let nextOperand = 0;


function clearDisplay() {
    input = [];
    updateDisplay();
    operator = null;
}

function backspace() {
    input.pop();
    updateDisplay();
}

function updateDisplay() {
    output.textContent = input.join('') || '0';
}

function appendDisplay(val) {
    if (input.length === 0 && val === 0) {
        return;
    }
    input.push(String(val));
    updateDisplay();
}

function setOperation(op) {
    let total = 0;
    if (operator !== null) {
        nextOperator = op;
        total = calculate();
        input = [total.toString()];
        updateDisplay();
        operator = nextOperator;
        operator = null;
    }
    else {
        if (op === '=') {
            return;
        }
        else {
            operator = op;
            currentOperand = parseFloat(input.join(''));
            input = [];
        }
    }
}

function calculate() {
    let nextOperand = parseFloat(input.join(''));
    input = [];
    switch (operator) {
        case '+':
            return currentOperand + nextOperand;
        case '-':
            return currentOperand - nextOperand;
        case 'x':
            return currentOperand * nextOperand;
        case '÷':
            return currentOperand / nextOperand;
        default:
            return;
    }
}