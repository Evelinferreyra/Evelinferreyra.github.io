document.getElementById('checkAnswers').addEventListener('click', function () {
    const selects = document.querySelectorAll('.log-select');
    const inputs = document.querySelectorAll('.log-input');
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
    });

    // Mostrar retroalimentación
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';
    if (allCorrect) {
        feedback.textContent = '¡Todas tus respuestas son correctas! 🎉';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Algunas respuestas son incorrectas. Intenta de nuevo.';
        feedback.style.color = 'red';
    }
});
