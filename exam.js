document.addEventListener("DOMContentLoaded", function() {
    // Variables
    const submitButton = document.getElementById("submitExam");
    const downloadButton = document.getElementById("downloadPDF");
    const feedbackDiv = document.getElementById("examFeedback");
    const problems = document.querySelectorAll(".problem");
    
    // Crear instancia de jsPDF
    const { jsPDF } = window.jspdf;
  
    // Función para verificar respuestas y dar retroalimentación
    function checkAnswers() {
      let score = 0;
  
      problems.forEach(problem => {
        const radios = problem.querySelectorAll('input[type="radio"]');
        const feedback = problem.querySelector('.feedback');
        let selectedAnswer = null;
  
        // Encuentra la respuesta seleccionada
        radios.forEach(radio => {
          if (radio.checked) {
            selectedAnswer = radio;
          }
        });
  
        // Verifica si la respuesta es correcta
        if (selectedAnswer && selectedAnswer.classList.contains('correct-answer')) {
          feedback.textContent = "¡Correcto!";
          feedback.style.color = "green";
          score++;
        } else if (selectedAnswer) {
          feedback.textContent = "Incorrecto. Intenta de nuevo.";
          feedback.style.color = "red";
        }
  
        feedback.style.display = "block";
      });
  
      // Muestra el puntaje final y habilita el botón de descarga
      feedbackDiv.textContent = `Tu puntaje es: ${score} de ${problems.length}`;
      downloadButton.disabled = false;
  
      // Deshabilitar la interacción después de finalizar el examen
      disableInteraction();
    }
  
    // Función para deshabilitar interacción después de finalizar examen
    function disableInteraction() {
      // Deshabilitar todos los radios
      const allRadios = document.querySelectorAll('input[type="radio"]');
      allRadios.forEach(radio => {
        radio.disabled = true;
      });
  
      // Deshabilitar el botón de finalizar examen
      submitButton.disabled = true;
    }
  
    // Función para generar el PDF
    function generatePDF() {
      const doc = new jsPDF();
      
      // Cambiar la fuente a una fuente personalizada
      doc.setFont("times", "normal");
      doc.setFontSize(14);
  
      // Título del examen con un estilo diferente
      doc.setFontSize(20);
      doc.text("Examen de Logaritmos y Exponentes", 10, 20);
      doc.setFontSize(14);
  
      let yPosition = 40; // Posición inicial para las preguntas
  
      // Recorrer las preguntas y respuestas
      problems.forEach((problem, index) => {
        const questionText = problem.querySelector('strong').textContent;
        const selectedAnswer = problem.querySelector('input[type="radio"]:checked');
        const feedback = problem.querySelector('.feedback');
        
        // Estilo para la pregunta
        doc.setFont("times", "bold");
        doc.text(`${index + 1}. ${questionText}`, 10, yPosition);
        
        // Respuestas
        const answers = problem.querySelectorAll('li');
        answers.forEach((answer, i) => {
          const answerText = answer.textContent;
          const isSelected = selectedAnswer && selectedAnswer.value === answer.querySelector('input').value;
          const isCorrect = answer.querySelector('input').classList.contains('correct-answer');
          
          // Marcar respuestas correctas
          if (isSelected) {
            if (isCorrect) {
              doc.setTextColor(0, 128, 0); // Verde para respuestas correctas
            } else {
              doc.setTextColor(255, 0, 0); // Rojo para respuestas incorrectas
            }
          } else {
            doc.setTextColor(0, 0, 0); // Texto negro para respuestas no seleccionadas
          }

          doc.text(`  ${String.fromCharCode(65 + i)}. ${answerText}`, 10, yPosition + 10 + (i * 10));
        });
        
        // Aumentar la posición para la siguiente pregunta
        yPosition += 30;
      });
  
      // Añadir una sección final con el puntaje
      doc.setFont("times", "bold");
      doc.text(`Tu puntaje final es: ${feedbackDiv.textContent}`, 10, yPosition);
  
      // Guardar el PDF
      doc.save("examen_logaritmos.pdf");
    }
  
    // Asociar la función de comprobar respuestas al botón de finalizar examen
    submitButton.addEventListener("click", checkAnswers);
  
    // Habilitar la función de descarga del PDF
    downloadButton.addEventListener("click", generatePDF);
});
