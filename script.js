// Get the input box element
let input = document.getElementById('inputbox');

// Get all button elements
let buttons = document.querySelectorAll('button');

// Initialize the expression string
let expression = "";

// Convert buttons NodeList to an Array
let buttonsArray = Array.from(buttons);

// Function to handle button click event
function handleButtonClick(e) {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
        calculateResult();
    } else if (buttonValue === 'AC') {
        clearInput();
    } else if (buttonValue === 'DEL') {
        deleteLastCharacter();
    } else if (buttonValue === '%') {
        calculatePercentage();
    } else {
        appendCharacter(buttonValue);
    }
}

// Function to calculate and display the result
function calculateResult() {
    try {
        expression = eval(expression);
        input.value = expression;
    } catch (error) {
        input.value = 'Error';
        expression = '';
    }
}

// Function to clear the input box
function clearInput() {
    expression = "";
    input.value = expression;
}

// Function to delete the last character from the expression
function deleteLastCharacter() {
    expression = expression.slice(0, -1);
    input.value = expression;
}

// Function to append a character to the expression
function appendCharacter(character) {
    expression += character;
    input.value = expression;
}

// Function to calculate the percentage
function calculatePercentage() {
    try {
        expression = eval(expression) / 100;
        input.value = expression;
    } catch (error) {
        input.value = 'Error';
        expression = '';
    }
}

// Add event listener to each button
buttonsArray.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
