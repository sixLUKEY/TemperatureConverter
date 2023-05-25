let errorMessage = 'Please enter a valid temperature'

function fahrenheitCalc(){
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = (celsius*9/5) +32;
    let outputBox = document.getElementById('outputFahrenheit');
    let message  = '&deg; F'

    if (celsius){
    outputBox.innerHTML = fahrenheit.toFixed(2) + message;
    } else {
        outputBox.innerHTML = errorMessage;
    }
}

function celsiusCalc(){
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celsius = (fahrenheit -32)*5/9;
    let outputBox = document.getElementById('outputCelsius');
    let message  = '&deg; C'
    
    if (fahrenheit){
    outputBox.innerHTML = celsius.toFixed(2) + message;
    } else {
        outputBox.innerHTML = errorMessage;
    }   
}