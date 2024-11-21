// Función para finalizar el examen
document.getElementById('submitExam').addEventListener('click', function () {
    const selects = document.querySelectorAll('.exam-select');
    const inputs = document.querySelectorAll('.exam-input');
    let allCorrect = true;

    // Verificar selects
    selects.forEach(select => {
        const userAnswer = select.value;
        const correctAnswer = select.getAttribute('data-answer');

        if (userAnswer === correctAnswer) {
            select.style.borderColor = 'green';
        } else {
            select.style.borderColor = 'red';
            allCorrect = false;
        }
        select.disabled = true; // Bloquear selección
    });

    // Verificar inputs
    inputs.forEach(input => {
        const userAnswer = input.value;
        const correctAnswer = input.getAttribute('data-answer');

        if (userAnswer == correctAnswer) {
            input.style.borderColor = 'green';
        } else {
            input.style.borderColor = 'red';
            allCorrect = false;
        }
        input.disabled = true; // Bloquear edición
    });

    // Feedback del examen
    const feedback = document.getElementById('examFeedback');
    feedback.style.display = 'block';
    if (allCorrect) {
        feedback.textContent = '¡Examen completado con éxito! 🎉';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Examen finalizado. Revisa tus respuestas.';
        feedback.style.color = 'red';
    }

    // Bloquear el botón de envío y habilitar el de descarga
    this.disabled = true;
    document.getElementById('downloadPDF').disabled = false;
});

// Función para generar PDF con jsPDF
document.getElementById('downloadPDF').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título
    doc.setFontSize(18);
    doc.text('Examen de Logaritmos', 10, 10);

    // Contenido del examen
    const questions = [
        '1. ¿Qué es log₃(81)? Respuesta seleccionada:',
        '2. ¿Qué es log₁₀(1000)? Respuesta seleccionada:',
        '3. Resuelve log₂(32): Respuesta escrita:',
        '4. Resuelve log₇(1): Respuesta escrita:'
    ];
    const selects = document.querySelectorAll('.exam-select');
    const inputs = document.querySelectorAll('.exam-input');
    let yPosition = 20;

    // Agregar respuestas seleccionadas
    selects.forEach((select, index) => {
        doc.setFontSize(12);
        const answer = select.value || 'No respondida';
        doc.text(`${questions[index]} ${answer}`, 10, yPosition);
        yPosition += 10;
    });

    // Agregar respuestas escritas
    inputs.forEach((input, index) => {
        const answer = input.value || 'No respondida';
        doc.text(`${questions[selects.length + index]} ${answer}`, 10, yPosition);
        yPosition += 10;
    });

    
    doc.save('Examen_Logaritmos.pdf');
});
