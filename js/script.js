const titulo = document.getElementById('titulo');
const botonCambiar = document.getElementById('botonCambiar');

botonCambiar.addEventListener('click', function () {
    titulo.textContent = '¡Texto cambiado!';
});

const nombre = document.getElementById('nombre');
const botonSaludar = document.getElementById('botonSaludar');
const resultado = document.getElementById('resultado');

botonSaludar.addEventListener('click', function () {
    resultado.textContent = '¡Hola, ' + nombre.value + '!';
});