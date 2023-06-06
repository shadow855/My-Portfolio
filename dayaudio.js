function playMusic() {
  var songs = [
    "Audio/sunday.wav", // Sunday
    "Audio/monday.wav", // Monday
    "Audio/tuesday.wav", // Tuesday
    "Audio/wednesday.wav", // Wednesday
    "Audio/thursday.wav", // Thursday
    "Audio/friday.wav", // Friday
    "Audio/sat.wav"  // Saturday
  ];

  var audio = document.getElementById("myAudio");
  var currentDate = new Date();
  var currentDay = currentDate.getDay();

  audio.src = songs[currentDay];
  audio.play();
}

window.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    playMusic();
  }, 900);
});
