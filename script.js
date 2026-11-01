document.addEventListener('DOMContentLoaded', () => {

  // Lógica del Evaluador de Nivel
  const btnEvaluar = document.getElementById('btn-evaluar');
  const selectNecesidad = document.getElementById('necesidad');
  const divResultado = document.getElementById('resultado');

  btnEvaluar.addEventListener('click', () => {
    const valor = selectNecesidad.value;

    if (!valor) {
      divResultado.textContent = 'Por favor selecciona una opción para calcular la recomendación.';
      divResultado.style.borderColor = '#e74c3c';
      divResultado.style.color = '#c0392b';
      divResultado.style.backgroundColor = '#fadbd8';
      divResultado.classList.remove('hidden');
      return;
    }

    // Reset estilos de éxito
    divResultado.style.borderColor = '#2ecc71';
    divResultado.style.color = '#27ae60';
    divResultado.style.backgroundColor = '#e8f8f5';

    if (valor === 'basico') {
      divResultado.innerHTML = '👉 <strong>Te recomendamos: Entrenamiento Básico.</strong> Ideal para estructurar reglas en casa, socializar y corregir conductas indeseadas tempranas.';
    } else if (valor === 'intermedio') {
      divResultado.innerHTML = '👉 <strong>Te recomendamos: Entrenamiento Intermedio.</strong> Diseñado para afianzar la atención con distracciones y lograr obediencia fluida en la calle.';
    } else if (valor === 'avanzado') {
      divResultado.innerHTML = '👉 <strong>Te recomendamos: Entrenamiento Avanzado.</strong> Para control total a distancia sin correa, trabajo de agilidad o protección profesional.';
    }

    divResultado.classList.remove('hidden');
  });

  // Lógica de Envío del Formulario
  const formContacto = document.getElementById('form-contacto');
  const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

  formContacto.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const perro = document.getElementById('perro').value;

    mensajeConfirmacion.innerHTML = ¡Gracias, <strong>${nombre}</strong>! Hemos recibido los datos de <strong>${perro}</strong>. Te contactaremos muy pronto para agendar tu primera sesión.;
    mensajeConfirmacion.classList.remove('hidden');

    formContacto.reset();
  });

});