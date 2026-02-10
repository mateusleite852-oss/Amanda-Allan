//Top apoadores
function abrirRanking() {
  renderRanking();
  const modal = document.getElementById('modalRanking');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}
function fecharRanking() {
  const modal = document.getElementById('modalRanking');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function renderRanking() {
  const lista = document.getElementById('listaRanking');
  if (!lista) return;

  const pagos = presentes
    .filter(p => p.pago === true)
    .sort((a, b) => b.valor - a.valor);

  if (pagos.length === 0) {
    lista.innerHTML = `
      <li class="text-center text-neutral-500 py-6">
        Seja o primeiro a presentear! 🎉
      </li>
    `;
    return;
  }

  lista.innerHTML = '';

  pagos.forEach((p, i) => {

    let medalha = '🎁';
    let cor = 'bg-neutral-50';
    let destaque = '';

    if (i === 0) {
      medalha = '🥇';
      cor = 'bg-yellow-50 border border-yellow-300';
      destaque = 'scale-100 shadow-md';
    }

    if (i === 1) {
      medalha = '🥈';
      cor = 'bg-gray-50 border border-gray-300';
    }

    if (i === 2) {
      medalha = '🥉';
      cor = 'bg-orange-50 border border-orange-300';
    }

    lista.innerHTML += `

      <li class="
        flex items-center gap-3
        ${cor}
        rounded-xl px-4 py-3 mb-3
        ${destaque}
        transition
      ">

        <!-- Medalha -->
        <div class="text-2xl">
          ${medalha}
        </div>

        <!-- Info -->
        <div class="flex-1 text-sm">

          <p class="font-semibold text-neutral-800">
            ${p.pagoPor}
          </p>

          <p class="text-xs text-neutral-500">
            ${p.nome}
          </p>

        </div>

        <!-- Valor -->
        <div class="text-sm font-bold text-green-700">
          ${formatarMoeda(p.valor)}
        </div>

      </li>
    `;
  });
}

function ajustarTamanhoCards() {
  const cards = document.querySelectorAll('#lista-presentes > div');

  let largura = 100;

  if (window.innerWidth >= 1024) {
    largura = 33.333; // desktop = 3
  } 
  else if (window.innerWidth >= 640) {
    largura = 50; // tablet = 2
  }

  cards.forEach(card => {
    card.style.minWidth = largura + '%';
    card.style.scrollSnapAlign = 'start';
  });
}