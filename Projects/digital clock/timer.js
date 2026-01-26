document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".timer-display");
  const startBtn = document.getElementById("start-timer");
  const pauseBtn = document.getElementById("pause-timer");
  const resetBtn = document.getElementById("reset-timer");

  let timer = null;
  let totalSeconds = 0;

  const updateDisplay = () => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    display.textContent = `${hrs}:${mins}:${secs}`;
  };

  startBtn.addEventListener("click", () => {
    if (!timer) {
      timer = setInterval(() => {
        totalSeconds++;
        updateDisplay();
      }, 1000);
    }
  });

  pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    totalSeconds = 0;
    updateDisplay();
  });

  updateDisplay();
});
