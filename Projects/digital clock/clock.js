// clock.js
(function() {
    const hrsEl = document.querySelector(".clock .hrs");
    const minsEl = document.querySelector(".clock .mins");
    const secEl = document.querySelector(".clock .sec");
    const cycleEl = document.querySelector(".clock .cycle");
    const dayEl = document.querySelector(".clock .DateBox .day");
    const dateEl = document.querySelector(".clock .DateBox .dates");
    const tzSelect = document.getElementById("timezone");

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    function updateClock() {
        // Get selected timezone
        const tz = tzSelect.value || Intl.DateTimeFormat().resolvedOptions().timeZone;
        const now = new Date(new Date().toLocaleString("en-US", { timeZone: tz }));

        // Hours, Minutes, Seconds
        let hours = now.getHours();
        cycleEl.textContent = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        hrsEl.textContent = String(hours).padStart(2,"0");
        minsEl.textContent = String(now.getMinutes()).padStart(2,"0");
        secEl.textContent = String(now.getSeconds()).padStart(2,"0");

        // Day and Date
        dayEl.textContent = days[now.getDay()];
        dateEl.textContent = `${now.getDate()}, ${months[now.getMonth()]}`;
    }

    // Update when timezone changes
    tzSelect.addEventListener("change", updateClock);

    // Update every second
    setInterval(updateClock, 1000);

    // Initial update
    updateClock();
})();
