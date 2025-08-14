document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Carga el modo oscuro guardado
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}
