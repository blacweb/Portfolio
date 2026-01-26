document.addEventListener("DOMContentLoaded", () => {
  const alarmInput = document.getElementById("alarm-time");
  const setAlarmBtn = document.getElementById("set-alarm");
  const alarmStatus = document.querySelector(".alarm-status");
  let alarmTime = null;
  let alarmTimeout = null;

  // Load alarm sound
  const alarmSound = new Audio("sounds/alarm.mp3"); // place alarm.mp3 inside a folder named "sounds"

  setAlarmBtn.addEventListener("click", () => {
    if (!alarmInput.value) return;
    alarmTime = alarmInput.value;
    alarmStatus.textContent = `Alarm set for ${alarmTime}`;
    alarmStatus.style.color = "#4CAF50";
    if (alarmTimeout) clearTimeout(alarmTimeout);

    const now = new Date();
    const [hours, minutes] = alarmTime.split(":").map(Number);
    let alarmDate = new Date();
    alarmDate.setHours(hours, minutes, 0, 0);
    if (alarmDate <= now) alarmDate.setDate(alarmDate.getDate() + 1);

    const diff = alarmDate - now;

    alarmTimeout = setTimeout(() => {
      alarmSound.play().catch(err => console.log(err));
      alert("⏰ Alarm ringing!");
      alarmStatus.textContent = "No alarm set";
      alarmStatus.style.color = "#888";
    }, diff);
  });
});
