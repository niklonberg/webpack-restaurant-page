import "./style.css";
import heroImg from "./images/treehouse.png";

function renderHome(element) {
  const heading = document.createElement("h1");
  heading.textContent = `Andy's Acorngasmic Appetizers`;
  heading.classList.add("red-heading");

  element.appendChild(heading);

  const img = document.createElement("img");
  img.src = heroImg;

  element.appendChild(img);
}

export default renderHome;
