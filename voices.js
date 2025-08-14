function loadVoices() {
  const voices = window.speechSynthesis.getVoices();
  const voiceSelect = document.getElementById('voice-select');
  
  // Filtra solo voces en español
  const spanishVoices = voices.filter(v => v.lang.includes('es'));
  
  // Vacía el dropdown y agrega opciones
  voiceSelect.innerHTML = '';
  spanishVoices.forEach(voice => {
    const option = document.createElement('option');
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.gender || 'N/A'})`;
    voiceSelect.appendChild(option);
  });
}

// Chrome necesita esto para cargar voces:
window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices(); // Llama una vez al inicio por si ya están cargadas
