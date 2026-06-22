const pageStyles = `
  <style>
    * {
      box-sizing: border-box;
    }

    :root {
      --green: #39ff14;
      --acid: #b6ff4d;
      --mint: #00ffaa;
      --dark: #050706;
      --panel: rgba(7, 17, 8, 0.86);
      --text: #eaffd0;
      --muted: #d7ffbf;
      --danger: #ff6b6b;
      --warning: #ffd166;
    }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: Arial, Helvetica, sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(57, 255, 20, 0.28), transparent 32%),
        radial-gradient(circle at bottom right, rgba(0, 255, 170, 0.18), transparent 35%),
        linear-gradient(135deg, #071108, #101923 45%, #050706);
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 42px 42px;
      mask-image: linear-gradient(to bottom, black, transparent 85%);
    }

    .site-header {
      width: min(1000px, 100% - 32px);
      margin: 20px auto 0;
      padding: 16px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      border-radius: 22px;
      background: rgba(7, 17, 8, 0.78);
      border: 1px solid rgba(57, 255, 20, 0.28);
      box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(10px);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 900;
      color: var(--acid);
    }

    .logo-mark {
      display: grid;
      place-items: center;
      width: 44px;
      height: 44px;
      border-radius: 15px;
      color: var(--dark);
      background: linear-gradient(135deg, var(--acid), var(--green));
      box-shadow: 0 0 25px rgba(57, 255, 20, 0.35);
    }

    .site-nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 10px;
    }

    .site-nav a,
    .button-link {
      color: var(--dark);
      text-decoration: none;
      font-weight: 900;
      padding: 12px 16px;
      border-radius: 14px;
      background: linear-gradient(135deg, var(--acid), var(--green));
      box-shadow: 0 12px 24px rgba(57, 255, 20, 0.18);
      transition: transform 0.2s ease, filter 0.2s ease;
    }

    .site-nav a:hover,
    .button-link:hover,
    button:hover {
      transform: translateY(-2px);
      filter: brightness(1.08);
    }

    main {
      width: min(1000px, 100% - 32px);
      margin: 0 auto;
      padding: 36px 0 26px;
    }

    .card {
      position: relative;
      overflow: hidden;
      padding: 36px;
      border-radius: 30px;
      background: var(--panel);
      border: 1px solid rgba(57, 255, 20, 0.35);
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
    }

    .card::after {
      content: "";
      position: absolute;
      right: -90px;
      top: -90px;
      width: 230px;
      height: 230px;
      border-radius: 50%;
      background: rgba(57, 255, 20, 0.12);
      filter: blur(12px);
    }

    .content {
      position: relative;
      z-index: 1;
    }

    .badge {
      display: inline-block;
      margin-bottom: 14px;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(57, 255, 20, 0.12);
      border: 1px solid rgba(57, 255, 20, 0.35);
      color: #9cff57;
      font-size: 13px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    h1 {
      margin: 0 0 14px;
      color: var(--acid);
      font-size: clamp(34px, 6vw, 66px);
      line-height: 1;
      letter-spacing: -1.5px;
    }

    h2 {
      margin: 0 0 14px;
      color: var(--acid);
      font-size: 28px;
    }

    h3 {
      margin: 0 0 10px;
      color: var(--text);
      font-size: 23px;
    }

    p {
      color: var(--muted);
      font-size: 18px;
      line-height: 1.7;
    }

    .page-grid {
      display: grid;
      grid-template-columns: 140px 1fr;
      align-items: center;
      gap: 30px;
    }

    .portal {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background:
        radial-gradient(circle, #f7ff00 0 10%, #b6ff4d 20%, #39ff14 36%, #00ffaa 48%, transparent 67%);
      box-shadow:
        0 0 30px rgba(57, 255, 20, 0.95),
        0 0 80px rgba(0, 255, 170, 0.5);
      animation: portalSpin 4s linear infinite, portalPulse 2s ease-in-out infinite;
    }

    @keyframes portalSpin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    @keyframes portalPulse {
      0%, 100% {
        box-shadow:
          0 0 30px rgba(57, 255, 20, 0.8),
          0 0 80px rgba(0, 255, 170, 0.35);
      }

      50% {
        box-shadow:
          0 0 45px rgba(57, 255, 20, 1),
          0 0 110px rgba(0, 255, 170, 0.65);
      }
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 24px;
    }

    .terminal {
      margin-top: 26px;
      padding: 20px;
      border-radius: 18px;
      background: rgba(0, 0, 0, 0.55);
      border: 1px solid rgba(57, 255, 20, 0.24);
      font-family: Consolas, Monaco, monospace;
      box-shadow: inset 0 0 28px rgba(57, 255, 20, 0.08);
    }

    .terminal p {
      margin: 8px 0;
      color: #b6ff4d;
      font-size: 15px;
      line-height: 1.5;
    }

    .terminal span {
      color: var(--mint);
    }

    .tech-list,
    .status-grid,
    .result-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-top: 24px;
    }

    .tech-item,
    .status-item,
    .result-item {
      padding: 18px;
      border-radius: 18px;
      background: rgba(57, 255, 20, 0.08);
      border: 1px solid rgba(57, 255, 20, 0.22);
    }

    .tech-item strong,
    .status-item strong,
    .result-item strong {
      display: block;
      margin-bottom: 8px;
      color: var(--acid);
      font-size: 22px;
    }

    .tech-item span,
    .status-item span,
    .result-item span {
      color: var(--muted);
    }

    form {
      display: grid;
      gap: 14px;
      margin-top: 24px;
    }

    label {
      display: grid;
      gap: 8px;
      color: var(--muted);
      font-weight: 800;
    }

    input {
      width: 100%;
      padding: 14px 16px;
      border-radius: 14px;
      border: 1px solid rgba(57, 255, 20, 0.35);
      outline: none;
      background: rgba(2, 8, 4, 0.8);
      color: var(--text);
      font-size: 16px;
    }

    input:focus {
      border-color: var(--acid);
      box-shadow: 0 0 0 4px rgba(57, 255, 20, 0.16);
    }

    button {
      cursor: pointer;
      border: none;
      padding: 14px 18px;
      border-radius: 14px;
      background: linear-gradient(135deg, var(--acid), var(--green));
      color: var(--dark);
      font-weight: 900;
      font-size: 16px;
      transition: transform 0.2s ease, filter 0.2s ease;
    }

    .warning {
      margin-top: 18px;
      padding: 16px;
      border-radius: 16px;
      background: rgba(255, 209, 102, 0.1);
      border: 1px solid rgba(255, 209, 102, 0.3);
      color: #fff0bd;
    }

    .danger h1 {
      color: var(--danger);
    }

    .danger .badge {
      color: #ffb3b3;
      border-color: rgba(255, 107, 107, 0.4);
      background: rgba(255, 107, 107, 0.12);
    }

    .success h1 {
      color: var(--green);
    }

    code {
      color: var(--acid);
      background: rgba(57, 255, 20, 0.1);
      padding: 3px 6px;
      border-radius: 6px;
    }

    .site-footer {
      width: min(1000px, 100% - 32px);
      margin: 0 auto 22px;
      padding: 18px;
      text-align: center;
      color: rgba(215, 255, 191, 0.78);
      border-radius: 18px;
      background: rgba(7, 17, 8, 0.52);
      border: 1px solid rgba(57, 255, 20, 0.14);
    }

    .music-toggle {
      position: fixed;
      right: 24px;
      bottom: 24px;
      z-index: 1000;
      width: 220px;
      height: auto;
      padding: 0;
      border: none;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      transform: none;
      overflow: visible;
    }

    .music-toggle:hover {
      transform: scale(1.08) rotate(-3deg);
      filter: drop-shadow(0 0 18px rgba(57, 255, 20, 0.8));
    }

    .music-toggle img {
      width: 100%;
      height: auto;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 0 14px rgba(57, 255, 20, 0.55));
    }

    .music-toggle::after {
      content: "OFF";
      position: absolute;
      right: 4px;
      bottom: 4px;
      padding: 5px 9px;
      border-radius: 999px;
      background: #ff6b6b;
      color: #050706;
      font-size: 11px;
      font-weight: 900;
      border: 1px solid rgba(5, 7, 6, 0.8);
      box-shadow: 0 0 12px rgba(255, 107, 107, 0.55);
    }

    .music-toggle.playing {
      animation: musicPulse 1.2s ease-in-out infinite;
    }

    .music-toggle.playing::after {
      content: "ON";
      background: #39ff14;
      box-shadow: 0 0 12px rgba(57, 255, 20, 0.85);
    }

    @keyframes musicPulse {
      0%, 100% {
        filter: drop-shadow(0 0 14px rgba(57, 255, 20, 0.55));
      }

      50% {
        filter: drop-shadow(0 0 28px rgba(57, 255, 20, 1));
      }
    }

    @media (max-width: 760px) {
      .site-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .site-nav {
        justify-content: flex-start;
      }

      .page-grid {
        grid-template-columns: 1fr;
      }

      .portal {
        width: 110px;
        height: 110px;
      }

      .card {
        padding: 26px;
      }

      .music-toggle {
        right: 12px;
        bottom: 12px;
        width: 120px;
        height: auto;
      }
    }
  </style>
`;

