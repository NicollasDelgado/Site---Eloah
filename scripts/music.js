window.setMusicVolume = function() {
  const audio = document.getElementById('bg-music');
  if (audio) audio.volume = 0.2;
};

window.addEventListener('DOMContentLoaded', function() {
  window.setMusicVolume();
  const audio = document.getElementById('bg-music');
  const player = document.getElementById('audio-player');
  if (audio && player) {
    function updateWaves() {
      if (!audio.paused) {
        player.classList.add('playing');
      } else {
        player.classList.remove('playing');
      }
    }
    audio.addEventListener('play', updateWaves);
    audio.addEventListener('pause', updateWaves);
    audio.addEventListener('ended', updateWaves);
    updateWaves();
  }
});