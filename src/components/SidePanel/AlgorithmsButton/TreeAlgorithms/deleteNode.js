import { binaryTree } from "../../../Playground/Tree/Tree";
function deleteNode(algorithmParameters) {
  let targetValue = Number(document.getElementById("target--tree").value);
  let targetElement = document.getElementById(targetValue);
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
}

export default deleteNode;
