// ==========================================
// DADOS DE EXEMPLO (depois serão os JSON)
// ==========================================
const dados = {
  liga: {
    clubes: [
      "Botajogo","BR Bragastino","Brasília FC","Ceuerá","Cortinhas",
      "Deportivo Maineiro","Deyyóta","Diabos","Flamenco","Flominense",
      "Grambue","Masmorra FC","Nacional do Poto Alegre","NãoMirassol","Oceano",
      "Palmerais","Recobe Sports","Reboque","Sêu Peule","Vasco Não da Gama"
    ]
  },
  noticias: {
    principal: {
      imagem: "assets/images/noticias/principal.jpg",
      titulo: "Flamenco vence clássico e assume a liderança",
      descricao: "Em partida equilibrada, o rubro-negro garantiu os três pontos na rodada.",
      publicado: "2026-10-21T14:30:00",
      link: "#"
    },
    extras: [
      { imagem: "assets/images/noticias/extra1.jpg", titulo: "Palmerais anuncia reforço", descricao: "O clube confirmou a chegada de um novo jogador.", publicado: "2026-10-21T10:15:00", link: "#" },
      { imagem: "assets/images/noticias/extra2.jpg", titulo: "Cortinhas sofre derrota em casa", descricao: "O time não conseguiu segurar o resultado.", publicado: "2026-10-20T22:00:00", link: "#" },
      { imagem: "assets/images/noticias/extra3.jpg", titulo: "Vasco Não da Gama surpreende", descricao: "Com gol no fim, garantiu um empate importante.", publicado: "2026-10-20T18:40:00", link: "#" },
      { imagem: "assets/images/noticias/extra4.jpg", titulo: "Diabos lidera a artilharia", descricao: "O atacante soma 12 gols em 10 partidas.", publicado: "2026-10-20T09:00:00", link: "#" }
    ]
  },
  competicoes: [
    { nome: "Libertadrogues", logo: "assets/images/competicoes/libertadrogues.png", link: "#" },
    { nome: "Surdamericana", logo: "assets/images/competicoes/surdamericana.png", link: "#" },
    { nome: "Copa Brasil", logo: "assets/images/competicoes/copa-brasil.png", link: "#" },
    { nome: "Supercopa", logo: "assets/images/competicoes/supercopa.png", link: "#" }
  ],
  resumos: [
    { miniatura: "assets/images/resumos/resumo1.jpg", duracao: "8:42", titulo: "Flamenco 2 x 1 Palmerais — Melhores momentos", publicado: "2026-10-21T15:00:00", link: "#" },
    { miniatura: "assets/images/resumos/resumo2.jpg", duracao: "6:15", titulo: "Cortinhas 1 x 2 Diabos — Gols da partida", publicado: "2026-10-20T23:10:00", link: "#" },
    { miniatura: "assets/images/resumos/resumo3.jpg", duracao: "10:03", titulo: "Vasco 1 x 1 Oceano — Resumo completo", publicado: "2026-10-20T19:00:00", link: "#" },
    { miniatura: "assets/images/resumos/resumo4.jpg", duracao: "7:28", titulo: "Masmorra FC 3 x 0 Reboque — Melhores momentos", publicado: "2026-10-19T21:30:00", link: "#" }
  ],
  tabela: [
    { posicao: 1, clube: "Flamenco", pontos: 25, jogos: 10, vitorias: 8, empates: 1, derrotas: 1, golsPro: 22, golsContra: 8 },
    { posicao: 2, clube: "Palmerais", pontos: 23, jogos: 10, vitorias: 7, empates: 2, derrotas: 1, golsPro: 19, golsContra: 7 },
    { posicao: 3, clube: "Diabos", pontos: 21, jogos: 10, vitorias: 6, empates: 3, derrotas: 1, golsPro: 18, golsContra: 9 },
    { posicao: 4, clube: "Cortinhas", pontos: 19, jogos: 10, vitorias: 6, empates: 1, derrotas: 3, golsPro: 15, golsContra: 11 },
    { posicao: 5, clube: "Botajogo", pontos: 17, jogos: 10, vitorias: 5, empates: 2, derrotas: 3, golsPro: 14, golsContra: 10 },
    { posicao: 6, clube: "Ceuerá", pontos: 16, jogos: 10, vitorias: 4, empates: 4, derrotas: 2, golsPro: 13, golsContra: 10 },
    { posicao: 7, clube: "BR Bragastino", pontos: 15, jogos: 10, vitorias: 4, empates: 3, derrotas: 3, golsPro: 12, golsContra: 11 },
    { posicao: 8, clube: "Brasília FC", pontos: 14, jogos: 10, vitorias: 4, empates: 2, derrotas: 4, golsPro: 11, golsContra: 12 },
    { posicao: 9, clube: "Deportivo Maineiro", pontos: 13, jogos: 10, vitorias: 3, empates: 4, derrotas: 3, golsPro: 10, golsContra: 10 },
    { posicao: 10, clube: "Deyyóta", pontos: 12, jogos: 10, vitorias: 3, empates: 3, derrotas: 4, golsPro: 9, golsContra: 11 },
    { posicao: 11, clube: "Flominense", pontos: 11, jogos: 10, vitorias: 3, empates: 2, derrotas: 5, golsPro: 8, golsContra: 13 },
    { posicao: 12, clube: "Grambue", pontos: 10, jogos: 10, vitorias: 2, empates: 4, derrotas: 4, golsPro: 7, golsContra: 12 },
    { posicao: 13, clube: "Masmorra FC", pontos: 9, jogos: 10, vitorias: 2, empates: 3, derrotas: 5, golsPro: 6, golsContra: 14 },
    { posicao: 14, clube: "Nacional do Poto Alegre", pontos: 8, jogos: 10, vitorias: 2, empates: 2, derrotas: 6, golsPro: 5, golsContra: 15 },
    { posicao: 15, clube: "NãoMirassol", pontos: 7, jogos: 10, vitorias: 1, empates: 4, derrotas: 5, golsPro: 4, golsContra: 13 },
    { posicao: 16, clube: "Oceano", pontos: 6, jogos: 10, vitorias: 1, empates: 3, derrotas: 6, golsPro: 3, golsContra: 16 },
    { posicao: 17, clube: "Recobe Sports", pontos: 5, jogos: 10, vitorias: 1, empates: 2, derrotas: 7, golsPro: 2, golsContra: 18 },
    { posicao: 18, clube: "Reboque", pontos: 4, jogos: 10, vitorias: 1, empates: 1, derrotas: 8, golsPro: 1, golsContra: 20 },
    { posicao: 19, clube: "Sêu Peule", pontos: 3, jogos: 10, vitorias: 0, empates: 3, derrotas: 7, golsPro: 0, golsContra: 21 },
    { posicao: 20, clube: "Vasco Não da Gama", pontos: 2, jogos: 10, vitorias: 0, empates: 2, derrotas: 8, golsPro: 0, golsContra: 22 }
  ]
};

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
  const diff = Math.floor((agora - data) / 1000); // segundos

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
// CARRUSEL LIGA
// ==========================================
function renderCarruselLiga() {
  const container = document.getElementById('ligaCarousel');
  container.innerHTML = dados.liga.clubes.map(nome => `
    <a href="#" class="clube-item" title="${nome}">
      <img src="${logoClube(nome)}" alt="${nome}" onerror="this.style.opacity=0.3">
    </a>
  `).join('');
}

