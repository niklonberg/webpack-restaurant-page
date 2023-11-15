import ElementFactory from "./ElementFactory.js";

function createReviewArticle(reviewer, text, image = null) {
  const reviewArticle = document.createElement("article");

  if (image !== null) {
    const img = ElementFactory.createImg(image, "treehouse-img");
    reviewArticle.appendChild(img);
  }

  const p = ElementFactory.createTextEle(text);
  reviewArticle.appendChild(p);

  const footer = document.createElement("footer");
  const cite = document.createElement("cite");
  cite.textContent = reviewer;
  footer.appendChild(cite);
  reviewArticle.appendChild(footer);

  return reviewArticle;
}

export default createReviewArticle;
