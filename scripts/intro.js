document.addEventListener("DOMContentLoaded", function() {
  const intro = document.getElementById("intro");
  const minigame = document.getElementById("minigame");
  const btnEntrar = document.getElementById("btn-entrar");
  if (intro && btnEntrar) {
    btnEntrar.onclick = function() {
      intro.style.transition = "opacity 0.8s";
      intro.style.opacity = 0;
      setTimeout(() => {
        intro.style.display = "none";
        minigame.style.display = "block";
        // Toca o áudio apenas ao clicar no botão
        const audio = document.getElementById('bg-music');
        if (audio) audio.play();
      }, 800);
    };
  }
});