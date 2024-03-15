import { binaryTree } from "../../../Playground/Tree/Tree";
import createWarning from "../../Warning/warning";

function deleteNode(algorithmParameters) {
  let targetValue = Number(document.getElementById("target-tree").value);
  let targetElement = document.getElementById(targetValue);
  const binaryTreeValue = [25, 12, 50, 7, 20, 38, 75];
  if (
    targetValue > 0 &&
    targetValue < 100 &&
    binaryTreeValue.includes(targetValue)
  ) {
    let targetNode = binaryTree.find(targetValue);
    if (targetNode.left === null && targetNode.right === null) {
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
  } else if (targetValue < 0) {
    createWarning("Target must be greater than 0");
  } else if (targetValue >= 100) {
    createWarning("Target must be smaller than 100");
  } else if (binaryTreeValue.includes(targetValue)) {
    createWarning("Target must be unique");
  } else if (isNaN(targetValue)) {
    createWarning("Target must be a number");
  } else if (!binaryTreeValue.includes(targetValue)) {
    createWarning("Input isn't in the tree");
  }
}

export default deleteNode;