const renderHeader = () => `
  <header class="site-header">
    <div class="logo">
      <span class="logo-mark">RM</span>
      <span>Portal HTTP Server</span>
    </div>

    <nav class="site-nav">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/status">Status</a>
    </nav>
  </header>
`;

const renderFooter = () => `
  <footer class="site-footer">
    Built with pure Node.js modules: http, url, querystring. No Express. No portal shortcuts.
  </footer>
`;

const renderMusicButton = () => `
  <audio id="portalAudio" src="/morty.mp3" loop></audio>

  <button class="music-toggle" id="musicToggle" type="button" title="Toggle portal music">
    <img src="/rick.png" alt="Rick music button">
  </button>

  <script>
    const musicButton = document.getElementById('musicToggle');
    const portalAudio = document.getElementById('portalAudio');

    musicButton.addEventListener('click', async () => {
      if (portalAudio.paused) {
        try {
          await portalAudio.play();
          musicButton.classList.add('playing');
        } catch (error) {
          console.log('Audio play was blocked by browser:', error);
        }

        return;
      }

      portalAudio.pause();
      musicButton.classList.remove('playing');
    });
  </script>
`;

const renderLayout = (title, bodyContent, extraClass = '') => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  ${pageStyles}
</head>
<body>
  ${renderHeader()}

  <main>
    <section class="card ${extraClass}">
      <div class="content">
        ${bodyContent}
      </div>
    </section>
  </main>

  ${renderFooter()}
  ${renderMusicButton()}
