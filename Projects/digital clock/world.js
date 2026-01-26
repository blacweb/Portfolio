const tzSelect = document.getElementById("timezone-select");
const worldDisplay = document.getElementById("world-display");

setInterval(() => {
    const tz = tzSelect.value;
    const now = new Date().toLocaleTimeString("en-US", {
        timeZone: tz,
        hour12: false
    });

    worldDisplay.textContent = now;
}, 1000);
