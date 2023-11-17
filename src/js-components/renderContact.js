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
    },
    {
      title: "Baby Squirrel",
      role: "Waiter",
      tel: 4444444444,
      email: "maybeRealEmail@notFake.com",
    },
    {
      title: "Distant Cousin Squirrel",
      role: "Washer",
      tel: 4444444443,
      email: "maybeNotRealEmail@notFake.com",
    },
  ];
  employees.forEach((employee) => {
    const address = createAddress(employee, "contact");
    element.appendChild(address);
  });
}

export default renderContact;
