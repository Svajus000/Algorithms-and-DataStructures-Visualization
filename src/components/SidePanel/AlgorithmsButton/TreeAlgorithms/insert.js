import { binaryTree } from "../../../Playground/Tree/Tree";
import createTargetNode from "./components/createTargetNode";

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

export default insert;
