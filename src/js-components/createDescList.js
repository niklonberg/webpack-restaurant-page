import ElementFactory from "./ElementFactory.js";

function createDescList(title, descObj) {
  const div = ElementFactory.createContainerEle("div", "desc");
  const h2 = ElementFactory.createTextEle(title, "h2");
  const dl = ElementFactory.createContainerEle("dl");

  for (const key in descObj) {
    const dt = ElementFactory.createTextEle(key, "dt");
    const dd = ElementFactory.createTextEle(descObj[key], "dd");
    dl.append(dt, dd);
  }

  div.append(h2, dl);

  return div;
}

export default createDescList;
