// Hide all input forms initially
let inputForms = document.querySelectorAll(".conversion");
inputForms.forEach((form) => form.style.display = "none");

// Show the selected conversion form based on the category change
let category = document.getElementById("conversionCategory");
category.addEventListener("change", function () {
    let selectedCategory = category.value;
    hideAllForms();
    showSelectedForm(selectedCategory);
});

// Add event listeners for various conversion buttons
document.getElementById("temperatureConvertBtn").addEventListener("click", convertTemperature);
document.getElementById("areaConvertBtn").addEventListener("click", convertArea);
document.getElementById("weightConvertBtn").addEventListener("click", convertWeight);
document.getElementById("lengthConvertBtn").addEventListener("click", convertLength);
document.getElementById("timeConvertBtn").addEventListener("click", convertTime);

// Function to hide all input forms
function hideAllForms() {
    inputForms.forEach((form) => form.style.display = "none");
}

// Function to show the selected input form based on the category
function showSelectedForm(category) {
    document.getElementById(category).style.display = "block";
}

// Temperature conversion function
function convertTemperature() {
    let valInput = parseFloat(document.getElementById("temperatureInput").value);
    let fromUnit = document.getElementById("fromTemperatureUnit").value;
    let toUnit = document.getElementById("toTemperatureUnit").value;
    let result;
    
    switch (fromUnit) {
        case "celsius":
            result = toUnit === "fahrenheit" ? (valInput * 9) / 5 + 32 : valInput + 273.15;
            break;
        case "fahrenheit":
            result = toUnit === "celsius" ? ((valInput - 32) * 5) / 9 : ((valInput - 32) * 5) / 9 + 273.15;
            break;
        case "kelvin":
            result = toUnit === "celsius" ? valInput - 273.15 : ((valInput - 273.15) * 9) / 5 + 32;
            break;
        default:
            result = valInput;
    }

    document.getElementById("temperatureResult").textContent = `Result: ${result.toFixed(2)}`;
}

// Area conversion function
function convertArea() {
    let valInput = parseFloat(document.getElementById("areaInput").value);
    let fromUnit = document.getElementById("fromAreaUnit").value;
    let toUnit = document.getElementById("toAreaUnit").value;
    let conversionFactors = getAreaConversionFactors();
    let result = valInput * (conversionFactors[toUnit] / conversionFactors[fromUnit]);
    
    document.getElementById("areaResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

// Weight conversion function
function convertWeight() {
    let valInput = parseFloat(document.getElementById("weightInput").value);
    let fromUnit = document.getElementById("fromWeightUnit").value;
    let toUnit = document.getElementById("toWeightUnit").value;
    let conversionFactors = getWeightConversionFactors();
    let result = valInput * (conversionFactors[toUnit] / conversionFactors[fromUnit]);
    
    document.getElementById("weightResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

// Length conversion function
function convertLength() {
    let valInput = parseFloat(document.getElementById("lengthInput").value);
    let fromUnit = document.getElementById("fromLengthUnit").value;
    let toUnit = document.getElementById("toLengthUnit").value;
    let conversionFactors = getLengthConversionFactors();
    let result = valInput * (conversionFactors[toUnit] / conversionFactors[fromUnit]);
    
    document.getElementById("lengthResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

// Time conversion function
function convertTime() {
    let valInput = parseFloat(document.getElementById("timeInput").value);
    let fromUnit = document.getElementById("fromTimeUnit").value;
    let toUnit = document.getElementById("toTimeUnit").value;
    let conversionFactors = getTimeConversionFactors();
    let result = valInput * (conversionFactors[toUnit] / conversionFactors[fromUnit]);
    
    document.getElementById("timeResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

// Function to get area conversion factors
function getAreaConversionFactors() {
    return {
        sqMeter: 1,
        sqKilometer: 0.000001,
        sqCentimeter: 10000,
        sqMillimeter: 1000000,
        acre: 0.000247105,
        hectare: 0.0001,
        sqMile: 3.861e-7,
        sqYard: 1.19599,
        sqFoot: 10.7639,
        sqInch: 1550.0031,
    };
}

// Function to get weight conversion factors
function getWeightConversionFactors() {
    return {
        gram: 1,
        kilogram: 0.001,
        milligram: 1000,
        metricTon: 0.000001,
        longTon: 0.000984207,
        shortTon: 0.00110231,
        pound: 0.00220462,
        ounce: 0.03527396,
        carat: 5,
    };
}

function getLengthConversionFactors() {
    return {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701,
    };
}

function getTimeConversionFactors() {
    return {
        second: 1,
        millisecond: 1000,
        minute: 1 / 60,
        hour: 1 / 3600,
        day: 1 / 86400,
        week: 1 / 604800,
        month: 1 / 2628000,
        year: 1 / 31536000,
    };
}