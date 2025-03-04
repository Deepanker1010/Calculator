// Initialize variables
let isEqualPressed = 0;
let scientificFunctionClicked = false;

// Get HTML elements
const inputField = document.getElementById("input");
const buttons = document.querySelectorAll(".input-button");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const eraseButton = document.getElementById("erase");
const percentButton = document.getElementById("percent");

// Clear input field on window load
window.onload = () => {
    inputField.value = "";
};

// Attach event listeners to buttons
buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});
percentButton.addEventListener("click", handlePercentClick);
equalButton.addEventListener("click", handleEqualClick);
clearButton.addEventListener("click", () => inputField.value = "");
eraseButton.addEventListener("click", handleEraseClick);
document.getElementById("sin").addEventListener("click", () => setScientificFunction("sin"));
document.getElementById("cos").addEventListener("click", () => setScientificFunction("cos"));
document.getElementById("tan").addEventListener("click", () => setScientificFunction("tan"));
document.getElementById("e").addEventListener("click", () => setScientificFunction("e"));
document.getElementById("log").addEventListener("click", () => setScientificFunction("log"));
document.getElementById("pi").addEventListener("click", () => inputField.value = 3.14);
document.getElementById("pow").addEventListener("click", handlePowerClick);

// Handle button clicks
function handleButtonClick(event) {
    if (isEqualPressed) {
        inputField.value = "";
        isEqualPressed = 0;
    }
    inputField.value += event.target.value;
}

// Handle percent button click
function handlePercentClick() {
    let val = inputField.value;
    let numStr = "";
    let i = val.length - 1;

    // Extract the number at the end of the input value
    while (i >= 0 && /[0-9.]/.test(val[i])) {
        numStr = val[i] + numStr;
        i--;
    }

    if (numStr) {
        // Remove the extracted number from the input value
        inputField.value = val.substr(0, i + 1);
        // Divide the extracted number by 100 and append the result to the input value
        inputField.value += (parseFloat(numStr) / 100).toString();
    }
}

// Handle equal button click
function handleEqualClick() {
    if (!scientificFunctionClicked) {
        isEqualPressed = 1;
        let inp_val = inputField.value;
        try {
            let solution = eval(inp_val);
            inputField.value = Number.isInteger(solution) ? solution : solution.toFixed(2);
        } catch (err) {
            alert("Error");
        }
    } else {
        const [method, value] = inputField.value.match(/^([a-z]+)\((.+)\)$/)?.slice(1) || [];
        calculateSciFunction(method, value);
    }
    scientificFunctionClicked = false;
}

// Handle erase button click
function handleEraseClick() {
    inputField.value = inputField.value.slice(0, -1);
}

// Set scientific function
function setScientificFunction(func) {
    scientificFunctionClicked = true;
    inputField.value = `${func}(${inputField.value})`;
}

// Calculate scientific function result
function calculateSciFunction(func, value) {
    let result;
    const inputValue = value.split("+").map(parseFloat).reduce((acc, cur) => acc + cur, 0);

    switch (func) {
        case "sin":
            result = Math.sin(inputValue);
            break;
        case "cos":
            result = Math.cos(inputValue);
            break;
        case "tan":
            result = Math.tan(inputValue);
            break;
        case "e":
            result = Math.exp(inputValue);
            break;
        case "log":
            result = Math.log(inputValue);
            break;
        default:
            alert("Invalid Input");
            return;
    }

    inputField.value = result.toFixed(2);
}

// Handle power button click
function handlePowerClick() {
    inputField.value = Math.pow(parseFloat(inputField.value) || 0, 2);
}
