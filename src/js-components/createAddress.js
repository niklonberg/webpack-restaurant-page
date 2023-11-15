import ElementFactory from "./ElementFactory.js";

function createAddress(addressObj) {
  const address = ElementFactory.createContainerEle("address");

  for (const key in addressObj) {
    /* repeating ourselves here */
    switch (key) {
      case "title":
        const h2 = ElementFactory.createTextEle(
          `${key}: ${addressObj[key]}`,
          "h2"
        );
        address.appendChild(h2);
        break;

      case "city":
      case "state":
      case "zip":
        const p = ElementFactory.createTextEle(
          `${key}: ${addressObj[key]}`,
          "p"
        );
        address.appendChild(p);
        break;

      case "tel":
      case "email":
        const a = ElementFactory.createAnchor(key, addressObj[key]);
        address.appendChild(a);
        break;
    }
  }

  return address;
}

export default createAddress;
