const add =  (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1 = "";
let num2 = "";
let operator = "";

function operate(operation, a, b) {
    switch (operation) {
        case "add":
            return add(a,b);
        case "subtract":
            return subtract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
            return divide(a,b);
    }
}

const operators = {
    add: "+",
    subtract: "-",
    multiply: "X",
    divide: "&divide;",
    equals: "=",
    name: "operators"
}

const controls = {
    clear: "Clear",
    plusMinus: "+/-",
    percentage: "%",
    name: "controls"
}

const digits = {
    seven: "7",
    eight: 8,
    nine: 9,
    four: 4,
    five: 5,
    six: 6,
    one: 1,
    two: 2,
    three: 3,
    zero: 0,
    period: ".",
    name: "digits"
}

function initializeCalculator() {
    createButtons(controls);
    createButtons(operators);
    createButtons(digits);
}

function createButtons(buttonGroup) {
    const controlsContainer = document.querySelector(`#${buttonGroup.name}`);
    for (let key in buttonGroup) {
        if (key != 'name') {
            console.log(key);
            const div = document.createElement('div');
            div.setAttribute('id', key);
            div.innerHTML = `<button id="${key}">${buttonGroup[key]}</button>`;
            controlsContainer.appendChild(div);
            const btn = document.querySelector(`#${key}`);
            btn.classList.add(buttonGroup.name);
            btn.addEventListener('click', operateCalculator);
        }
    }
}

function updateDisplay(displayValue) {
    document.querySelector('#display').textContent = displayValue;
}

function clear() {
    num1 = "";
    num2 = "";
    operator = "";
    updateDisplay(0)
}

function operateCalculator(key) {
    // check what kind of key
    // if clear

    if (key.target.id === "clear") {
        clear();
        return;
    } else if (key.target.id === "equals" && num1 && operator && num2) {
        const result = operate(operator, Number(num1), Number(num2));
        updateDisplay(result);
        num1 = "";
        num2 = "";
        operator = "";
        return;
    }


    
    // if operator isn't set and key is a number, append that number to num1
    if (!operator && key.target.parentElement.className === "digits") {
        num1 += key.target.innerText;
        updateDisplay(num1);
    } else if (key.target.parentElement.className === "operators") {
        operator = key.target.id;
    } else if (operator && key.target.parentElement.className === "digits") {
        num2 += key.target.innerText;
        updateDisplay(num2);
    }
    

    if (!num1) {
        num1 = Number(key.target.innerText);
        updateDisplay(num1);
    }
    
    console.log(key);
}

initializeCalculator();

updateDisplay("HELLO");