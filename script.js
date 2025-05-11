function showSkill(skillId) {
  const allDescriptions = document.querySelectorAll('.skill-description');
  allDescriptions.forEach(desc => desc.classList.remove('active'));

  const target = document.getElementById(`${skillId}-skill`);
  if (target) {
    target.classList.add('active');
  } else {
    document.getElementById('default-skill').classList.add('active');
  }
}

function openModal(imageSrc, captionText) {
  let modal = document.getElementById("myModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "myModal";
    modal.className = "modal";
    modal.innerHTML = `
      <div class="friend-card">
      <span class="close" onclick="closeModal()">&times;</span>
      <img class="modal-content" id="modalImage">
      <div id="modalCaption"></div>
    `;
    document.body.appendChild(modal);

    // CSS modal langsung ditambahin dari JS biar ga ribet
    const style = document.createElement("style");
    style.innerHTML = `
      .modal {
        display: none;
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.9);
      }
      .modal-content {
        display: block;
        margin: 60px auto;
        max-width: 80%;
        border-radius: 10px;
      }
      #modalCaption {
        color: white;
        text-align: center;
        margin-top: 10px;
        font-size: 18px;
      }
      .close {
        position: absolute;
        top: 20px;
        right: 30px;
        color: white;
        font-size: 30px;
        cursor: pointer;
      }
      .close:hover {
        color: #ccc;
      }
    `;
    document.head.appendChild(style);
  }

  modal.style.display = "block";
  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("modalCaption").textContent = captionText;
}

function closeModal() {
  const modal = document.getElementById("myModal");
  if (modal) modal.style.display = "none";
}

const themeBtn = document.getElementById('themeToggle');
const particlesBtn = document.getElementById('particlesToggle');
const musicBtn1 = document.getElementById('mussicToggle');
const musicBtn2 = document.getElementById('mussicToggle2');
const musicBtn3 = document.getElementById('mussicToggle3');
const body = document.body;

const music1 = document.getElementById('backgroundMusic');
const music2 = document.getElementById('backgroundMusic2');
const music3 = document.getElementById('backgroundMusic3');

const nowPlayingCard = document.getElementById('nowPlayingCard');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const songImage = document.getElementById('songImage');

let particlesEnabled = true;

// Apply saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
}

// Theme toggle
themeBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Update now playing + apply rotating animation
function updateNowPlaying(title, artist, image) {
  songTitle.textContent = title;
  songArtist.textContent = artist;
  songImage.src = image;
  nowPlayingCard.style.display = 'flex';

  // Restart rotate animation
  songImage.classList.remove('rotating');
  void songImage.offsetWidth;  // trigger reflow
  songImage.classList.add('rotating');
}

// Stop all music and stop image rotation
function stopAllMusic() {
  music1.pause();
  music2.pause();
  music3.pause();
  musicBtn1.textContent = '▶ Play Cincin';
  musicBtn2.textContent = '▶ Play Mata Air';
  musicBtn3.textContent = '▶ Play Evaluasi';

  // Stop rotating image
  songImage.classList.remove('rotating');
}

// Music control
musicBtn1.addEventListener('click', () => {
  if (music1.paused) {
    stopAllMusic();
    music1.play();
    musicBtn1.textContent = '⏸';
    updateNowPlaying('Cincin', 'Hindia', 'https://ar-hosting.pages.dev/1746706133549.jpg');
  } else {
    music1.pause();
    musicBtn1.textContent = '▶ Play Cincin';
    nowPlayingCard.style.display = 'none';
    songImage.classList.remove('rotating');
  }
});

musicBtn2.addEventListener('click', () => {
  if (music2.paused) {
    stopAllMusic();
    music2.play();
    musicBtn2.textContent = '⏸';
    updateNowPlaying('Mata Air', 'Hindia', 'https://ar-hosting.pages.dev/1746706133549.jpg');
  } else {
    music2.pause();
    musicBtn2.textContent = '▶ Play Mata Air';
    nowPlayingCard.style.display = 'none';
    songImage.classList.remove('rotating');
  }
});

musicBtn3.addEventListener('click', () => {
  if (music3.paused) {
    stopAllMusic();
    music3.play();
    musicBtn3.textContent = '⏸';
    updateNowPlaying('Evaluasi', 'Hindia', 'https://ar-hosting.pages.dev/1746706133549.jpg');
  } else {
    music3.pause();
    musicBtn3.textContent = '▶ Play Evaluasi';
    nowPlayingCard.style.display = 'none';
    songImage.classList.remove('rotating');
  }
});

// Particles canvas
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

const particlesArray = Array.from({ length: 100 }, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  size: Math.random() * 3 + 1,
  speedX: (Math.random() - 0.5) * 1.5,
  speedY: (Math.random() - 0.5) * 1.5
}));

function animateParticles() {
  ctx.clearRect(0, 0, width, height);
  if (particlesEnabled) {
    ctx.fillStyle = 'rgba(0, 173, 181, 0.7)';
    particlesArray.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > width) p.speedX = -p.speedX;
      if (p.y < 0 || p.y > height) p.speedY = -p.speedY;
    });
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

particlesBtn.addEventListener('click', () => {
  particlesEnabled = !particlesEnabled;
  particlesBtn.textContent = particlesEnabled ? '✦' : '✖';
});