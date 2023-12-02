function convertTemperature() {
    // Get user input
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    // Validate input
    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Perform conversion
    let convertedTemperature;
    let resultUnit;

    if (selectedUnit === 'celsius') {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * (5 / 9);
        resultUnit = 'Celsius';
    } else if (selectedUnit === 'fahrenheit') {
        convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
        resultUnit = 'Fahrenheit';
    } else if (selectedUnit === 'kelvin') {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        resultUnit = 'Kelvin';
    }

    // Display result
    const resultArea = document.getElementById('resultArea');
    resultArea.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
