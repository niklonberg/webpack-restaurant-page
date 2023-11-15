import "../style.css";
import treehouseImg from "../images/treehouse.png";
import createHeading from "./createHeading.js";

function renderHome(element) {
  const heading = createHeading("Andy's Acorntastic Appetizers");
  element.appendChild(heading);

  const reviewArticle = document.createElement("article");
  const img = document.createElement("img");
  img.src = treehouseImg;
  img.classList.add("treehouse-img");

  reviewArticle.appendChild(img);

  element.appendChild(reviewArticle);
}

export default renderHome;
