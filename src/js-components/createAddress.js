import ElementFactory from "./ElementFactory.js";

function createAddress() {
  const address = ElementFactory.createContainerEle("address");
  const p = ElementFactory.createTextEle("placeholder text", "p");

  address.appendChild(p);

  return address;
}

export default createAddress;
