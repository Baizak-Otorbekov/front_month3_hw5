 let num1, num2, operation;
let results = [];

function setOperation(op) {
  operation = op;
}

function calculate() {
  num1 = parseFloat(document.getElementById('num1').value);
  num2 = parseFloat(document.getElementById('num2').value);
  let result;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case 'power':
      result = power(num1, num2);
      break;
    case 'root':
      result = root(num1, num2);
      break;
    default:
      result = "Invalid operation";
  }

  results.push(result);
  displayResults();
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function root(base, degree) {
  return Math.pow(base, 1 / degree);
}

function displayResults() {
  let resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = "";
  results.forEach(function(result) {
    resultContainer.innerHTML += "<p>ИТОГ: " + result + "</p>";
  });
}

function clearResult() {
    results = [];
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    displayResults();
  }