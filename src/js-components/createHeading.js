function createHeading(title) {
  const heading = document.createElement("h1");
  heading.classList.add("primary-heading");
  heading.textContent = `${title}`;

  return heading;
}

export default createHeading;
