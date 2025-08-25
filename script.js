function abrirSobre() {
  const broche = document.querySelector('.broche');
  const carta = document.querySelector('.letter');

  // Animar broche
  broche.classList.add('quitado');

  // Mostrar carta después
  setTimeout(() => {
    carta.classList.add('mostrar');
  }, 800);
}
