const menuToggleButton = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggleButton && siteNav) {
  menuToggleButton.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}