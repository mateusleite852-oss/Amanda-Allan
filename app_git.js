// =======================
// CONFIG PIX
// =======================
let presenteSelecionado = null;
let metodoPagamento = "pix"; // default
const pixKey = '48017327803'; // CPF
const recebedorPix = 'MATEUS DE NORONHA LEITE'; // nome do recebedor
const cidadePix = 'SAO PAULO'; // cidade do recebedor
const dataCasamento = new Date('2026-12-19T16:00:00');

// =======================
// lISTA DE PRESENTES
// =======================
// const BASE_PATH = "./"; Não usado mais.
const presentes = [
  { id: 1,  nome: 'Jogo de Panelas', valor: 260, imagem: './1.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 2,  nome: 'Lava e Seca', valor: 3060, imagem: './2.png', categoria: 'eletrodomesticos', linkpgm: '', pago: false, pagoPor: ''},
  { id: 3,  nome: 'Aspirador', valor: 170, imagem: './3.png', categoria: 'eletrodomesticos', linkpgm: '',pago: false, pagoPor: ''},
  { id: 4,  nome: 'Cesto Roupa Bambu', valor: 94, imagem: './4.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 5,  nome: 'Geladeira', valor: 3400, imagem: './5.png', categoria: 'eletrodomesticos', linkpgm: '', pago: false, pagoPor: ''},
  { id: 6,  nome: 'Micro-ondas', valor: 570, imagem: './6.png', categoria: 'eletrodomesticos', linkpgm: '', pago: false, pagoPor: ''},
  { id: 7,  nome: 'Fogão', valor: 1350, imagem: './7.png', categoria: 'eletrodomesticos', linkpgm: '', pago: false, pagoPor: ''},
  { id: 8,  nome: 'Liquidificador', valor: 170, imagem: './8.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 9,  nome: 'Jogo de Jantar', valor: 320, imagem: './9.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 10, nome: 'Cafeteira Espresso', valor: 399, imagem: './10.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 11, nome: 'Faqueiro', valor: 93, imagem: './11.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 12, nome: 'Sanduicheira', valor: 260, imagem: './12.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 13, nome: 'Jogo de Facas', valor: 120, imagem: './13.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 14, nome: 'Pipoqueira Elétrica', valor: 160, imagem: './14.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 15, nome: 'Jogo de copos', valor: 139, imagem: './15.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 16, nome: 'Ferro a Vapor', valor: 256, imagem: './16.png', categoria: 'eletrodomesticos', linkpgm: '', pago: false, pagoPor: ''},
  { id: 17, nome: 'Smart TV Philips 58"', valor: 2564, imagem: './17.png', categoria: 'eletronicos', linkpgm: '', pago: false, pagoPor: ''},
  { id: 18, nome: 'Armário de Cozinha Compacta', valor: 598, imagem: './18.png', categoria: 'moveis', linkpgm: '', pago: false, pagoPor: ''},
  { id: 19, nome: 'Rack + Painel para TV', valor: 500, imagem: './19.png', categoria: 'moveis', linkpgm: '', pago: false, pagoPor: ''},
  { id: 20, nome: 'Robô Aspirador', valor: 288, imagem: './20.png', categoria: 'eletrodomesticos', linkpgm: '', pago: false, pagoPor: ''},
  { id: 21, nome: 'Air Fryer', valor: 399, imagem: './21.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 22, nome: 'Depurador/Exaustor', valor: 512, imagem: './22.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 23, nome: 'Cama Box Casal', valor: 949, imagem: './23.png', categoria: 'quarto', linkpgm: '', pago: false, pagoPor: ''},
  { id: 24, nome: 'Guarda-roupa Casal', valor: 1269, imagem: './24.png', categoria: 'moveis', linkpgm: '', pago: false, pagoPor: ''},
  { id: 25, nome: 'Jogo de Cama Queen', valor: 158, imagem: './25.png', categoria: 'quarto', linkpgm: '', pago: false, pagoPor: ''},
  { id: 26, nome: 'Jogo de Toalhas', valor: 185, imagem: './26.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 27, nome: 'Kit Travesseiros ', valor: 177, imagem: './27.png', categoria: 'quarto', linkpgm: '', pago: false, pagoPor: ''},
  { id: 28, nome: 'Kit Potes Herméticos', valor: 176, imagem: './28.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 29, nome: 'Sofá com USB', valor: 1433, imagem: './29.png', categoria: 'moveis', linkpgm: '', pago: false, pagoPor: ''},
  { id: 30, nome: 'Batedeira Portátil', valor: 113, imagem: './30.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 31, nome: 'Ventilador de Mesa', valor: 124, imagem: './31.png', categoria: 'eletrodomesticos', linkpgm: '', pago: false, pagoPor: ''},
  { id: 32, nome: 'Kit Churrasco', valor: 169, imagem: './32.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 33, nome: 'Tábua de Passar', valor: 129, imagem: './33.png', categoria: 'lavanderia', linkpgm: '', pago: false, pagoPor: ''},
  { id: 34, nome: 'Kit Potes de Vidro', valor: 125, imagem: './34.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 35, nome: 'Kit Sobremesa', valor: 159, imagem: './35.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 36, nome: 'Kit Pratos Sobremesa', valor: 271, imagem: './36.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 37, nome: 'Garrafa Térmica Inox', valor: 110, imagem: './37.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 38, nome: 'Kit Organizadores Geladeira', valor: 189, imagem: './38.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 39, nome: 'Kit Utensílios Silicone', valor: 128, imagem: './39.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 40, nome: 'Echo Dot  - Alexia', valor: 568, imagem: './40.png', categoria: 'eletronicos', linkpgm: '', pago: false, pagoPor: ''},
  { id: 41, nome: 'Cabeceira Casal/Queen', valor: 440, imagem: './41.png', categoria: 'moveis', linkpgm: '', pago: false, pagoPor: ''},
  { id: 42, nome: 'Espelho Orgânico Grande', valor: 98, imagem: './42.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 43, nome: 'Suporte para Especiarias', valor: 199, imagem: './43.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 44, nome: 'Quadros Decorativos', valor: 129, imagem: './44.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 45, nome: 'Tapete Felpudo', valor: 99, imagem: './45.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 46, nome: 'Kit Capas de Almofadas', valor: 68, imagem: './46.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 47, nome: 'Cortina Blackout', valor: 134, imagem: './47.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 48, nome: 'Jogo Tapete Cozinha', valor: 142, imagem: './48.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 49, nome: 'Tapete Banho', valor: 142, imagem: './49.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 50, nome: 'Multiprocessador Elétrico', valor: 119, imagem: './50.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 51, nome: 'Espremedor de Frutas', valor: 93, imagem: './51.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 52, nome: 'Kit Porta-retratos', valor: 120, imagem: './52.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 53, nome: 'Aparador Bar com Adega', valor: 294, imagem: './53.png', categoria: 'moveis', linkpgm: '', pago: false, pagoPor: ''},
  { id: 54, nome: 'Kit Petisqueiras', valor: 132, imagem: './54.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 55, nome: 'Colcha Casal', valor: 105, imagem: './55.png', categoria: 'quarto', linkpgm: '', pago: false, pagoPor: ''},
  { id: 56, nome: 'Arara Dupla Closet', valor: 120, imagem: './56.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 57, nome: 'Luminária de Mesa Articulável', valor: 92, imagem: './57.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 58, nome: 'Mesa de Jantar Oval', valor: 577, imagem: './58.png', categoria: 'moveis', linkpgm: '', pago: false, pagoPor: ''},
  { id: 59, nome: 'Panela de Arroz Elétrica', valor: 130, imagem: './59.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 60, nome: 'Kit Travessas LE CHEF', valor: 75, imagem: './60.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 61, nome: 'Kit Tigelas', valor: 115, imagem: './61.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 62, nome: 'Kit Banheiro', valor: 140, imagem: './62.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 63, nome: 'Kit Travessas Ferro Fundido', valor: 173, imagem: './63.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 64, nome: 'Bandeja de Café com Alças', valor: 126, imagem: './64.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 65, nome: 'Kit Taças Vinho', valor: 126, imagem: './65.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 66, nome: 'Boleira Bambu', valor: 110, imagem: './66.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 67, nome: 'Mesa de Centro Oval', valor: 228, imagem: './67.png', categoria: 'moveis', linkpgm: '', pago: false, pagoPor: ''},
  { id: 68, nome: 'Porta-temperos Giratório 20 Potes', valor: 119, imagem: './68.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 69, nome: 'Jarra + copos', valor: 107, imagem: './69.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 70, nome: 'Jogo Formas Retangulares', valor: 105, imagem: './70.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 71, nome: 'Kit Formas Redondas', valor: 94, imagem: './71.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 72, nome: 'Kit Vasos para Planta', valor: 148, imagem: './72.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 73, nome: 'Cortina Cozinha', valor: 60, imagem: './73.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 74, nome: 'Jogo Americano', valor: 73, imagem: './74.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 75, nome: 'Suporte Papel Toalha', valor: 100, imagem: './75.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 76, nome: 'Escorredor Suspenso', valor: 130, imagem: './76.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  //repetido. { id:  77, nome: 'Kit Utensílios 7 Peças', valor: 55, imagem: './77.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 78, nome: 'Kit Dispenser', valor: 74, imagem: './78.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 79, nome: 'Lixeira Inox', valor: 100, imagem: './79.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 80, nome: 'Kit Toalhas de Mesa', valor: 113, imagem: './80.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 81, nome: 'Protetor de Sofá', valor: 145, imagem: './81.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 82, nome: 'Manta para Sofá', valor: 48, imagem: './82.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  //repetido. { id: 83, nome: 'Capa Protetora Sofá', valor: 152, imagem: './83.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 84, nome: 'Edredom Queen', valor: 233, imagem: './84.png', categoria: 'quarto', linkpgm: '', pago: false, pagoPor: ''},
  { id: 85, nome: 'Varal de Chão', valor: 89, imagem: './85.png', categoria: 'lavanderia', linkpgm: '', pago: false, pagoPor: ''},
  { id: 86, nome: 'Jogo Xícaras', valor: 189, imagem: './86.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 87, nome: 'Ar-condicionado', valor: 3199, imagem: './87.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 88, nome: 'Whisky Royal Salute 21 anos', valor: 899, imagem: './88.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 89, nome: 'Kit Canecas', valor: 113, imagem: './89.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 90, nome: 'Kit Canecas Vidro', valor: 193, imagem: './90.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 91, nome: 'Purificador de Água', valor: 499, imagem: './91.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  //repetido. { id: 92, nome: 'Jogo de Cama Queen', valor: 279, imagem: './92.png', categoria: 'quarto', linkpgm: '', pago: false, pagoPor: ''},
  { id: 93, nome: 'Soundbar / Home Theater', valor: 369, imagem: './93.png', categoria: 'casa', linkpgm: '', pago: false, pagoPor: ''},
  { id: 94, nome: 'Panela de Pressão', valor: 220, imagem: './94.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 95, nome: 'Kit Potes com Trava', valor: 160, imagem: './95.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 96, nome: 'Kit Limpeza', valor: 114, imagem: './96.png', categoria: 'limpeza', linkpgm: '', pago: false, pagoPor: ''},
  { id: 97, nome: 'Mesa Bistrô + Banquetas', valor: 754, imagem: './97.png', categoria: 'cozinha', linkpgm: '', pago: false, pagoPor: ''},
  { id: 98, nome: 'Vale ingresso de show', valor: 300, imagem: './98.png', categoria: 'outros', linkpgm: '', pago: false, pagoPor: ''},
  { id: 99, nome: 'Vale restaurante romântico', valor: 250, imagem: './99.png', categoria: 'outros', linkpgm: '', pago: false, pagoPor: ''},
  { id: 100, nome: 'Vale dia de Spar casal', valor: 350, imagem: './100.png', categoria: 'outros', linkpgm: '', pago: false, pagoPor: ''},
  { id: 101, nome: 'Vale passagem aérea', valor: 200, imagem: './101.png', categoria: 'outros', linkpgm: '', pago: false, pagoPor: ''},
];


// =======================
// NAV / UI
// =======================
function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));
  const active = document.getElementById(id);
  if (active) active.classList.remove('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =======================
// FILTROS
// =======================
let filtros = {
  valor: 'all',
  categoria: 'all',
  busca: '',
  especial: 'all'
}
function formatarMoeda(valor) {
  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}
function normalizarTexto(str) {
  return String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function aplicarFiltros(lista) {
  let filtrados = [...lista];

  // faixa de preço
  if (filtros.valor !== 'all') {
    const maximo = Number(filtros.valor);
    filtrados = filtrados.filter(p => Number(p.valor) >= maximo);
  }

  // categoria
  if (filtros.categoria !== 'all') {
    filtrados = filtrados.filter(p => (p.categoria || 'outros') === filtros.categoria);
  }

  // busca
  if (String(filtros.busca).trim() !== '') {
    const q = normalizarTexto(filtros.busca.trim());
    filtrados = filtrados.filter(p => normalizarTexto(p.nome).includes(q));
  }
// mais caro / mais barato - Obsoleto - Mudei de ideia
//if (filtros.especial !== 'all' && filtrados.length > 0) {
//  if (filtros.especial === 'mais-barato') {
//    const menor = Math.min(...filtrados.map(p => Number(p.valor)));
//    filtrados = filtrados.filter(p => Number(p.valor) === menor);
//}
//
//  if (filtros.especial === 'mais-caro') {
//    const maior = Math.max(...filtrados.map(p => Number(p.valor)));
//   filtrados = filtrados.filter(p => Number(p.valor) === maior);
//  }
//}

// ordenação por valor
if (filtros.especial !== 'all') {
  if (filtros.especial === 'mais-barato') {
    filtrados.sort((a, b) => Number(a.valor) - Number(b.valor));
  }

  if (filtros.especial === 'mais-caro') {
    filtrados.sort((a, b) => Number(b.valor) - Number(a.valor));
  }
}
  return filtrados;
}

// =======================
// PRESENTES (com filtros)
// =======================
function renderPresentes() {
  const lista = document.getElementById('lista-presentes');
  const contador = document.getElementById('contadorPresentes');
  if (!lista) return;

  const filtrados = aplicarFiltros(presentes);
  lista.innerHTML = '';

  filtrados.forEach((p) => {
    const isPago = p.pago === true; // marca presente como pago
    const card = document.createElement('div');
    card.className = `
      group bg-white rounded-3xl shadow p-8 text-center transition-all duration-300
      ${isPago 
        ? 'opacity-60 cursor-not-allowed' 
        : 'cursor-pointer hover:-translate-y-2 hover:shadow-xl'}
    `;

    card.innerHTML = `
      <div class="h-44 mb-5 overflow-hidden rounded-2xl bg-neutral-50 flex items-center justify-center">
        <img 
          src="${p.imagem}" 
          alt="${p.nome}" 
          class="w-full h-full object-contain p-3 transition-transform duration-500
                 ${isPago ? '' : 'group-hover:scale-110'}"
        />
      </div>

    <h3 class="text-xl font-semibold mb-2">${p.nome}</h3>

    ${
      isPago
        ? `<span class="inline-block mt-2 text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
             Presente já recebido por ${p.pagoPor} 💚
           </span>`
        : `<p class="text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             ${formatarMoeda(p.valor)}
           </p>`
    }
    `;

    if (!isPago) {
      card.addEventListener('click', () => {
        const idxOriginal = presentes.findIndex(x => x.id === p.id);
        abrirModal(idxOriginal);
      });
    }

    lista.appendChild(card);
  });

//ajustarImagensCards(); sem utilidade

if (contador) {
    contador.innerText = `${filtrados.length}, presente(s) encontrado(s)`;
  }
}
function ajustarImagensCards() {
  const imgs = document.querySelectorAll('#lista-presentes img[data-fit="auto"]');

  imgs.forEach(img => {
    img.onload = () => {
      const ratio = img.naturalWidth / img.naturalHeight;

      // muito horizontal -> contain
      if (ratio > 1.35) {
        img.classList.remove('object-cover');
        img.classList.add('object-contain', 'p-3');
      } else {
        img.classList.remove('object-contain', 'p-3');
        img.classList.add('object-cover');
      }
    };

    if (img.complete) img.onload();
  });
}

function initFiltrosPresentes() {
  const filtrovalor = document.getElementById('filtrovalor'); // campo valor
  const filtroEspecial = document.getElementById('filtroEspecial'); //mais caro / mais barato
  const filtroCategoria = document.getElementById('filtroCategoria'); // campo categoria
  const filtroBusca = document.getElementById('filtroBusca'); // campo text busca
  const btnLimpar = document.getElementById('btnLimparFiltros'); // botão limpar

  if (!filtrovalor || !filtroCategoria || !filtroBusca || !btnLimpar) return; // validação

// eventos de busca
  filtrovalor.addEventListener('change', (e) => {
    filtros.valor = e.target.value;
    renderPresentes();
  });
  if (filtroEspecial) {
    filtroEspecial.addEventListener('change', (e) => {
      filtros.especial = e.target.value;
      renderPresentes();
    });
  }
  filtroCategoria.addEventListener('change', (e) => {
    filtros.categoria = e.target.value;
    renderPresentes();
  });
  filtroBusca.addEventListener('input', (e) => {
    filtros.busca = e.target.value;
    renderPresentes();
  });
  btnLimpar.addEventListener('click', () => {
    filtros = { valor: 'all', categoria:  'all', busca: '', especial: 'all' };
    filtrovalor.value = 'all';
    filtroCategoria.value = 'all';
    filtroBusca.value = '';
    filtroEspecial.value = 'all';
    renderPresentes();
  });
}

// =======================
// COUNTDOWN
// =======================
function iniciarContagem() {
  function tick() {
    const diff = dataCasamento - new Date();

    const dias = document.getElementById('dias');
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');

    if (!dias || !horas || !minutos || !segundos) return;

    if (diff <= 0) {
      dias.innerText = '0';
      horas.innerText = '0';
      minutos.innerText = '0';
      segundos.innerText = '0';
      return;
    }

    dias.innerText = String(Math.floor(diff / 86400000));
    horas.innerText = String(Math.floor((diff / 3600000) % 24));
    minutos.innerText = String(Math.floor((diff / 60000) % 60));
    segundos.innerText = String(Math.floor((diff / 1000) % 60));
  }

  tick();
  setInterval(tick, 1000);
}

// =======================
// PIX (BR CODE OFICIAL)
// =======================
function gerarPixBRCode(valor) {
  // TLV helper
  function tlv(id, value) {
    const len = String(value.length).padStart(2, '0');
    return id + len + value;
  }

  // remove não numéricos do CPF
  function onlyNumbers(str) {
    return String(str).replace(/\D/g, '');
  }

  // valor com 2 casas
  function formatValue(v) {
    return Number(v).toFixed(2);
  }

  // CRC16-CCITT
  function crc16(payload) {
    let polinomio = 0x1021;
    let resultado = 0xffff;

    for (let i = 0; i < payload.length; i++) {
      resultado ^= payload.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        if ((resultado & 0x8000) !== 0) resultado = (resultado << 1) ^ polinomio;
        else resultado <<= 1;
        resultado &= 0xffff;
      }
    }

    return resultado.toString(16).toUpperCase().padStart(4, '0');
  }

  const chave = onlyNumbers(pixKey);
  const txid = '***';

  // Merchant Account Info (ID 26)
  const gui = tlv('00', 'BR.GOV.BCB.PIX');
  const key = tlv('01', chave);
  const merchantAccountInfo = tlv('26', gui + key);

  const payloadSemCRC =
    '000201' +
    merchantAccountInfo +
    '52040000' +
    '5303986' +
    tlv('54', formatValue(valor)) +
    '5802BR' +
    tlv('59', recebedorPix) +
    tlv('60', cidadePix) +
    tlv('62', tlv('05', txid)) +
    '6304';

  const crc = crc16(payloadSemCRC);
  return payloadSemCRC + crc;
}

// =======================
// MODAL PIX
// =======================
function abrirModal(index) {
  const p = presentes[index];
  presenteSelecionado = p;

  document.getElementById('modalTitulo').innerText = p.nome;
  document.getElementById('modalValor').innerText = formatarMoeda ? formatarMoeda(p.valor) : `R$ ${p.valor},00`;

  // Sempre inicia em PIX
  trocarMetodoPagamento("pix");

  // PIX
  const payload = gerarPixBRCode(p.valor);
  document.getElementById('pixCopia').innerText = payload;

  const canvas = document.getElementById('qrcode');
  QRCode.toCanvas(canvas, payload, { width: 220 });

  // CRÉDITO
  const btnlinkpgm = document.getElementById("btnlinkpgm");
  const btnTabCredito = document.getElementById("btnTabCredito");

  if (p.linkpgm && p.linkpgm.trim() !== "") {
    btnlinkpgm.href = p.linkpgm;
    btnTabCredito.disabled = false;
    btnTabCredito.classList.remove("opacity-40", "pointer-events-none");
  } else {
    // sem link -> desabilita
    btnlinkpgm.href = "#";
    btnTabCredito.disabled = true;
    btnTabCredito.classList.add("opacity-40", "pointer-events-none");
  }

  const modal = document.getElementById('modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function fecharModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function copiarPix() {
  navigator.clipboard.writeText(document.getElementById('pixCopia').innerText);
  alert('Pix copiado');
}

// Fecha modal ao clicar fora
function initModalClose() {
  const modal = document.getElementById('modal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target.id === 'modal') fecharModal();
  });
}
function trocarMetodoPagamento(metodo) {
  metodoPagamento = metodo;

  const areaPix = document.getElementById("areaPix");
  const areaCredito = document.getElementById("areaCredito");

  const btnPix = document.getElementById("btnTabPix");
  const btnCredito = document.getElementById("btnTabCredito");

  if (metodo === "pix") {
    areaPix.classList.remove("hidden");
    areaCredito.classList.add("hidden");

    btnPix.classList.add("bg-white", "shadow");
    btnPix.classList.remove("text-neutral-600");

    btnCredito.classList.remove("bg-white", "shadow");
    btnCredito.classList.add("text-neutral-600");
  } else {
    areaPix.classList.add("hidden");
    areaCredito.classList.remove("hidden");

    btnCredito.classList.add("bg-white", "shadow");
    btnCredito.classList.remove("text-neutral-600");

    btnPix.classList.remove("bg-white", "shadow");
    btnPix.classList.add("text-neutral-600");
  }
}

// =======================
// TOOLTIP (mobile touch)
// =======================
function toggleTooltip() {
  const tooltip = document.getElementById('tooltipPix');
  const isVisible = tooltip.classList.contains('opacity-100');

  tooltip.classList.toggle('opacity-100', !isVisible);
  tooltip.classList.toggle('pointer-events-auto', !isVisible);
  tooltip.classList.toggle('pointer-events-none', isVisible);
}

function initTooltipDesktopHover() {
  const tooltipBtn = document.querySelector('button[aria-controls="tooltipPix"]');
  if (!tooltipBtn) return;

  tooltipBtn.addEventListener('mouseenter', () => {
    if (window.innerWidth >= 768) {
      const tooltip = document.getElementById('tooltipPix');
      tooltip.classList.add('opacity-100');
      tooltip.classList.remove('pointer-events-none');
      tooltip.classList.add('pointer-events-auto');
    }
  });

  tooltipBtn.addEventListener('mouseleave', () => {
    if (window.innerWidth >= 768) {
      const tooltip = document.getElementById('tooltipPix');
      tooltip.classList.remove('opacity-100', 'pointer-events-auto');
      tooltip.classList.add('pointer-events-none');
    }
  });

  document.addEventListener('click', (e) => {
    const tooltip = document.getElementById('tooltipPix');
    const btn = e.target.closest('button[aria-controls="tooltipPix"]');

    if (!tooltip) return;
    if (btn) return;

    if (!e.target.closest('#tooltipPix')) {
      tooltip.classList.remove('opacity-100', 'pointer-events-auto');
      tooltip.classList.add('pointer-events-none');
    }
  });
}

//=======================
//RAKING
//======================
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
      <li class="text-center text-neutral-500">
        Nenhum presente recebido ainda
      </li>
    `;
    return;
  }

  lista.innerHTML = '';

  pagos.forEach((p, i) => {
    lista.innerHTML += `
      <li class="flex justify-between items-center bg-neutral-50 rounded-xl px-4 py-3">
        <span>
          ${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '🎁'}
          <strong>${p.pagoPor}</strong>
        </span>
        <span class="font-medium">${p.nome}</span>
        <span class="font-medium">${formatarMoeda(p.valor)}</span>
      </li>
    `;
  });
}


// =======================
// INIT
// =======================
document.addEventListener('DOMContentLoaded', () => {
  // FIX do botão Presentes (tinha classe bugada no HTML)
  const btns = document.querySelectorAll('nav button');
  btns.forEach(btn => {
    if (btn.textContent.trim() === 'Presentes') btn.className = 'hover:opacity-70 transition';
  });

  showTab('home');
  iniciarContagem();
  initModalClose();
  initTooltipDesktopHover();

  // ✅ filtros + render
  initFiltrosPresentes();
  renderPresentes();
});