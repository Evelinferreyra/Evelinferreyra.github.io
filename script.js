function sumar() {
    var real1 = parseFloat(document.getElementById('real1').value);
    var imag1 = parseFloat(document.getElementById('imag1').value);
    var real2 = parseFloat(document.getElementById('real2').value);
    var imag2 = parseFloat(document.getElementById('imag2').value);

    var resultadoReal = real1 + real2;
    var resultadoImag = imag1 + imag2;

    mostrarResultado(resultadoReal, resultadoImag);
}

function restar() {
    var real1 = parseFloat(document.getElementById('real1').value);
    var imag1 = parseFloat(document.getElementById('imag1').value);
    var real2 = parseFloat(document.getElementById('real2').value);
    var imag2 = parseFloat(document.getElementById('imag2').value);

    var resultadoReal = real1 - real2;
    var resultadoImag = imag1 - imag2;

    mostrarResultado(resultadoReal, resultadoImag);
}

function multiplicar() {

    //declara variables para reales e imaginarios
    var real1 = parseFloat(document.getElementById('real1').value);
    var imag1 = parseFloat(document.getElementById('imag1').value);
    var real2 = parseFloat(document.getElementById('real2').value);
    var imag2 = parseFloat(document.getElementById('imag2').value);

    var resultadoReal = (real1 * real2) - (imag1 * imag2);
    var resultadoImag = (real1 * imag2) + (real2 * imag1);

    mostrarResultado(resultadoReal, resultadoImag);
}

function dividir() {
    var real1 = parseFloat(document.getElementById('real1').value);
    var imag1 = parseFloat(document.getElementById('imag1').value);
    var real2 = parseFloat(document.getElementById('real2').value);
    var imag2 = parseFloat(document.getElementById('imag2').value);

    var denominador = (real2 * real2) + (imag2 * imag2);
    var resultadoReal = ((real1 * real2) + (imag1 * imag2)) / denominador;
    var resultadoImag = ((imag1 * real2) - (real1 * imag2)) / denominador;

    mostrarResultado(resultadoReal, resultadoImag);
}

function mostrarResultado(real, imag) {
    document.getElementById('resultado').innerText = 'Resultado: ' + real + ' + ' + imag + 'i';
}

