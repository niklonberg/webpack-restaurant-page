import ElementFactory from "./ElementFactory.js";
import StringHelper from "./StringHelper.js";

function createAddress(addressObj) {
  const address = ElementFactory.createContainerEle("address");

  for (const key in addressObj) {
    /* repeating ourselves here */
    const capKey = StringHelper.capitalize(key);
    switch (key) {
      case "title":
        const h2 = ElementFactory.createTextEle(addressObj[key], "h2");
        address.appendChild(h2);
        break;

      case "city":
      case "state":
      case "zip":
        const p = ElementFactory.createTextEle(
          `${capKey}: ${addressObj[key]}`,
          "p"
        );
        address.appendChild(p);
        break;

      case "tel":
      case "email":
        const a = ElementFactory.createAnchor(capKey, addressObj[key]);
        address.appendChild(a);
        break;
    }
  }

  return address;
}

export default createAddress;
