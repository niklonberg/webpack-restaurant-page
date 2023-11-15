function createReviewArticle(reviewer, image = null) {
  const reviewArticle = document.createElement("article");

  if (image !== null) {
    const img = document.createElement("img");
    img.src = image;
    img.classList.add("treehouse-img");
    reviewArticle.appendChild(img);
  }

  const p = document.createElement("p");
  p.textContent = `Andy's with their own homebrewed syrup has the best pancakes around! 
    The atmosphere and customer service make you feel like you are sitting
    in the middle of the woods, gorging on nuts like a squirrel! 
    This is exactly the kind of place that I like to return to again and again.`;
  reviewArticle.appendChild(p);

  const footer = document.createElement("footer");
  const cite = document.createElement("cite");
  cite.textContent = reviewer;
  footer.appendChild(cite);
  reviewArticle.appendChild(footer);

  return reviewArticle;
}

export default createReviewArticle;
