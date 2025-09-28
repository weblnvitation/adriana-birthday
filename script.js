// Countdown Timer Function
function updateCountdown() {
  const targetDate = new Date("October 30, 2025 16:30:00").getTime();
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft < 0) {
    // If the target date has passed
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  // Calculate time units
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update display
  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

// Initialize and update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Music Toggle

document.addEventListener("DOMContentLoaded", function () {
  const musicToggle = document.getElementById("musicToggle");
  let audio = null;
  let isPlaying = false;

  musicToggle.addEventListener("click", function () {
    if (!audio) {
      // Create audio element if it doesn't exist
      audio = new Audio("./music/birthday-song.mp3");
      audio.loop = true;
    }

    if (isPlaying) {
      // If music is playing, pause it
      audio.pause();
      musicToggle.classList.remove("playing");
      isPlaying = false;
    } else {
      // If music is not playing, start it
      audio.play().catch((e) => {
        console.error("Error playing audio:", e);
      });
      musicToggle.classList.add("playing");
      isPlaying = true;
    }
  });
});
