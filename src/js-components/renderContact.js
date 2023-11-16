import treehouseImg from "../images/treehouse.png";
import ElementFactory from "./ElementFactory.js";
import createAddress from "./createAddress";

function renderContact(element) {
  const heading = ElementFactory.createTextEle(
    "Contact",
    "h1",
    "primary-heading"
  );
  element.appendChild(heading);

  const section = ElementFactory.createContainerEle("section");
  const employees = [
    {
      title: "Mama Squirrel",
      role: "Manager",
      tel: 5555555554,
      email: "totallyRealEmail@notFake.com",
    },
    {
      title: "Papa Squirrel",
      role: "Chef",
      tel: 5555555555,
      email: "perfectlyRealEmail@notFake.com",
      /* add picture */
    },
  ];
  employees.forEach((employee) => {
    const address = createAddress(employee);
    section.appendChild(address);
  });
  element.appendChild(section);
}

export default renderContact;
