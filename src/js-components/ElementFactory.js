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

  const createImg = (imageSource, classname) => {
    const img = document.createElement("img");
    img.src = imageSource;
    img.classList.add(classname);
    return img;
  };

  const createFooter = () => {
    const footer = document.createElement("footer");
  };

  return {
    createHeading,
    createParagraph,
    createImg,
  };
})();

export default ElementFactory;
