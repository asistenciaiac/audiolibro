function startRecording(text, voiceName) {
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  utterance.voice = voices.find(voice => voice.name === voiceName);
  
  // Configuración de audio
  utterance.rate = 1;
  utterance.pitch = 1;
  
  // Inicia la síntesis de voz
  window.speechSynthesis.speak(utterance);
  
  // Muestra el reproductor
  document.querySelector('.player').classList.remove('hidden');
}
