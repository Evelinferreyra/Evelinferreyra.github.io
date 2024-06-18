
function calculatePower() {
  var power = document.getElementById('power').value;
  var result = '1'; // Valor por defecto para cualquier potencia de 0
  var powersOfI = ['1', 'i', '-1', '-i'];

  // Ajustamos para potencias negativas y calculamos el resultado
  power = parseInt(power, 10);
  if (!isNaN(power)) {
    result = powersOfI[((power % 4) + 4) % 4];
  }

  document.getElementById('result').innerText = 'El resultado es: ' + result;
}