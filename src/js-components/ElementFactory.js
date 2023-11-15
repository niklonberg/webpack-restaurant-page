const ElementFactory = (function () {
  const createHeading = (title, type = "h1", classname = "primary-heading") => {
    const heading = document.createElement(type);
    heading.classList.add(classname);
    heading.textContent = title;
    return heading;
  };

  const createParagraph = (text) => {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
  };

  return {
    createHeading,
    createParagraph,
  };
})();

export default ElementFactory;
