const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  // toggle: Menu Bars Open/Closed
  menuBars.classList.toggle("change");
  // toggle: Menu Bars Active

  if (overlay.classList.contains("overlay-slide-left")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Animate In - Nav Items
    navAnimation("out", "in");
    // nav1.classList.replace("slide-out-1", "slide-in-1");
    // nav2.classList.replace("slide-out-2", "slide-in-2");
    // nav3.classList.replace("slide-out-3", "slide-in-3");
    // nav4.classList.replace("slide-out-4", "slide-in-4");
    // nav5.classList.replace("slide-out-5", "slide-in-5");
  } else {
    // 5nimate out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // 5nimate out - Nav Items
    navAnimation("in", "out");
    // nav1.classList.replace("slide-in-1", "slide-out-1");
    // nav2.classList.replace("slide-in-2", "slide-out-2");
    // nav3.classList.replace("slide-in-3", "slide-out-3");
    // nav4.classList.replace("slide-in-4", "slide-out-4");
    // nav5.classList.replace("slide-in-5", "slide-out-5");
  }
}
// Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
// nav1.addEventListener("click", toggleNav);
// nav2.addEventListener("click", toggleNav);
// nav3.addEventListener("click", toggleNav);
// nav4.addEventListener("click", toggleNav);
// nav5.addEventListener("click", toggleNav);
