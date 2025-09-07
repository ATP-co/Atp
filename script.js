function mostrarFormulario() {
    const formulario = document.getElementById('formulario-contacto');
    formulario.style.display = 'grid';
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario-contacto');
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // evita que recargue la página
      form.style.display = 'none'; // oculta el formulario
      alert('¡Gracias por tu mensaje!'); 
    });
});
