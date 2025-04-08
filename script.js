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

document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".video-container");
  const video = document.getElementById("profile-video");

  // Play the video when the container is hovered
  videoContainer.addEventListener("mouseenter", () => {
    video.play();
  });

  // Pause the video when the mouse leaves the container
  videoContainer.addEventListener("mouseleave", () => {
    video.pause();
  });

  // Allow mobile users to toggle play/pause on tap
  videoContainer.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const videoContainers = document.querySelectorAll(".video-container");

  videoContainers.forEach((container) => {
    const video = container.querySelector(".profile-video");
    const photo = container.querySelector(".profile-img");

    if (video) {
      video.muted = false; // Ensure the video is not muted

      // Handle video play event
      video.addEventListener("play", () => {
        container.classList.add("video-playing");
      });

      // Handle video end event
      video.addEventListener("ended", () => {
        container.classList.remove("video-playing");
        video.currentTime = 0; // Reset video to the beginning
      });

      // Play video on hover
      container.addEventListener("mouseenter", () => {
        video.play();
      });

      // Pause video on mouse leave
      container.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; // Reset video to the beginning
        container.classList.remove("video-playing");
      });

      // Toggle play/pause on click for mobile users
      container.addEventListener("click", () => {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0; // Reset video to the beginning
          container.classList.remove("video-playing");
        }
      });
    }
  });
});

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
