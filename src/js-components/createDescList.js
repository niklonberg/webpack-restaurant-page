import ElementFactory from "./ElementFactory.js";

function createDescList(descObj) {
  const dl = ElementFactory.createContainerEle("dl");

  for (const key in descObj) {
  }

  /* <dl>
  <dt>Sunday</dt>
  <dd>8am - 8pm</dd>

  <dt>Monday</dt>
  <dd>6am - 6pm</dd>

  <dt>Tuesday</dt>
  <dd>6am - 6pm</dd>

  <dt>Wednesday</dt>
  <dd>6am - 6pm</dd>

  <dt>Thursday</dt>
  <dd>6am - 10pm</dd>

  <dt>Friday</dt>
  <dd>6am - 10pm</dd>

  <dt>Saturday</dt>
  <dd>8am - 10pm</dd>
</dl> */
}

export default createDescList;
