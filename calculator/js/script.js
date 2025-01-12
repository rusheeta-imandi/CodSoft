var buttons = document.querySelectorAll('button');
var input = '0';
var operationExecuted = false;

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded!');
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.addEventListener('click', function () {
            handleClick(this);
        });
    }
});

function handleClick(element) {
    console.log('Clicked!', element);
    var number = element.innerHTML;
    console.log('Number:', number);
    if (number === 'C') {
        input = '0';
        displayInput(input);
    } else if (number === '=') {
        var result = executeOperation(input);
        input = result;
        displayInput(result);
        operationExecuted = true;
    } else {
        input = input === '0' ? number : input + number;
        displayInput(input);
    }
}

function displayInput(input) {
    var display = document.querySelector('.display');
    display.innerHTML = input;
}

function executeOperation(input) {
    var numbers = input.split(/[\+\-\x÷]/);
    if (numbers.length < 2) {
        return;
    }

    numbers = numbers.map(function (number) {
        if (number.includes('.')) {
            return parseFloat(number);
        }
        return parseInt(number);
    });

    if (input.includes('+')) {
        return add(numbers);
    } else if (input.includes('-')) {
        return subtract(numbers);
    } else if (input.includes('x')) {
        return multiply(numbers);
    } else if (input.includes('÷')) {
        return divide(numbers);
    }
}

function add(numbers) {
    return numbers.reduce(function (a, b) {
        return a + b;
    });
}

function subtract(numbers) {
    return numbers.reduce(function (a, b) {
        return a - b;
    });
}

function multiply(numbers) {
    return numbers.reduce(function (a, b) {
        return a * b;
    });
}

function divide(numbers) {
    return numbers.reduce(function (a, b) {
        return a / b;
    });
}