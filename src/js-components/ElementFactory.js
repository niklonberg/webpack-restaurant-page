const ElementFactory = (function () {
  const createTextEle = (text, type = "p", classname = "") => {
    const ele = document.createElement(type);
    if (classname) ele.classList.add(classname);
    ele.textContent = text;
    return ele;
  };

  const createContainerEle = (type = "div", classname = "") => {
    const ele = document.createElement(type);
    if (classname) ele.classList.add(classname);
    return ele;
  };

  const createImg = (imageSource, classname = "") => {
    const img = document.createElement("img");
    img.src = imageSource;
    if (classname) img.classList.add(classname);
    return img;
  };

  return {
    createTextEle,
    createContainerEle,
    createImg,
  };
})();

export default ElementFactory;
