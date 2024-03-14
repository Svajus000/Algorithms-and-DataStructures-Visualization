function createPrevElement() {
  let lList = document.getElementsByClassName("lList")[0];
  console.log(lList);
  let prevElement = document.createElement("div");
  let lineVertical = document.createElement("div");
  let arrowHeadBottom = document.createElement("div");
  let p = document.createElement("p");
  p.textContent = "Prev";
  prevElement.setAttribute("id", "prev");
  lineVertical.setAttribute("class", "line-vertical");
  arrowHeadBottom.setAttribute("class", "arrowHead-bottom");
  prevElement.appendChild(p);
  prevElement.appendChild(lineVertical);
  prevElement.appendChild(arrowHeadBottom);
  lList.appendChild(prevElement);
}

export default createPrevElement;
