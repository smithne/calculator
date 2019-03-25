const add =  (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

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
    equals: "="
}

const controls = {
    clear: "Clear",
    plusMinus: "+/-",
    percentage: "%"
}

function initializeCalculator() {
    // add controls
    const controlsContainer = document.querySelector('#controls');
    for (let key in controls) {
        console.log(key);
        const div = document.createElement('div');
        div.classList.add('controlButton')
        div.setAttribute('id', key);
        div.innerHTML = `<button id="${key}">${controls[key]}</button>`;
        controlsContainer.appendChild(div);  
    }

    const operatorsContainer = document.querySelector('#operators');
    for (let key in operators) {
        console.log(key);
        const div = document.createElement('div');
        div.classList.add('operatorButton')
        div.setAttribute('id', key);
        div.innerHTML = `<button id="${key}">${operators[key]}</button>`;
        operatorsContainer.appendChild(div);  
    }
}

initializeCalculator();