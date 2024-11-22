document.querySelectorAll('.explanation-btn').forEach(button => {
    button.addEventListener('click', function () {
        const explanation = this.nextElementSibling; // Div de explicación
        explanation.classList.toggle('hidden'); // Alternar visibilidad de la explicación

        // Ocultar el botón de explicación cuando se muestra la explicación
        if (!explanation.classList.contains('hidden')) {
            this.classList.add('hidden-btn'); // Añadir clase para ocultar el botón
        } else {
            this.classList.remove('hidden-btn'); // Eliminar clase para mostrar el botón nuevamente
        }
    });
});

// Funcionalidad para el botón "Comprobar"
document.querySelectorAll('.check-btn').forEach(button => {
    button.addEventListener('click', function () {
        const problem = this.closest('.problem'); // Encuentra el problema más cercano
        const selectedAnswer = problem.querySelector('input[type="radio"]:checked'); // Obtiene la respuesta seleccionada

        const feedbackContainer = problem.querySelector('.feedback'); // Contenedor de retroalimentación

        if (selectedAnswer) {
            const correctAnswer = problem.querySelector('.correct-answer'); // Encuentra la respuesta correcta

            // Verificar si la respuesta seleccionada es correcta
            if (correctAnswer && selectedAnswer.value === correctAnswer.value) {
                feedbackContainer.textContent = '¡Respuesta correcta! 🎉'; // Mostrar mensaje de éxito
                feedbackContainer.style.color = 'green'; // Cambiar color a verde
            } else {
                feedbackContainer.textContent = 'Respuesta incorrecta. Intenta de nuevo.'; // Mostrar mensaje de error
                feedbackContainer.style.color = 'red'; // Cambiar color a rojo
            }

        } else {
            feedbackContainer.textContent = 'Por favor, selecciona una respuesta.'; // Solicitar que elija una opción
            feedbackContainer.style.color = 'orange'; // Cambiar color a naranja
        }

        feedbackContainer.style.display = 'block'; // Asegurarse de que el mensaje se muestre
    });
});
