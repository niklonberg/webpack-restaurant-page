import "../style.css";
import treehouseImg from "../images/treehouse.png";
import createHeading from "./createHeading.js";
import createReviewArticle from "./createReviewArticle.js";

function renderHome(element) {
  const heading = createHeading("Andy's Acorntastic Appetizers");
  element.appendChild(heading);

  const reviewArticle = createReviewArticle("Adam", treehouseImg);
  element.appendChild(reviewArticle);
}

export default renderHome;
