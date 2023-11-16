import renderHome from "./js-components/renderHome.js";

const main = document.querySelector("#content");
const nav = document.querySelector("#nav");

nav.addEventListener("click", (event) => {
  console.log(event);
});

renderHome(main);
