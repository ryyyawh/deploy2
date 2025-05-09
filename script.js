// === SKILL SECTION ===
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

// === THEME & MUSIC ELEMENTS ===
const body = document.body;
const themeBtn = document.getElementById('themeToggle');
const particlesBtn = document.getElementById('particlesToggle');

const music1 = document.getElementById('backgroundMusic');
const music2 = document.getElementById('backgroundMusic2');
const music3 = document.getElementById('backgroundMusic3');

const musicBtn1 = document.getElementById('mussicToggle');
const musicBtn2 = document.getElementById('mussicToggle2');
const musicBtn3 = document.getElementById('mussicToggle3');

const nowPlayingCard = document.getElementById('nowPlayingCard');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const songImage = document.getElementById('songImage');

// === APPLY SAVED THEME ===
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
}

// === THEME TOGGLE ===
themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// === MUSIC CONTROLS ===
function stopAllMusic() {
    [music1, music2, music3].forEach(m => m.pause());
    musicBtn1.textContent = '▶ Play Cincin';
    musicBtn2.textContent = '▶ Play Mata Air';
    musicBtn3.textContent = '▶ Play Evaluasi';
}

function updateNowPlaying(title, artist, image) {
    songTitle.textContent = title;
    songArtist.textContent = artist;
    songImage.src = image;
    nowPlayingCard.style.display = 'flex';
}

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
    }
});

// === PARTICLES ===
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let particlesEnabled = true;
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

            if (p.x < 0 || p.x > width) p.speedX *= -1;
            if (p.y < 0 || p.y > height) p.speedY *= -1;
        });
    }
    requestAnimationFrame(animateParticles);
}
animateParticles();

particlesBtn.addEventListener('click', () => {
    particlesEnabled = !particlesEnabled;
    particlesBtn.textContent = particlesEnabled ? '✦' : '✖';
});

window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});

// === LOADING EFFECT ===
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});