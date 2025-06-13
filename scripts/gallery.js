// Galeria sem itens repetidos, ajuste automático, navegação circular e busca

const galleryItems = [
  { type: 'img', src: 'assets/photos/51f22c4bc1bfa6522d8fb7bf5630f6e5.jpg' },
  { type: 'img', src: 'assets/photos/20250506_100943.jpg' },
  { type: 'img', src: 'assets/photos/20250506_100951.jpg' },
  { type: 'img', src: 'assets/photos/20250506_100953.jpg' },
  { type: 'img', src: 'assets/photos/20250506_100955.jpg' },
  { type: 'img', src: 'assets/photos/20250506_100957.jpg' },
  { type: 'img', src: 'assets/photos/20250506_101000.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250506-WA0030.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250506-WA0031.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250506-WA0032.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250506-WA0033.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250506-WA0034.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250506-WA0035.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250506-WA0036.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250506-WA0037.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250506-WA0122.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250510-WA0007.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250510-WA0008.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250511-WA0058.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250514-WA0016.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250514-WA0017.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250514-WA0018.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250514-WA0019.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250514-WA0020.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250514-WA0021.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250514-WA0022.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250514-WA0023.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250517-WA0006.jpg' },
  { type: 'img', src: 'assets/photos/IMG-20250517-WA0007.jpg' },
  { type: 'img', src: 'assets/photos/Screenshot_20250506_213818_Instagram.jpg' },
  { type: 'video', src: 'assets/videos/video1.mp4' },
  { type: 'video', src: 'assets/videos/VID_20250506_144531_978.mp4' },
  { type: 'video', src: 'assets/videos/VID_20250506_144543_304.mp4' },
  { type: 'video', src: 'assets/videos/VID_20250506_145158_964.mp4' },
  { type: 'video', src: 'assets/videos/VID-20250504-WA0058.mp4' },
  { type: 'video', src: 'assets/videos/VID-20250506-WA0038.mp4' },
  { type: 'video', src: 'assets/videos/VID-20250506-WA0039.mp4' },
  { type: 'video', src: 'assets/videos/VID-20250508-WA0081.mp4' },
  { type: 'video', src: 'assets/videos/VID-20250509-WA0011.mp4' },
  { type: 'video', src: 'assets/videos/VID-20250509-WA0035.mp4' },
  { type: 'video', src: 'assets/videos/VID-20250509-WA0042.mp4' },
  { type: 'video', src: 'assets/videos/VID-20250510-WA0009.mp4' },
  { type: 'video', src: 'assets/videos/VID-20250510-WA0060.mp4' },
  { type: 'video', src: 'assets/videos/VID-20250514-WA0025.mp4' },
  { type: 'video', src: 'assets/videos/VID-20250514-WA0026.mp4' },
  { type: 'video', src: 'assets/videos/VID-20250517-WA0008.mp4' }
];

let currentIndex = 0;

function showGalleryItem(index) {
  const item = galleryItems[index];
  let html = `
    <section class="gallery" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;">
      <div style="margin-bottom:1.5rem;">
        <input id="searchInput" type="text" placeholder="Digite o número da foto/vídeo..." style="padding:0.5rem 1rem;border-radius:8px;border:1px solid #e91e63;outline:none;width:220px;max-width:90vw;">
        <button onclick="searchGalleryItem()" style="padding:0.5rem 1.2rem;border-radius:8px;border:none;background:#e91e63;color:#fff;font-weight:bold;font-size:1rem;box-shadow:0 2px 8px #e91e6340;cursor:pointer;transition:.2s;">Localizar</button>
      </div>
  `;
  if (item.type === 'img') {
    html += `<img src="${item.src}" alt="Nicollas e Eloah" style="max-width:95vw;max-height:70vh;object-fit:contain;box-shadow:0 4px 24px #0003;border-radius:18px;transition:.3s;" />`;
  } else if (item.type === 'video') {
    html += `<video controls style="max-width:95vw;max-height:70vh;object-fit:contain;box-shadow:0 4px 24px #0003;border-radius:18px;background:#000;transition:.3s;">
      <source src="${item.src}" type="video/mp4">
      Seu navegador não suporta vídeo.
    </video>`;
  }
  html += `
    <div style="margin-top:2rem;display:flex;align-items:center;gap:1.5rem;">
      <button onclick="prevGalleryItem()" style="padding:0.6rem 1.5rem;border-radius:8px;border:none;background:#e91e63;color:#fff;font-weight:bold;font-size:1rem;box-shadow:0 2px 8px #e91e6340;cursor:pointer;transition:.2s;">Anterior</button>
      <span style="font-weight:bold;font-size:1.1rem;color:#e91e63;">${index + 1} / ${galleryItems.length}</span>
      <button onclick="nextGalleryItem()" style="padding:0.6rem 1.5rem;border-radius:8px;border:none;background:#e91e63;color:#fff;font-weight:bold;font-size:1rem;box-shadow:0 2px 8px #e91e6340;cursor:pointer;transition:.2s;">Próximo</button>
    </div>
  </section>`;
  document.getElementById('gallery').innerHTML = html;
  document.getElementById('searchInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') searchGalleryItem();
  });
}

window.prevGalleryItem = function() {
  // Circular: volta ao último ao chegar no início
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = galleryItems.length - 1;
  }
  showGalleryItem(currentIndex);
};

window.nextGalleryItem = function() {
  // Circular: volta ao primeiro ao chegar no final
  if (currentIndex < galleryItems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showGalleryItem(currentIndex);
};

window.searchGalleryItem = function() {
  const value = document.getElementById('searchInput').value.trim();
  if (!value) return;
  // Busca pelo número do item (ex: 1 para o primeiro, 46 para o último)
  const num = parseInt(value, 10);
  if (!isNaN(num) && num >= 1 && num <= galleryItems.length) {
    currentIndex = num - 1;
    showGalleryItem(currentIndex);
    return;
  }
  alert('Digite um número válido entre 1 e ' + galleryItems.length + '!');
};

// Inicializa a galeria
showGalleryItem(currentIndex);