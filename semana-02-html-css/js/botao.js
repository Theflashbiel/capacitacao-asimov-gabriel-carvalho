const botao = document.getElementById('botao-tema');
const raiz = document.documentElement;

function aplicarTema(tema) {
    raiz.setAttribute('data-tema', tema);
    botao.textContent = tema === 'escuro' ? '☀️' : '🌙';
}

let salvo = null;
try { salvo = localStorage.getItem('tema'); } catch (e) {}

const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
aplicarTema(salvo || (prefereEscuro ? 'escuro' : 'claro'));

botao.addEventListener('click', () => {
    const novo = raiz.getAttribute('data-tema') === 'escuro' ? 'claro' : 'escuro';
    aplicarTema(novo);
    try { localStorage.setItem('tema', novo); } catch (e) {}
});