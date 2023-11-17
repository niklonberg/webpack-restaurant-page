import ElementFactory from "./ElementFactory.js";
import StringHelper from "./StringHelper.js";

function createMenu(menuObj) {
  const sections = [];
  for (const category in menuObj) {
    const section = ElementFactory.createContainerEle(
      "section",
      "menu-category"
    );
    const categoryHeader = ElementFactory.createTextEle(
      StringHelper.capitalize(category),
      "h2"
    );
    section.appendChild(categoryHeader);
    menuObj[category].forEach((item) => {
      const article = ElementFactory.createContainerEle("article");
      const itemHeading = ElementFactory.createTextEle(item.title, "h3");
      const itemDesc = ElementFactory.createTextEle(item.desc);
      const itemPrice = ElementFactory.createTextEle(item.price, "p", "price");
      article.append(itemHeading, itemDesc, itemPrice);
      section.appendChild(article);
    });
    sections.push(section);
  }
  return sections;
}

export default createMenu;
