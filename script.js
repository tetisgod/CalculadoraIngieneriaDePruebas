var memory = 0;

function addToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    var expression = document.getElementById('display').value;
    // Validar expresión antes de evaluar
    if (!isValidExpression(expression)) {
      throw new Error('Operación no válida');
    }
    var result = eval(expression);
    // Redondeo al resultado con 2 decimales
    result = Math.round(result * 100) / 100;
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
    setTimeout(function() {
      clearDisplay();
    }, 1500); // Limpiar el display después de 1.5 segundos
  }
}

function isValidExpression(expression) {
  var regex = /^[\d\+\-\*\/\.]+$/; // Solo números y caracteres de operación
  return regex.test(expression);
}

function addToMemory() {
  var currentValue = parseFloat(document.getElementById('display').value);
  if (!isNaN(currentValue)) {
    memory += currentValue;
  }
}

function subtractMemory() {
  var currentValue = parseFloat(document.getElementById('display').value);
  if (!isNaN(currentValue)) {
    memory -= currentValue;
  }
}

function recallMemory() {
  document.getElementById('display').value = memory;
}

function clearMemory() {
  memory = 0;
}

function makeEditable() {
  var display = document.getElementById('display');
  display.removeAttribute('readonly');
  display.focus();
}

// Restablecer la propiedad readonly cuando el usuario termina de editar
document.getElementById('display').addEventListener('blur', function () {
  this.setAttribute('readonly', true);
});

// Validar la entrada para permitir solo números
