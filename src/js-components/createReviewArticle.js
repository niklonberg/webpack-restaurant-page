import ElementFactory from "./ElementFactory.js";

function createReviewArticle(reviewer, text, image = null) {
  const reviewArticle = ElementFactory.createContainerEle("article", "review");

  if (image !== null) {
    const img = ElementFactory.createImg(image, "treehouse-img");
    reviewArticle.appendChild(img);
  }

  const p = ElementFactory.createTextEle(text);
  reviewArticle.appendChild(p);

  const footer = ElementFactory.createContainerEle("footer");
  const cite = ElementFactory.createTextEle(reviewer, "cite");
  footer.appendChild(cite);
  reviewArticle.appendChild(footer);

  return reviewArticle;
}

export default createReviewArticle;
