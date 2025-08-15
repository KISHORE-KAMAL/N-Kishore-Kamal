document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".custom-header__menu-icon-container");
  const crossIcon = document.querySelector(".custom-header__cross-icon-container");
  const drawer = document.querySelector(".custom-header__drawer-container");

  const toggleDrawer = (open) => {
    drawer.style.height = open ? `${drawer.scrollHeight}px` : "0";
    drawer.classList.toggle("open", open);
    menuIcon.classList.toggle("hidden", open);
    crossIcon.classList.toggle("hidden", !open);
  };

  menuIcon.addEventListener("click", () => toggleDrawer(true));
  crossIcon.addEventListener("click", () => toggleDrawer(false));
});