function pageLoad() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = `Mom's Outback Spaghetti-o's`;

  content.appendChild(heading);
}

export default pageLoad;
