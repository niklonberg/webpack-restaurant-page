const ElementFactory = (function () {
  const createContainerEle = (type = "div", classname = "") => {
    const ele = document.createElement(type);
    if (classname) ele.classList.add(classname);
    return ele;
  };

  const createTextEle = (text, type = "p", classname = "") => {
    const ele = document.createElement(type);
    if (classname) ele.classList.add(classname);
    ele.textContent = text;
    return ele;
  };

  const createImg = (imageSource, classname = "") => {
    const img = document.createElement("img");
    img.src = imageSource;
    if (classname) img.classList.add(classname);
    return img;
  };

  const createAnchor = (type, link) => {
    const a = document.createElement("a");
    a.textContent = `${type}: ${link}`;
    type === "tel"
      ? (a.href = "tel:" + link)
      : type === "email"
      ? (a.href = "mailto:" + link)
      : null;

    return a;
  };

  return {
    createContainerEle,
    createTextEle,
    createImg,
    createAnchor,
  };
})();

export default ElementFactory;
