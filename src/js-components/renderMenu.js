import "../style.css";
import treehouseImg from "../images/treehouse.png";
import ElementFactory from "./ElementFactory.js";
import createMenu from "./createMenu.js";

function renderMenu(element) {
  const heading = ElementFactory.createTextEle("Menu", "h1", "primary-heading");
  element.appendChild(heading);

  const menuObj = {
    beverages: [
      {
        title: "HoneyAcorn Tea",
        desc: "A cozy and sweet tea crafted with premium syrup, honey, and a hint of lemon to kickstart your day on a delightful note!",
        price: "$1.25",
      },
      {
        title: "Berry Tea",
        desc: "A soothing tea, rich and satisfying, infused with a blend of various berry flavors. Ideal when served chilled, though a warm serving is available upon request.",
        price: "$2",
      },
    ],
    sides: [
      {
        title: "Jam & Toast",
        desc: "A slice of toast with your preferred choice of bread, accompanied by our homemade blackberry or raspberry jam.",
        price: "$1",
      },
    ],
  };
  const menu = createMenu(menuObj);
  menu.forEach((item) => {
    element.appendChild(item);
  });
}

export default renderMenu;
