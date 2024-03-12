import { binaryTree } from "../../../Playground/Tree/Tree";

function resetTree(algorithmParameters) {
  binaryTree.root = null;
  binaryTree.insert(25);
  binaryTree.insert(12);
  binaryTree.insert(50);
  binaryTree.insert(7);
  binaryTree.insert(20);
  binaryTree.insert(38);
  binaryTree.insert(75);

  let hiddenElement = document.getElementsByClassName("hide");
  let valueElements = document.getElementsByClassName("value");
  for (let i = 0; i < valueElements.length; i++) {
    const element = valueElements[i];
    element.textContent = element.id;
  }
  while (hiddenElement.length > 0) {
    const element = hiddenElement[0];
    element.classList.remove("hide");
  }
  let targetList = document.getElementsByClassName("target--tree--node");
  for (let i = 0; i < targetList.length; i++) {
    const element = targetList[i].parentNode;
    element.removeChild(targetList[i]);
  }
}

export default resetTree;
