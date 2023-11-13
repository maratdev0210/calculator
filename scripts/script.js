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

let calc = new Calculator(5, 0, "/");

console.log(calc.evaluate());

