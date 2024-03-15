function createTargetNode(targetValue) {
  let target = document.getElementsByClassName("target-tree")[0];
  let nodeContainer = document.createElement("div");
  let nodeElement = document.createElement("div");
  let valueElement = document.createElement("div");

  nodeContainer.setAttribute("class", "nodeContainer layer1 target-tree-node");
  nodeElement.setAttribute("class", "node-tree ");
  valueElement.setAttribute("class", "value");
  valueElement.setAttribute("id", `${targetValue}`);

  valueElement.innerHTML = targetValue;

  target.appendChild(nodeContainer);
  nodeContainer.appendChild(nodeElement);
  nodeElement.appendChild(valueElement);

  return nodeContainer;
}

export default createTargetNode;
