import { binaryTree } from "../../../Playground/Tree/Tree";

function insert(algorithmParameters) {
  const binaryTreeValue = [25, 12, 50, 7, 20, 38, 75];
  let targetValue = Number(document.getElementById("target--tree").value);

  if (
    targetValue > 0 &&
    targetValue < 100 &&
    !binaryTreeValue.includes(targetValue)
  ) {
    algorithmParameters.isRunning = true;
    let target = createTargetNode(targetValue);
    binaryTree.insert(targetValue);

    let parentNodeValue = binaryTree.find(targetValue).parent.value;
    console.log(parentNodeValue);
    let parentElement =
      document.getElementById(parentNodeValue).parentNode.parentNode;
    let parentElementBoundaries = parentElement.getBoundingClientRect();
    let targetElementBoundaries = target.getBoundingClientRect();
    if (targetValue > parentNodeValue) {
      target.style.transform = `translate(${
        parentElementBoundaries.x - targetElementBoundaries.x + 35
      }px, ${parentElementBoundaries.y - targetElementBoundaries.y + 130}px)`;
    } else if (targetValue < parentNodeValue) {
      target.style.transform = `translate(${
        parentElementBoundaries.x - targetElementBoundaries.x - 50
      }px, ${parentElementBoundaries.y - targetElementBoundaries.y + 130}px)`;
    }
    setTimeout(() => {
      algorithmParameters.isRunning = false;
    }, 1000);
  }
}

function deleteNode(algorithmParameters) {
  let targetValue = Number(document.getElementById("target--tree").value);
  let targetElement = document.getElementById(targetValue);
  let targetNode = binaryTree.find(targetValue);
  if (targetNode.left === null && targetNode.right === null) {
    console.log("last");
    let targetsParentElement = targetElement.parentNode.parentNode;
    let lineLeft = targetsParentElement.childNodes[1];
    let lineRight = targetsParentElement.childNodes[2];
    lineLeft.style.transitionDuration = "0s";
    lineRight.style.transitionDuration = "0s";
    targetsParentElement.style.transitionDuration = "0s";
    lineLeft.classList.add("hide");
    lineRight.classList.add("hide");
    targetsParentElement.classList.add("hide");
  } else {
    let minValue = binaryTree._minValue(targetNode.right);
    let minValueElement =
      document.getElementById(minValue).parentNode.parentNode;
    let lineLeft = minValueElement.childNodes[1];
    let lineRight = minValueElement.childNodes[2];
    lineLeft.classList.add("hide");
    lineRight.classList.add("hide");
    minValueElement.classList.add("hide");
    targetElement.innerText = minValue;
  }
  binaryTree.deleteNode(targetValue);
}

function createTargetNode(targetValue) {
  let target = document.getElementsByClassName("target--tree")[0];
  let nodeContainer = document.createElement("div");
  let nodeElement = document.createElement("div");
  let valueElement = document.createElement("div");

  nodeContainer.setAttribute(
    "class",
    "nodeContainer--layer1 target--tree--node"
  );
  nodeElement.setAttribute("class", "node--tree ");
  valueElement.setAttribute("class", "value");
  valueElement.setAttribute("id", `${targetValue}`);

  valueElement.innerHTML = targetValue;

  target.appendChild(nodeContainer);
  nodeContainer.appendChild(nodeElement);
  nodeElement.appendChild(valueElement);

  return nodeContainer;
}

export { insert, deleteNode };
