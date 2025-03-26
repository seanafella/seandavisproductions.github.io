// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeToggle.innerHTML = body.classList.contains("dark-mode")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

document.getElementById("nav-toggle").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("active");
});

// Horizontal Slider Navigation
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");
    const slider = document.querySelector(".slider-container");

    // Remove all active classes
    document
      .querySelectorAll(".nav a")
      .forEach((a) => a.classList.remove("active"));
    link.classList.add("active");

    // Apply sliding animation
    switch (target) {
      case "#home":
        slider.style.transform = "translateX(0)";
        break;
      case "#about":
        slider.style.transform = "translateX(-100vw)";
        break;
      case "#skills":
        slider.style.transform = "translateX(-200vw)";
        break;
      case "#contact":
        slider.style.transform = "translateX(-300vw)";
        break;
    }
  });
});
