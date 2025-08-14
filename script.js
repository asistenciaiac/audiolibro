document.getElementById('generate-btn').addEventListener('click', () => {
  const text = document.getElementById('text-content').value;
  const voice = document.getElementById('voice-select').value;
  
  if (!text) {
    alert("¡Ingresa texto primero!");
    return;
  }
  
  // Llama a la función de recorder.js
  startRecording(text, voice);
});

document.getElementById('file-input').addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  
  reader.onload = (event) => {
    document.getElementById('text-content').value = event.target.result;
  };
  
  reader.readAsText(file);
});
