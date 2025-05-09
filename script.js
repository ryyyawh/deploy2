document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const particlesToggle = document.getElementById('particlesToggle');
  const mussicToggle = document.getElementById('mussicToggle');
  const mussicToggle2 = document.getElementById('mussicToggle2');
  const mussicToggle3 = document.getElementById('mussicToggle3');

  const backgroundMusic = document.getElementById('backgroundMusic');
  const backgroundMusic2 = document.getElementById('backgroundMusic2');
  const backgroundMusic3 = document.getElementById('backgroundMusic3');

  const nowPlayingCard = document.getElementById('nowPlayingCard');
  const songTitle = document.getElementById('songTitle');
  const songArtist = document.getElementById('songArtist');
  const songImage = document.getElementById('songImage');

  let currentTheme = localStorage.getItem('theme') || 'light';
  let particlesEnabled = JSON.parse(localStorage.getItem('particlesEnabled')) || false;

  const updateTheme = () => {
    document.body.classList.toggle('dark-theme', currentTheme === 'dark');
    themeToggle.textContent = currentTheme === 'dark' ? '☾' : '☀';
  };

  const updateParticles = () => {
    const canvas = document.getElementById('particles');
    canvas.style.display = particlesEnabled ? 'block' : 'none';
    if (particlesEnabled) {
      initParticles(canvas);
    }
  };

  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    updateTheme();
  });

  particlesToggle.addEventListener('click', () => {
    particlesEnabled = !particlesEnabled;
    localStorage.setItem('particlesEnabled', JSON.stringify(particlesEnabled));
    updateParticles();
  });

  const stopAllMusic = () => {
    backgroundMusic.pause();
    backgroundMusic2.pause();
    backgroundMusic3.pause();
    backgroundMusic.currentTime = 0;
    backgroundMusic2.currentTime = 0;
    backgroundMusic3.currentTime = 0;
  };

  mussicToggle.addEventListener('click', () => {
    stopAllMusic();
    backgroundMusic.play();
    nowPlayingCard.style.display = 'block';
    songTitle.textContent = 'Cincin';
    songArtist.textContent = 'Hindia';
    songImage.src = 'https://ar-hosting.pages.dev/1746772709192.jpg';
  });

  mussicToggle2.addEventListener('click', () => {
    stopAllMusic();
    backgroundMusic2.play();
    nowPlayingCard.style.display = 'block';
    songTitle.textContent = 'Mata Air';
    songArtist.textContent = 'Hindia';
    songImage.src = 'https://ar-hosting.pages.dev/1746772709192.jpg';
  });

  mussicToggle3.addEventListener('click', () => {
    stopAllMusic();
    backgroundMusic3.play();
    nowPlayingCard.style.display = 'block';
    songTitle.textContent = 'Evaluasi';
    songArtist.textContent = 'Hindia';
    songImage.src = 'https://ar-hosting.pages.dev/1746772709192.jpg';
  });

  const initParticles = (canvas) => {
    const ctx = canvas.getContext('2d');
    const particles = [];
    const numParticles = 100;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 - 1
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      update();
    };

    const update = () => {
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x + p.radius > canvas.width || p.x - p.radius < 0) {
          p.dx *= -1;
        }
        if (p.y + p.radius > canvas.height || p.y - p.radius < 0) {
          p.dy *= -1;
        }
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    animate();
  };

  updateTheme();
  updateParticles();
});