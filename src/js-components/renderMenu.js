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
      {
        title: "Fresh Fruit",
        desc: "A small bowl of fresh fruit, whatever we find at the market for the day.",
        price: "$3",
      },
    ],
    main: [
      {
        title: "Acorn Squash Stuffed with Wild Rice and Nuts",
        desc: "Roasted acorn squash halves filled with a savory mixture of wild rice, chopped nuts, dried fruits, and herbs.",
        price: "$5",
      },
      {
        title: "Acorn-Crusted Chicken Tenders",
        desc: "Chicken tenders coated in a batter made from acorn flour, seasoned with herbs, and baked or fried until crispy.",
        price: "$10",
      },
      {
        title: "Hazelnut-Crusted Trout",
        desc: "Trout fillets coated in crushed hazelnuts and herbs, pan-seared to perfection, and served with an acorn-based sauce.",
        price: "$20",
      },
      {
        title: "Acorn Gnocchi with Brown Butter Sage Sauce",
        desc: "Homemade acorn flour gnocchi served in a nutty brown butter and sage sauce, sprinkled with grated Parmesan cheese.",
        price: "$15",
      },
      {
        title: "Walnut-Crusted Salmon",
        desc: "Combines the richness of salmon with the nutty crunch of walnuts and the tangy-sweet flavors of mustard and honey.",
        price: "$50",
      },
    ],
  };
  const menu = createMenu(menuObj);
  menu.forEach((item) => {
    element.appendChild(item);
  });
}

export default renderMenu;
