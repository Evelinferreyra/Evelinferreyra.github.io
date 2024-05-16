class NumeroComplejo {
    constructor(real, imaginario) {
      this.real = real;
      this.imaginario = imaginario;
    }
  
    // Método para multiplicar dos números complejos
    multiplicar(otro) {
      return new NumeroComplejo(
        this.real * otro.real - this.imaginario * otro.imaginario,
        this.real * otro.imaginario + this.imaginario * otro.real
      );
    }
  
    // Método para obtener la potencia de i
    static potenciaDeI(n) {
      // Las potencias de i se repiten cada 4, así que usamos módulo 4 para simplificar
      switch (n % 4) {
        case 0: return new NumeroComplejo(1, 0); // i^0 = 1
        case 1: return new NumeroComplejo(0, 1); // i^1 = i
        case 2: return new NumeroComplejo(-1, 0); // i^2 = -1
        case 3: return new NumeroComplejo(0, -1); // i^3 = -i
      }
    }
  
    toString() {
      return `${this.real} + ${this.imaginario}i`;
    }
  }
  
  // Ejemplo de uso:
  let potencia = NumeroComplejo.potenciaDeI(5);
  console.log(`i a la 5 es: ${potencia.toString()}`); // Debería ser igual a i