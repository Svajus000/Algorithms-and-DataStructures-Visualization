import {
  linkedList,
  linkedListValues,
} from "../../../Playground/LinkedList/LinkedList";

let timer = null;
function findTarget(algorithmParameters) {
  algorithmParameters.linkedList.current = linkedList.head;
  algorithmParameters.isRunning = true;
  let target = Number(document.getElementById("target").value);
  timer = setInterval(findTargetAnimation, 1000, target, algorithmParameters);
}

function findTargetAnimation(target, algorithmParameters) {
  let head = document.getElementById("head");
  console.log("Started");
  if (algorithmParameters.linkedList.current.value === target) {
    clearInterval(timer);
    algorithmParameters.linkedList.counter = 0;
    algorithmParameters.isRunning = false;
    return true;
  }
  if (algorithmParameters.linkedList.counter < linkedListValues.length - 1) {
    head.style.transform += "translateX(6rem)";
    algorithmParameters.linkedList.current =
      algorithmParameters.linkedList.current.next;
    algorithmParameters.linkedList.counter++;
  } else {
    clearInterval(timer);
    algorithmParameters.linkedList.counter = 0;
    algorithmParameters.isRunning = false;
    return;
  }
}

export default findTarget;
