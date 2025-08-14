// Carga las voces disponibles
function loadVoices() {
  const voices = window.speechSynthesis.getVoices();
  const voiceSelect = document.getElementById('voice-select');
  
  // Filtra voces en español
  const spanishVoices = voices.filter(voice => voice.lang.includes('es'));
  
  spanishVoices.forEach(voice => {
    const option = document.createElement('option');
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

// Espera a que las voces estén cargadas
window.speechSynthesis.onvoiceschanged = loadVoices;
