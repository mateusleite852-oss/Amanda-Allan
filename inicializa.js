// Inicializa
showSlide(index);

// Não colocar nada abaixo daqui
document.addEventListener('DOMContentLoaded', () => {
  // FIX do botão Presentes (tinha classe bugada no HTML)
  const btns = document.querySelectorAll('nav button');
  btns.forEach(btn => {
    if (btn.textContent.trim() === 'Presentes') btn.className = 'hover:opacity-70 transition';
  });

  showTab('home');
  iniciarContagem();
  initModalClose();

  // ✅ filtros + render
  initFiltrosPresentes();
  renderPresentes();
  
  setTimeout(() => {
    ajustarTamanhoCards();
  }, 200);

  window.addEventListener('resize', ajustarTamanhoCards);
});