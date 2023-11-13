// constructs a new object that evaluates the result of the expression between two given values
function Calculator(firstValue, secondValue, operator) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;
    this.operator = operator;
    this.evaluate = function() {
        switch (this.operator) {
            case '-':
                return this.firstValue - this.secondValue;
            case '+':
                return this.firstValue + this.secondValue;
            case '*':
                return this.firstValue * this.secondValue;
            default:
                return this.firstValue / this.secondValue;
        }
    }
}


let firstValue = document.querySelector('.expression .first-value');
let secondValue = document.querySelector('.expression .second-value');
let operator = document.querySelector('.expression .operator');
let result = document.querySelector('.output .result span');
let clearButton = document.querySelector('.panel .clear');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equals = document.querySelector('.equal');


clearButton.addEventListener('click', () => {
    firstValue.textContent = "";
    secondValue.textContent = "";
    operator.textContent = "";
    result.textContent = "";
});

one.addEventListener('click', () => {
    if (operator.textContent.length === 0) {
        firstValue.textContent += "1";
    } else {
        secondValue.textContent += "1";
    }
});

two.addEventListener('click', () => {
    if (operator.textContent.length === 0) {
        firstValue.textContent += "2";
    } else {
        secondValue.textContent += "2";
    }
});

three.addEventListener('click', () => {
    if (operator.textContent.length === 0) {
        firstValue.textContent += "3";
    } else {
        secondValue.textContent += "3";
    }
});

four.addEventListener('click', () => {
    if (operator.textContent.length === 0) {
        firstValue.textContent += "4";
    } else {
        secondValue.textContent += "4";
    }
});

five.addEventListener('click', () => {
    if (operator.textContent.length === 0) {
        firstValue.textContent += "5";
    } else {
        secondValue.textContent += "5";
    }
});

six.addEventListener('click', () => {
    if (operator.textContent.length === 0) {
        firstValue.textContent += "6";
    } else {
        secondValue.textContent += "6";
    }
});

seven.addEventListener('click', () => {
    if (operator.textContent.length === 0) {
        firstValue.textContent += "7";
    } else {
        secondValue.textContent += "7";
    }
});

eight.addEventListener('click', () => {
    if (operator.textContent.length === 0) {
        firstValue.textContent += "8";
    } else {
        secondValue.textContent += "8";
    }
});

nine.addEventListener('click', () => {
    if (operator.textContent.length === 0) {
        firstValue.textContent += "9";
    } else {
        secondValue.textContent += "9";
    }
});

add.addEventListener('click', () => {
    operator.textContent = "+";
});

subtract.addEventListener('click', () => {
    operator.textContent = "-";
});

multiply.addEventListener('click', () => {
    operator.textContent = "*";
});

divide.addEventListener('click', () => {
    operator.textContent = '/';
});


equals.addEventListener('click', () => {
    let firstNumber = Number(firstValue.textContent);
    let secondNumber = Number(secondValue.textContent);
    let calculate = new Calculator(firstNumber, secondNumber, operator.textContent);
    result.textContent = calculate.evaluate();
});