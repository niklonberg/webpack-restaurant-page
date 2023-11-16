import renderHome from "./js-components/renderHome.js";
import renderMenu from "./js-components/renderMenu.js";

const main = document.querySelector("#content");
const nav = document.querySelector("#nav");
const navButtons = document.querySelectorAll("#nav button");

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    /* main.innerHTML = ""; */
    const clickedBtn = event.target;
    navButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    clickedBtn.classList.add("active");
  }
});

renderMenu(main);
