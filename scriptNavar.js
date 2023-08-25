const abrir = document.getElementById('open')
const cerrar = document.getElementById('close')
const container = document.querySelector('.container')

abrir.addEventListener('click', () => container.classList.add('show-nav'))

cerrar.addEventListener('click', () => container.classList.remove('show-nav'))