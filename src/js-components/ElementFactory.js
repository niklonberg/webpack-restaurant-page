const ElementFactory = (function () {
  const createHeading = (title, type, classname) => {
    const heading = document.createElement(type);
    heading.classList.add(classname);
    heading.textContent = title;

    return heading;
  };

  return {
    createHeading,
  };
})();

export default ElementFactory;