</body>
</html>`;
};

const renderHomePage = () => {
  return renderLayout(
    'Home',
    `
      <div class="page-grid">
        <div class="portal"></div>

        <div>
          <span class="badge">Portal Online</span>
          <h1>Home</h1>
          <p>Welcome to the Home Page. The server is alive, the portal is open, and Morty should probably stop touching the cables.</p>

          <div class="actions">
            <a class="button-link" href="/contact">Open Portal Form</a>
            <a class="button-link" href="/status">Check Server Status</a>
          </div>
        </div>
      </div>

      <div class="terminal">
        <p><span>&gt;</span> Portal server initialized</p>
        <p><span>&gt;</span> HTTP module active</p>
        <p><span>&gt;</span> Routes loaded: /, /about, /contact, /status, /submit</p>
        <p><span>&gt;</span> Security systems: body limit, validation, sanitization</p>
        <p><span>&gt;</span> Waiting for interdimensional requests...</p>
      </div>
    `
  );
};

const renderAboutPage = () => {
  return renderLayout(
    'About',
    `
      <div class="page-grid">
        <div class="portal"></div>

        <div>
          <span class="badge">About This Dimension</span>
          <h1>About</h1>
          <p>Learn more about us. This server was built with pure Node.js modules and a suspicious amount of portal energy.</p>
        </div>
      </div>

      <div class="tech-list">
        <div class="tech-item">
          <strong>Node.js</strong>
          <span>Runtime environment</span>
        </div>

        <div class="tech-item">
          <strong>http</strong>
          <span>Creates the server</span>
        </div>

        <div class="tech-item">
          <strong>url</strong>
          <span>Parses request paths</span>
        </div>

        <div class="tech-item">
          <strong>querystring</strong>
          <span>Parses form data</span>
        </div>

        <div class="tech-item">
          <strong>No Express</strong>
          <span>Manual routing only</span>
        </div>

        <div class="tech-item">
          <strong>Security</strong>
          <span>Validation and sanitizing</span>
        </div>
      </div>
    `
  );
};

const renderContactPage = () => {
  return renderLayout(
    'Contact',
    `
      <div class="page-grid">
        <div class="portal"></div>

        <div>
          <span class="badge">Interdimensional Contact Form</span>
          <h1>Contact</h1>
          <p>Get in touch. Send your name and email through the portal. Do not submit alien DNA samples. Again.</p>
        </div>
      </div>

      <form method="POST" action="/submit">
        <label>
          Name
          <input type="text" name="name" placeholder="Rick Sanchez">
        </label>

        <label>
          Email
          <input type="email" name="email" placeholder="rick@citadel.portal">
        </label>

        <button type="submit">Send Transmission</button>
      </form>

      <div class="warning">
        Portal note: both fields are required. Empty data will be rejected with 400 Bad Request.
      </div>
    `
  );
};

const renderStatusPage = (statusData) => {
  return renderLayout(
    'Server Status',
    `
      <div class="page-grid">
        <div class="portal"></div>

        <div>
          <span class="badge">Laboratory Panel</span>
          <h1>Server Status</h1>
          <p>Portal systems are online. Probably stable. No promises from this dimension.</p>
        </div>
      </div>

      <div class="status-grid">
        <div class="status-item">
          <strong>${statusData.status}</strong>
          <span>Status</span>
        </div>

        <div class="status-item">
          <strong>${statusData.port}</strong>
          <span>Port</span>
        </div>

        <div class="status-item">
          <strong>${statusData.uptime}</strong>
          <span>Uptime seconds</span>
        </div>

        <div class="status-item">
          <strong>${statusData.nodeVersion}</strong>
          <span>Node.js version</span>
        </div>

        <div class="status-item">
          <strong>${statusData.method}</strong>
          <span>Request method</span>
        </div>

        <div class="status-item">
          <strong>${statusData.route}</strong>
          <span>Current route</span>
        </div>
      </div>
    `
  );
};

const renderSubmittedPage = (name, email) => {
  return renderLayout(
    'Form Submitted',
    `
      <div class="page-grid">
        <div class="portal"></div>

        <div>
          <span class="badge">Transmission Received</span>
          <h1>Form Submitted</h1>
          <p>The portal accepted your data. Nobody panic. Unless you entered something cursed.</p>
        </div>
      </div>

      <div class="result-grid">
        <div class="result-item">
          <strong>Name</strong>
          <span>${name}</span>
        </div>

        <div class="result-item">
          <strong>Email</strong>
          <span>${email}</span>
        </div>

        <div class="result-item">
          <strong>Status</strong>
          <span>Approved</span>
        </div>
      </div>

      <div class="actions">
        <a class="button-link" href="/">Home</a>
        <a class="button-link" href="/contact">Back to Contact</a>
      </div>
    `,
    'success'
  );
};

const renderErrorPage = (title, message, details = '') => {
  return renderLayout(
    title,
    `
      <span class="badge">Server Alert</span>
      <h1>${title}</h1>
      <p>${message}</p>
      ${details ? `<p>${details}</p>` : ''}

      <div class="terminal">
        <p><span>&gt;</span> Error detected</p>
        <p><span>&gt;</span> Route check failed</p>
        <p><span>&gt;</span> Returning safe HTML response</p>
      </div>

      <div class="actions">
        <a class="button-link" href="/">Home</a>
        <a class="button-link" href="/contact">Contact</a>
        <a class="button-link" href="/status">Status</a>
      </div>
    `,
    'danger'
  );
};

module.exports = {
  renderHomePage,
  renderAboutPage,
  renderContactPage,
  renderStatusPage,
  renderSubmittedPage,
  renderErrorPage,
};