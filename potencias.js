
  function calculatePower() {
    var power = document.getElementById('power').value;
    var result = '';
    switch (Math.abs(power) % 4) {
      case 0:
        result = '1';
        break;
      case 1:
        result = 'i';
        break;
      case 2:
        result = '-1';
        break;
      case 3:
        result = '-i';
        break;
    }
  
    document.getElementById('result').innerText = 'El resultado es: ' + result;
  }