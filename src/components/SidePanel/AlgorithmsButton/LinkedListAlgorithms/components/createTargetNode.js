function createTargetNode(targetValue) {
  let target = document.getElementsByClassName("target")[0];
  let flexContainer = document.createElement("div");
  let nodeElement = document.createElement("div");
  let valueElement = document.createElement("div");
  let pointerElement = document.createElement("div");
  let lineElement = document.createElement("div");
  let arrowHeadRight = document.createElement("div");

  flexContainer.setAttribute("class", "flex-container targetNode");
  nodeElement.setAttribute("class", "node-linkedList");
  valueElement.setAttribute("class", "value");
  valueElement.setAttribute("id", `${targetValue}`);
  pointerElement.setAttribute("class", "targetPointer");
  lineElement.setAttribute("class", "line-horizontal ");
  arrowHeadRight.setAttribute("class", "arrowHead-right ");

  valueElement.innerHTML = targetValue;

  target.appendChild(flexContainer);
  flexContainer.appendChild(nodeElement);
  flexContainer.appendChild(pointerElement);
  nodeElement.appendChild(valueElement);

  pointerElement.appendChild(lineElement);
  pointerElement.appendChild(arrowHeadRight);
  return flexContainer;
}

export default createTargetNode;
