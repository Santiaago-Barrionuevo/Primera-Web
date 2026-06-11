document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    // espacio para lógica mobile futura
  });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('button');
  btn.textContent = 'Enviado ✓';
  btn.disabled = true;
});