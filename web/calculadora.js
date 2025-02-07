/* clase */

class Calculator {
    constructor(previousNumber, currentNumber) {
        this.previousNumber = previousNumber;
        this.currentNumber = currentNumber;
        this.clear();
    };

    // los metodos de la clase no necesitan la palabra function

    clear() {
        this.previousNumber = "";
        this.currentNumber = "";
        this.operation = undefined;
    };
    
    remove() {
        this.currentNumber = String(this.currentNumber).slice(0, -1);
    };
    
    appendNumber(number) {
        const operators = ["+", "-", "*", "÷"];

        if (operators.includes(this.currentNumber.slice(-1)) && operators.includes(number)) {
            return;
        };

        if (number.includes(".") && this.currentNumber.slice(-1).includes(".")) {
            return;
        }; 

        this.previousNumber = this.currentNumber;
        this.currentNumber = String(this.currentNumber) + String(number);
    };
    
    run() {
        if (this.currentNumber.includes("÷") && this.currentNumber.includes("0")) {
            this.currentNumber = "División por cero.";
            return;
        };

        this.currentNumber = eval(this.currentNumber);
    };
    
    updateDisplay() {
        currentNumber.textContent = this.currentNumber;
        // previousNumber.textContent = this.previousNumber; // realmente el actual se diferencia tomando al operador como separador!!
    };
};

/* botones */

const numberButtons = document.querySelectorAll("[data-number]");
const equalButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear]");
const previousNumber = document.querySelector("[data-previous-number]");
const currentNumber = document.querySelector("[data-current-number]");

const calculator = new Calculator(previousNumber, currentNumber);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

equalButton.addEventListener("click", () => {
    calculator.run();
    calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
    calculator.remove();
    calculator.updateDisplay();
});

clearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});
