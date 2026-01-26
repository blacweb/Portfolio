document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".section");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active from all buttons
      tabs.forEach(t => t.classList.remove("active"));
      // Add active to clicked button
      tab.classList.add("active");

      const target = tab.dataset.tab;

      // Show only the target section
      sections.forEach(sec => {
        if (sec.id === target) {
          sec.classList.add("active");
        } else {
          sec.classList.remove("active");
        }
      });
    });
  });
});
