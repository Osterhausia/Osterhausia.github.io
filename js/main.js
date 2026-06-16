/* =========================
   OSTERHAUSIA TRADING SYSTEM
   UI INTERACTION LAYER
   ========================= */

// Scroll animation observer
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".card, .faq-item");

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      el.classList.add("fade");
    }
  });
});

// Smooth scroll (nav anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Console branding (optional)
console.log("%cOsterhausia Trading System Loaded", "color:#00d4ff;font-size:14px;");
