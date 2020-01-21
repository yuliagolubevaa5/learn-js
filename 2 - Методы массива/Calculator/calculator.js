//Калькулятор с добавлением функций

function Calculator() {

    this.methods = {
        '-': function (a, b) {
            return a - b;
        },
        '+': function (a, b) {
            return a + b;
        },
    };

    this.calculate = function (str) {
        let numbers = str.split(' '),
            firstNumber = +numbers[0],
            operation = numbers[1],
            secondNumber = +numbers[2];

        return this.methods[operation](firstNumber, secondNumber);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    }
};

let powerCalc = new Calculator;
let result = powerCalc.calculate("5 + 3");
powerCalc.addMethod("*", (a, b) => a * b);
let result2 = powerCalc.calculate("5 * 3")
alert(result);
alert(result2);
