const ElementFactory = (function () {
  const createTextEle = (text, type = "p", classname = "") => {
    const ele = document.createElement(type);
    if (classname) ele.classList.add(classname);
    ele.textContent = text;
    return ele;
  };

  const createImg = (imageSource, classname) => {
    const img = document.createElement("img");
    img.src = imageSource;
    img.classList.add(classname);
    return img;
  };

  const createFooter = (childEle) => {
    const footer = document.createElement("footer");
  };

  return {
    createTextEle,
    createImg,
  };
})();

export default ElementFactory;
