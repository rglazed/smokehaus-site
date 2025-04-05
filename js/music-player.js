function playTrack(trackName) {
  const player = document.getElementById('audio-player');
  const source = document.getElementById('audio-source');
  source.src = `audio/${trackName}.mp3`;
  player.load();
  player.play();
}
