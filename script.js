// beta functions
function coins(){
  let divresult = document.getElementById('resultcoins')
  let value = document.getElementById('numbercoins').value;
  let selectcoins = document.getElementById('selectcoins').value;
  let result = null
  switch (selectcoins){
      case 'dolar':
        result = value * 5.20;
        break;
      case 'euro':
        result = value * 5.50;
        break;
      case 'real':
        result = value * 0.20;
        break;
      default:
        result = 'Choose a coin';
  }
  divresult.innerText = result
}

function weight(){
  let divresult = document.getElementById('resultweight')
  let value = document.getElementById('number-weight').value;
  let selectweight = document.getElementById('selectweight').value;
  let result = null
  switch (selectweight){
      case 'KG':
        result = value * 1000;
        break;
      case 'T':
        result = value * 1000000;
        break;
      case 'MG':
        result = value * 0.001;
        break;
      default:
        result = 'Choose a weight';
  }
  divresult.innerText = result
}

function temperature(){
  let divresult = document.getElementById('resulttemperature')
  let value = document.getElementById('temperature-weight').value;
  let selecttemperature = document.getElementById('selecttemperature').value;
  let result = null
  switch (selecttemperature){
      case 'Fahrenheit':
        result = value * 1.8 + 32;
        break;
      case 'Kelvin':
        result = value + 273.15;
        break;
      case 'Celsius':
        result = value - 273.15;
        break;
      default:
        result = 'Choose a temperature';
  }
  divresult.innerText = result
}