// ==========================================
// NOTÍCIAS
// ==========================================
function renderNoticias() {
  const main = document.getElementById('newsMain');
  const principal = dados.noticias.principal;
  main.innerHTML = `
    <a href="${principal.link}">
      <img src="${principal.imagem}" alt="${principal.titulo}">
      <div class="news-body">
        <h3>${principal.titulo}</h3>
        <p>${principal.descricao}</p>
        <span class="tempo">${tempoRelativo(principal.publicado)}</span>
      </div>
    </a>
  `;

  const extras = document.getElementById('newsExtras');
  extras.innerHTML = dados.noticias.extras.map(n => `
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

// ==========================================
// COMPETIÇÕES
// ==========================================
function renderCompeticoes() {
  const container = document.getElementById('competitionsGrid');
  container.innerHTML = dados.competicoes.map(c => `
    <a href="${c.link}" class="competition-item">
      <img src="${c.logo}" alt="${c.nome}">
      <span>${c.nome}</span>
    </a>
  `).join('');
}

// ==========================================
// RESUMOS
// ==========================================
function renderResumos() {
  const container = document.getElementById('resumosCarousel');
  container.innerHTML = dados.resumos.map(r => `
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

// ==========================================
// TABELA
// ==========================================
function renderTabela() {
  const tbody = document.querySelector('#tabela tbody');
  tbody.innerHTML = dados.tabela.map(t => {
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

// ==========================================
// FOOTER CLUBES
// ==========================================
function renderFooterClubes() {
  const container = document.getElementById('footerClubes');
  container.innerHTML = dados.liga.clubes.map(nome => `
    <a href="#" title="${nome}">
      <img src="${logoClube(nome)}" alt="${nome}" onerror="this.style.opacity=0.3">
    </a>
  `).join('');
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderCarruselLiga();
  renderNoticias();
  renderCompeticoes();
  renderResumos();
  renderTabela();
  renderFooterClubes();
});
