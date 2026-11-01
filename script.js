
document.addEventListener('DOMContentLoaded', () => {

  // MENÚ RESPONSIVE
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  menuToggle.addEventListener('click', () => {
    const abierto = nav.classList.toggle('active');

    menuToggle.textContent = abierto ? '✕' : '☰';
    menuToggle.setAttribute('aria-expanded', String(abierto));
  });

  // CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
  nav.querySelectorAll('a').forEach(enlace => {
    enlace.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.textContent = '☰';
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // EVALUADOR DE NIVEL
  const btnEvaluar = document.getElementById('btn-evaluar');
  const selectNecesidad = document.getElementById('necesidad');
  const resultado = document.getElementById('resultado');

  const recomendaciones = {
    basico: {
      titulo: 'Nivel recomendado: BÁSICO',
      texto: 'Tu perro puede comenzar desarrollando hábitos, aprendiendo órdenes fundamentales y mejorando su convivencia en casa.'
    },

    intermedio: {
      titulo: 'Nivel recomendado: INTERMEDIO',
      texto: 'Tu mascota puede trabajar en obediencia con distracciones, autocontrol y una mejor respuesta a las órdenes.'
    },

    avanzado: {
      titulo: 'Nivel recomendado: AVANZADO',
      texto: 'Tu perro puede desarrollar habilidades más complejas, ejercicios de precisión, agilidad y obediencia avanzada.'
    }
  };

  btnEvaluar.addEventListener('click', () => {
    const nivel = selectNecesidad.value;

    resultado.classList.remove('hidden');

    if (!nivel) {
      resultado.textContent = 'Por favor, selecciona una opción antes de continuar.';
      resultado.style.background = '#fff0ed';
      resultado.style.color = '#b52b20';
      resultado.style.borderColor = '#e4a29a';
      return;
    }

    const recomendacion = recomendaciones[nivel];

    resultado.textContent =
      recomendacion.titulo + '. ' + recomendacion.texto;

    resultado.style.background = '#eaf7ee';
    resultado.style.color = '#236b39';
    resultado.style.borderColor = '#5caa70';
  });

  // FORMULARIO DE CONTACTO
  const formContacto = document.getElementById('form-contacto');
  const confirmacion = document.getElementById('mensaje-confirmacion');

  formContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();

    if (!formContacto.reportValidity()) {
      return;
    }

    const nombre = document.getElementById('nombre').value.trim();
    const perro = document.getElementById('perro').value.trim();
    const programa = document.getElementById('programa').value;

    confirmacion.textContent =
      `¡Gracias, ${nombre}! Hemos recibido tu consulta sobre ${perro}. Tu programa de interés es ${programa}. Esta demostración no envía datos a un correo, pero tu formulario se ha procesado correctamente en esta página.`;

    confirmacion.classList.remove('hidden');

    formContacto.reset();

    confirmacion.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });

  // BOTÓN VOLVER ARRIBA
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});
