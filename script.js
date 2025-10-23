// --- COINS ---
function convertCoins() {
  // 1. Get HTML elements
  let value = parseFloat(document.getElementById('number-coins').value);
  let from = document.getElementById('selectCoinsFrom').value;
  let to = document.getElementById('selectCoinsTo').value;
  let divresult = document.getElementById('resultcoins');

  // 2. Validate input
  if (isNaN(value) || from === "" || to === "") {
    divresult.innerText = "Please fill in all fields.";
    return;
  }

  // 3. If currencies are the same
  if (from === to) {
    divresult.innerText = `${value.toFixed(2)} ${from}`;
    return;
  }

  // 4. Define exchange rates (using BRL as base)
  const rates = {
    "BRL": 1,
    "USD": 5.20, // 1 USD = 5.20 BRL
    "EUR": 5.50  // 1 EUR = 5.50 BRL
  };

  // 5. Calculate result
  // First, convert 'from' value to base (BRL)
  let valueInBRL = value * rates[from];

  // Then, convert from BRL to 'to' currency
  let result = valueInBRL / rates[to];

  // 6. Display result
  divresult.innerText = `${value.toFixed(2)} ${from} = ${result.toFixed(2)} ${to}`;
}

// --- WEIGHT ---
function convertWeight() {
  // 1. Get elements
  let value = parseFloat(document.getElementById('number-weight').value);
  let from = document.getElementById('selectWeightFrom').value;
  let to = document.getElementById('selectWeightTo').value;
  let divresult = document.getElementById('resultweight');

  // 2. Validate
  if (isNaN(value) || from === "" || to === "") {
    divresult.innerText = "Please fill in all fields.";
    return;
  }

  // 3. If units are the same
  if (from === to) {
    divresult.innerText = `${value} ${from}`;
    return;
  }

  // 4. Define conversion factors (using Gram 'G' as base)
  const factors = {
    "MG": 0.001, // 1 MG = 0.001 G
    "G": 1,
    "KG": 1000,  // 1 KG = 1000 G
    "T": 1000000 // 1 T = 1,000,000 G
  };

  // 5. Calculate
  let valueInGrams = value * factors[from];
  let result = valueInGrams / factors[to];

  // 6. Display
  divresult.innerText = `${value} ${from} = ${result} ${to}`;
}

// --- TEMPERATURE ---
function convertTemperature() {
  // 1. Get elements
  let value = parseFloat(document.getElementById('number-temperature').value);
  let from = document.getElementById('selectTempFrom').value;
  let to = document.getElementById('selectTempTo').value;
  let divresult = document.getElementById('resulttemperature');

  // 2. Validate
  if (isNaN(value) || from === "" || to === "") {
    divresult.innerText = "Please fill in all fields.";
    return;
  }

  // 3. If units are the same
  if (from === to) {
    divresult.innerText = `${value.toFixed(2)} ${from}`;
    return;
  }

  let valueInCelsius;

  // 4. Convert (Base: Celsius 'C')
  // First, convert 'from' to Celsius
  switch (from) {
    case 'C':
      valueInCelsius = value;
      break;
    case 'F':
      valueInCelsius = (value - 32) / 1.8;
      break;
    case 'K':
      valueInCelsius = value - 273.15;
      break;
  }

  let result;

  // Then, convert from Celsius to 'to'
  switch (to) {
    case 'C':
      result = valueInCelsius;
      break;
    case 'F':
      result = (valueInCelsius * 1.8) + 32;
      break;
    case 'K':
      result = valueInCelsius + 273.15;
      break;
  }

  // 5. Display
  divresult.innerText = `${value.toFixed(2)} ${from} = ${result.toFixed(2)} ${to}`;
}

// --- SWAP FUNCTION ---
// This function was missing in your original JS
function swapUnits(type) {
  let fromSelect, toSelect;

  if (type === 'coins') {
    fromSelect = document.getElementById('selectCoinsFrom');
    toSelect = document.getElementById('selectCoinsTo');
  } else if (type === 'weight') {
    fromSelect = document.getElementById('selectWeightFrom');
    toSelect = document.getElementById('selectWeightTo');
  } else if (type === 'temp') {
    fromSelect = document.getElementById('selectTempFrom');
    toSelect = document.getElementById('selectTempTo');
  } else {
    return; // Unknown type
  }

  // Swap selected values
  let tempValue = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = tempValue;
}

