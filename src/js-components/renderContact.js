import ElementFactory from "./ElementFactory.js";
import StringHelper from "./StringHelper.js";

function renderContact(element) {
  const heading = ElementFactory.createTextEle(
    "Contact",
    "h1",
    "primary-heading"
  );
  element.appendChild(heading);
}

export default renderContact;
