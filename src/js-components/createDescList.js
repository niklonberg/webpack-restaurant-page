import ElementFactory from "./ElementFactory.js";

function createDescList(descObj) {
  const dl = ElementFactory.createContainerEle("dl");

  for (const key in descObj) {
    const dt = ElementFactory.createTextEle(key, "dt");
    const dd = ElementFactory.createTextEle(descObj[key], "dd");
    dl.append(dt, dd);
  }

  return dl;
}

export default createDescList;
