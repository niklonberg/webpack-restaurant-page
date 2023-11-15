import "../style.css";
import treehouseImg from "../images/treehouse.png";
import ElementFactory from "./ElementFactory.js";
import createReviewArticle from "./createReviewArticle.js";

function renderHome(element) {
  const heading = ElementFactory.createHeading("Andy's Acorntastic Appetizers");
  element.appendChild(heading);

  const reviewArticle = createReviewArticle(
    "Adam",
    `Andy's with their own homebrewed syrup has the best pancakes around! 
  The atmosphere and customer service make you feel like you are sitting
  in the middle of the woods, gorging on nuts like a squirrel! 
  This is exactly the kind of place that I like to return to again and again.`,
    treehouseImg
  );
  element.appendChild(reviewArticle);
}

export default renderHome;
