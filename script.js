// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeToggle.innerHTML = body.classList.contains("dark-mode")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

function toggleNavMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
}

// Horizontal Slider Navigation
const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");
    const slider = document.querySelector(".slider-container");

    // Remove all active classes
    navLinks.forEach((a) => a.classList.remove("active"));
    link.classList.add("active");
    console.log(`Active link: ${link.textContent}`);

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
    console.log(`Slider transform: ${slider.style.transform}`);

    // Ensure the navigation menu remains visible
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.add("active");
  });
});

// Ensure the nav menu is toggled correctly on small screens
// document.querySelector(".nav-toggle").addEventListener("click", toggleNavMenu);
