// ==========================================
// UTILITÁRIOS
// ==========================================
function slug(nome) {
  return nome.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function logoClube(nome) {
  return `assets/images/clubes/${slug(nome)}.png`;
}

function tempoRelativo(iso) {
  const agora = new Date();
  const data = new Date(iso);
  const diff = Math.floor((agora - data) / 1000);

  if (diff < 60) return 'agora mesmo';
  if (diff < 3600) return `há ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `há ${Math.floor(diff / 3600)} h`;
  const dias = Math.floor(diff / 86400);
  if (dias === 1) return 'há 1 dia';
  if (dias < 30) return `há ${dias} dias`;
  const meses = Math.floor(dias / 30);
  if (meses === 1) return 'há 1 mês';
  return `há ${meses} meses`;
}

function classePosicao(pos) {
  if (pos <= 4) return 'azul';
  if (pos === 5) return 'azul-claro';
  if (pos >= 6 && pos <= 11) return 'prata';
  if (pos >= 17) return 'vermelho';
  return 'neutro';
}

async function carregarJSON(caminho) {
  const res = await fetch(caminho);
  if (!res.ok) throw new Error(`Erro ao carregar ${caminho}`);
  return res.json();
}

// ==========================================
// MENU
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');

function fecharMenu() {
  sideMenu.classList.remove('open');
  menuOverlay.classList.remove('open');
}
function toggleMenu() {
  sideMenu.classList.toggle('open');
  menuOverlay.classList.toggle('open');
}
menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', fecharMenu);

// ==========================================
// RENDERIZADORES
// ==========================================
function renderCarruselLiga(clubes) {
  const container = document.getElementById('ligaCarousel');
  container.innerHTML = clubes.map(nome => `
    <a href="#" class="clube-item" title="${nome}">
      <img src="${logoClube(nome)}" alt="${nome}" onerror="this.style.opacity=0.3">
    </a>
  `).join('');
}

function renderNoticias(dados) {
  const main = document.getElementById('newsMain');
  const p = dados.principal;
  main.innerHTML = `
    <a href="${p.link}">
      <img src="${p.imagem}" alt="${p.titulo}">
      <div class="news-body">
        <h3>${p.titulo}</h3>
        <p>${p.descricao}</p>
        <span class="tempo">${tempoRelativo(p.publicado)}</span>
      </div>
    </a>
  `;

  const extras = document.getElementById('newsExtras');
  extras.innerHTML = dados.extras.map(n => `
    <a href="${n.link}" class="news-extra">
      <div class="extra-body">
        <h4>${n.titulo}</h4>
        <p>${n.descricao}</p>
        <span class="tempo">${tempoRelativo(n.publicado)}</span>
      </div>
      <img src="${n.imagem}" alt="${n.titulo}">
    </a>
  `).join('');
}

function renderCompeticoes(lista) {
  const container = document.getElementById('competitionsGrid');
  container.innerHTML = lista.map(c => `
    <a href="${c.link}" class="competition-item">
      <img src="${c.logo}" alt="${c.nome}">
      <span>${c.nome}</span>
    </a>
  `).join('');
}

function renderResumos(lista) {
  const container = document.getElementById('resumosCarousel');
  container.innerHTML = lista.map(r => `
    <a href="${r.link}" class="resumo-card">
      <div class="resumo-thumb">
        <img src="${r.miniatura}" alt="${r.titulo}">
        <span class="duracao">${r.duracao}</span>
      </div>
      <div class="resumo-body">
        <h4>${r.titulo}</h4>
        <span class="tempo">${tempoRelativo(r.publicado)}</span>
      </div>
    </a>
  `).join('');
}

function renderTabela(lista) {
  const tbody = document.querySelector('#tabela tbody');
  tbody.innerHTML = lista.map(t => {
    const saldo = t.golsPro - t.golsContra;
    const cls = classePosicao(t.posicao);
    return `
      <tr>
        <td><span class="pos ${cls}">${t.posicao}</span></td>
        <td class="clube-cell">
          <img src="${logoClube(t.clube)}" alt="${t.clube}" onerror="this.style.display='none'">
          <span>${t.clube}</span>
        </td>
        <td><strong>${t.pontos}</strong></td>
        <td>${t.jogos}</td>
        <td>${t.vitorias}</td>
        <td>${t.empates}</td>
        <td>${t.derrotas}</td>
        <td>${t.golsPro}</td>
        <td>${t.golsContra}</td>
        <td>${saldo > 0 ? '+' + saldo : saldo}</td>
      </tr>
    `;
  }).join('');
}

function renderFooterClubes(clubes) {
  const container = document.getElementById('footerClubes');
  container.innerHTML = clubes.map(nome => `
    <a href="#" title="${nome}">
      <img src="${logoClube(nome)}" alt="${nome}" onerror="this.style.opacity=0.3">
    </a>
  `).join('');
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const [liga, noticias, competicoes, resumos, tabela] = await Promise.all([
      carregarJSON('assets/data/liga.json'),
      carregarJSON('assets/data/noticias.json'),
      carregarJSON('assets/data/competicoes.json'),
      carregarJSON('assets/data/resumos.json'),
      carregarJSON('assets/data/tabela.json')
    ]);

    renderCarruselLiga(liga.clubes);
    renderNoticias(noticias);
    renderCompeticoes(competicoes);
    renderResumos(resumos);
    renderTabela(tabela);
    renderFooterClubes(liga.clubes);
  } catch (err) {
    console.error('Erro ao carregar dados:', err);
  }
});
