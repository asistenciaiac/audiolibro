// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Evento para el botón de generación
  document.getElementById('generate-btn').addEventListener('click', () => {
    const text = document.getElementById('text-content').value;
    const voice = document.getElementById('voice-select').value;
    
    if (!text.trim()) {
      alert("¡Por favor ingresa algún texto!");
      return;
    }
    
    if (!voice) {
      alert("¡Selecciona una voz primero!");
      return;
    }
    
    startRecording(text, voice);
  });

  // Evento para subir archivo
  document.getElementById('file-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      document.getElementById('text-content').value = event.target.result;
    };
    reader.readAsText(file);
  });

  // Evento para descarga
  document.getElementById('download-btn').addEventListener('click', downloadAudio);
});
