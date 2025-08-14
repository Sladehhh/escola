const botao = document.getElementById('modo-escuro-btn');
const imagem = botao.querySelector('img');

botao.addEventListener('click', () => {
  document.body.classList.toggle('modo-escuro');

  const modoEscuroAtivo = document.body.classList.contains('modo-escuro');

  imagem.src = modoEscuroAtivo ? 'sol.png' : 'lua.png';
  imagem.alt = modoEscuroAtivo ? 'Modo claro' : 'Modo escuro';

  localStorage.setItem('modoEscuro', modoEscuroAtivo);
});

window.addEventListener('DOMContentLoaded', () => {
  const preferencia = localStorage.getItem('modoEscuro') === 'true';
  if (preferencia) {
    document.body.classList.add('modo-escuro');
    const imagem = document.querySelector('#modo-escuro-btn img');
    imagem.src = 'sol.png';
    imagem.alt = 'Modo claro';
  }
});
