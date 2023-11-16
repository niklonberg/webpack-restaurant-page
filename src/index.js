import renderHome from "./js-components/renderHome.js";
import renderMenu from "./js-components/renderMenu.js";
import renderContact from "./js-components/renderContact.js";

const main = document.querySelector("#content");
const nav = document.querySelector("#nav");
const navButtons = document.querySelectorAll("#nav button");

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const clickedBtn = event.target;
    const buttonId = clickedBtn.id;
    navButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    clickedBtn.classList.add("active");
    main.innerHTML = "";
    if (buttonId === "home") renderHome(main);
    if (buttonId === "menu") renderMenu(main);
    if (buttonId === "contact") renderContact(main);
  }
});

renderContact(main);
