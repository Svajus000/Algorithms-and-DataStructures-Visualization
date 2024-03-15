import { binaryTree } from "../../../Playground/Tree/Tree";
import createTargetNode from "./components/createTargetNode";
import createWarning from "../../Warning/warning";

function insert(algorithmParameters) {
  const binaryTreeValue = [25, 12, 50, 7, 20, 38, 75];
  let targetValue = Number(document.getElementById("target-tree").value);

  if (
    targetValue > 0 &&
    targetValue < 100 &&
    !binaryTreeValue.includes(targetValue) &&
    !isNaN(targetValue)
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
        parentElementBoundaries.x - targetElementBoundaries.x + 55
      }px, ${parentElementBoundaries.y - targetElementBoundaries.y + 129}px)`;
    } else if (targetValue < parentNodeValue) {
      target.style.transform = `translate(${
        parentElementBoundaries.x - targetElementBoundaries.x - 25
      }px, ${parentElementBoundaries.y - targetElementBoundaries.y + 129}px)`;
    }
    setTimeout(() => {
      algorithmParameters.isRunning = false;
    }, 1000);
  } else if (targetValue < 0) {
    createWarning("Target must be greater than 0");
  } else if (targetValue >= 100) {
    createWarning("Target must be smaller than 100");
  } else if (binaryTreeValue.includes(targetValue)) {
    createWarning("Target must be unique");
  } else if (isNaN(targetValue)) {
    createWarning("Target must be a number");
  } else if (targetValue === 0) {
    createWarning("Target must be greater than 0");
  }
}

export default insert;
