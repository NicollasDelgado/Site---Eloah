document.getElementById('minigame').innerHTML = `
  <div class="game">
    <p>Você me ama?</p>
    <button id="simBtn">Sim</button>
    <button id="noBtn">Não</button>
  </div>
`;

window.moverBotao = function() {
  const btn = document.getElementById('noBtn');
  btn.style.top = Math.random() * 60 + '%';
  btn.style.left = Math.random() * 60 + '%';
};

document.getElementById('noBtn').onmouseover = window.moverBotao;

document.getElementById('simBtn').onclick = function() {
  document.getElementById('minigame').innerHTML = `
    <div class="game" style="background:transparent;box-shadow:none;">
      <p style="color:#e91e63;font-size:1.3rem;">Eu te amo muito, Eloah! Você é meu presente de Deus. 💖</p>
    </div>
  `;
  document.getElementById('conteudo-revelado').style.display = 'block';
  document.getElementById('audio-player').style.display = 'flex'; // Mostra o player fixo
  setTimeout(window.setMusicVolume, 200);
  const audio = document.getElementById('bg-music');
  if (audio) audio.play();
};