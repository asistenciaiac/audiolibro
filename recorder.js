// recorder.js
let audioChunks = [];
let mediaRecorder;
let audioBlob;

function startRecording(text, voiceName) {
  // Limpiar grabaciones anterioress
  audioChunks = [];
  
  // Usar Web Speech API
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  utterance.voice = voices.find(voice => voice.name === voiceName);
  
  // Configuración
  utterance.pitch = 1;
  utterance.rate = 0.9;
  utterance.volume = 1;
  
  // Iniciar grabación
  startAudioCapture();
  
  // Reproducir
  utterance.onend = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    document.querySelector('.player').classList.remove('hidden');
  };
  
  window.speechSynthesis.speak(utterance);
}

async function startAudioCapture() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    
    mediaRecorder.ondataavailable = event => {
      audioChunks.push(event.data);
    };
    
    mediaRecorder.onstop = () => {
      audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' });
      const audioUrl = URL.createObjectURL(audioBlob);
      
      // Configurar reproductor
      const audioPlayer = document.getElementById('audio-player');
      audioPlayer.src = audioUrl;
      
      // Guardar para descarga
      localStorage.setItem('audiobook_url', audioUrl);
    };
    
    mediaRecorder.start();
  } catch (error) {
    console.error("Error al acceder al micrófono:", error);
    alert("No se pudo acceder a los dispositivos de audio. Asegúrate de permitir el acceso.");
  }
}

function downloadAudio() {
  const audioUrl = localStorage.getItem('audiobook_url');
  if (!audioUrl) {
    alert("Primero genera un audiolibro");
    return;
  }
  
  const fileName = document.getElementById('file-name').value || 'audiolibro';
  const link = document.createElement('a');
  link.href = audioUrl;
  link.download = `${fileName}.mp3`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
