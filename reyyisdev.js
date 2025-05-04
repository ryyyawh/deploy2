function loadHome() {
  document.getElementById('main-content').innerHTML = `
    <h2>Hi, I am Ryyalpha</h2>
    <p>Skills:<br>
    HTML, CSS, C, C++, Java, JavaScript, Python, PHP, Golang (Go), etc.<br>
    Click below for more information about me.</p>
    <div>
      <a href="#" class="btn" onclick="loadAbout()">About Me</a>
      <a href="#" class="btn" onclick="loadProjects()">My Projects</a>
    </div>
  `;
}

function loadAbout() {
  document.getElementById('main-content').innerHTML = `
    <h2>About Me</h2>
    <p>I am ready to help you in any coding services professionally and worth it. Wanna know my full story? Click below!</p>
    <div>
      <a href="#" class="btn" onclick="loadContact()">Contact Me</a>
      <a href="#" class="btn" onclick="loadHome()">Back</a>
    </div>
  `;
}

function loadProjects() {
  document.getElementById('main-content').innerHTML = `
    <h2>Our Projects</h2>
    <p>Building Cyber Security Tools, Baileys Bot Scripts, DDoS AI Platforms, OS Systems (Multiverse OS), and many more tech innovations!</p>
    <div>
      <a href="#" class="btn" onclick="loadHome()">Back Home</a>
    </div>
  `;
}

function loadContact() {
  document.getElementById('main-content').innerHTML = `
    <h2>Contact</h2>
    <p>For business inquiries or consultations, contact me via Telegram: @conquerryy<br>or see my Github!</p>
    <div>
      <a href="https://t.me/conquerryy" target="_blank" class="btn">Telegram</a>
      <a href="https://github.com/ryyyawh" target="_blank" class="btn">Github</a>
    </div>
  `;
}

function goTelegram() {
  window.open('https://t.me/conquerryy', '_blank');
}

// Default load
loadHome();

// Generate Partikel Emas
const particlesContainer = document.querySelector('.particles');

for (let i = 0; i < 300; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${5 + Math.random() * 5}s`;
  particlesContainer.appendChild(particle);
}