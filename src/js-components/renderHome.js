import "../style.css";
import treehouseImg from "../images/treehouse.png";
import ElementFactory from "./ElementFactory.js";
import createReviewArticle from "./createReviewArticle.js";
import createDescList from "./createDescList.js";
import createAddress from "./createAddress.js";

function renderHome(element) {
  const heading = ElementFactory.createTextEle(
    "Andy's Acorntastic Appetizers",
    "h1",
    "primary-heading"
  );
  element.appendChild(heading);

  const reviewArticle = createReviewArticle(
    "Adam",
    `Andy's with their own homebrewed syrup has the best pancakes around! 
  The atmosphere and customer service make you feel like you are sitting
  in the middle of the woods, gorging on nuts like a squirrel! 
  This is exactly the kind of place that I like to return to again and again.`,
    treehouseImg
  );
  element.appendChild(reviewArticle);

  const openingHours = {
    monday: "8am - 8pm",
    tuesday: "6am - 6pm",
    wednesday: "6am - 6pm",
    thursday: "6am - 10pm",
    friday: "9am - 11pm",
    saturday: "10am - 11pm",
    sunday: "10am - 11pm",
  };
  const descList = createDescList("Opening Hours", openingHours);
  element.appendChild(descList);

  const addressObj = {
    title: "Location",
    city: "Anytown",
    state: "Toronto",
    zip: 12345,
    tel: 98765432,
    email: "john.doe@example.com",
  };
  const address = createAddress(addressObj);
  element.appendChild(address);
}

export default renderHome;
