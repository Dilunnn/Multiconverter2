// --- MOEDAS ---
function convertCoins() {
  // 1. Pegar os elementos do HTML
  let value = parseFloat(document.getElementById('number-coins').value);
  let from = document.getElementById('selectCoinsFrom').value;
  let to = document.getElementById('selectCoinsTo').value;
  let divresult = document.getElementById('resultcoins');

  // 2. Validar a entrada
  if (isNaN(value) || from === "" || to === "") {
    divresult.innerText = "Por favor, preencha todos os campos.";
    return;
  }

  // 3. Se as moedas forem iguais
  if (from === to) {
    divresult.innerText = `${value.toFixed(2)} ${from}`;
    return;
  }

  // 4. Definir as taxas de câmbio (usando BRL como base)
  const rates = {
    "BRL": 1,
    "USD": 5.20, // 1 USD = 5.20 BRL
    "EUR": 5.50  // 1 EUR = 5.50 BRL
  };

  // 5. Calcular o resultado
  // Primeiro, converte o valor de 'from' para a base (BRL)
  let valueInBRL = value * rates[from];

  // Segundo, converte o valor em BRL para a moeda 'to'
  let result = valueInBRL / rates[to];

  // 6. Exibir o resultado
  divresult.innerText = `${value.toFixed(2)} ${from} = ${result.toFixed(2)} ${to}`;
}

// --- PESO ---
function convertWeight() {
  // 1. Pegar os elementos
  let value = parseFloat(document.getElementById('number-weight').value);
  let from = document.getElementById('selectWeightFrom').value;
  let to = document.getElementById('selectWeightTo').value;
  let divresult = document.getElementById('resultweight');

  // 2. Validar
  if (isNaN(value) || from === "" || to === "") {
    divresult.innerText = "Por favor, preencha todos os campos.";
    return;
  }

  // 3. Se as unidades forem iguais
  if (from === to) {
    divresult.innerText = `${value} ${from}`;
    return;
  }

  // 4. Definir os fatores (usando Grama 'G' como base)
  const factors = {
    "MG": 0.001, // 1 MG = 0.001 G
    "G": 1,
    "KG": 1000,  // 1 KG = 1000 G
    "T": 1000000 // 1 T = 1000000 G
  };

  // 5. Calcular
  let valueInGrams = value * factors[from];
  let result = valueInGrams / factors[to];

  // 6. Exibir
  divresult.innerText = `${value} ${from} = ${result} ${to}`;
}

// --- TEMPERATURA ---
function convertTemperature() {
  // 1. Pegar os elementos
  let value = parseFloat(document.getElementById('number-temperature').value);
  let from = document.getElementById('selectTempFrom').value;
  let to = document.getElementById('selectTempTo').value;
  let divresult = document.getElementById('resulttemperature');

  // 2. Validar
  if (isNaN(value) || from === "" || to === "") {
    divresult.innerText = "Por favor, preencha todos os campos.";
    return;
  }

  // 3. Se as unidades forem iguais
  if (from === to) {
    divresult.innerText = `${value.toFixed(2)} ${from}`;
    return;
  }

  let valueInCelsius;

  // 4. Calcular (Base: Celsius 'C')
  // Primeiro, converte 'from' para Celsius
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

  // Segundo, converte de Celsius para 'to'
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

  // 5. Exibir
  divresult.innerText = `${value.toFixed(2)} ${from} = ${result.toFixed(2)} ${to}`;
}

// --- FUNÇÃO DE TROCA (SWAP) ---
// Esta função faltava no seu JS original
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
    return; // Tipo desconhecido
  }

  // Troca os valores selecionados
  let tempValue = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = tempValue;
}