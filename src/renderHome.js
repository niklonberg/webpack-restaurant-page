import "./style.css";
import heroImg from "./images/treehouse.png";

function renderHome() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = `Andy's Acorngasmic Appetizers`;
  heading.classList.add("red-heading");

  content.appendChild(heading);

  const img = document.createElement("img");
  img.src = heroImg;

  content.appendChild(img);
}

export default renderHome;
