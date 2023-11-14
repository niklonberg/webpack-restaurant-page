import "./style.css";
import treehouseImg from "./images/treehouse.png";

function renderHome(element) {
  //each render function will use a makeHeader function
  const heading = document.createElement("h1");
  heading.textContent = `Andy's Acorngasmic Appetizers`;
  heading.classList.add("red-heading");
  //
  element.appendChild(heading);

  const reviewArticle = document.createElement("article");
  const img = document.createElement("img");
  img.src = treehouseImg;
  img.classList.add("treehouse-img");

  reviewArticle.appendChild(img);

  element.appendChild(reviewArticle);
}

export default renderHome;
