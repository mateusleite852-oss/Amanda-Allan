// NAV / UI
function showTab(id) {

  // Esconde todas as abas
  document
    .querySelectorAll('.tab')
    .forEach(tab => tab.classList.add('hidden'));

  // Mostra a ativa
  const active = document.getElementById(id);
  if (active) active.classList.remove('hidden');


  // Remove destaque do menu
  document
    .querySelectorAll('nav button')
    .forEach(b =>
      b.classList.remove('font-bold', 'text-neutral-900')
    );

  // Destaca aba atual Presents
  if (id === 'presentes') {
    const btn = document.getElementById('btnNavPresentes');
    if (btn) {
      btn.classList.add('text-neutral-900');
    }
  }
  // Destaca aba atual Home
  if (id === 'home') {
    const btn = document.getElementById('btnNavHome');
    if (btn) {
      btn.classList.add('text-neutral-900');
    }
  }


  // Scroll pro topo
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}