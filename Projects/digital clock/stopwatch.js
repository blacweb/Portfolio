document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".stopwatch-display");
  const startBtn = document.getElementById("start-stopwatch");
  const pauseBtn = document.getElementById("pause-stopwatch");
  const resetBtn = document.getElementById("reset-stopwatch");

  let stopwatch = null;
  let totalSeconds = 0;

  const updateDisplay = () => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    display.textContent = `${hrs}:${mins}:${secs}`;
  };

  startBtn.addEventListener("click", () => {
    if (!stopwatch) {
      stopwatch = setInterval(() => {
        totalSeconds++;
        updateDisplay();
      }, 1000);
    }
  });

  pauseBtn.addEventListener("click", () => {
    clearInterval(stopwatch);
    stopwatch = null;
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(stopwatch);
    stopwatch = null;
    totalSeconds = 0;
    updateDisplay();
  });

  updateDisplay();
});
