import {
  linkedList,
  linkedListValues,
} from "../../../Playground/LinkedList/LinkedList";
import createFounded from "./components/createFoundedElement";
import createWarning from "../../Warning/warning";

let timer = null;
function findTarget(algorithmParameters) {
  let target = Number(document.getElementById("target").value);
  if (!isNaN(target) && target > 0 && target < 100) {
    algorithmParameters.linkedList.current = linkedList.head;
    algorithmParameters.isRunning = true;
    timer = setInterval(findTargetAnimation, 1000, target, algorithmParameters);
  } else if (isNaN(target)) {
    createWarning("Input must be a number");
  } else if (target < 0) {
    createWarning("Input must greater than 0");
  } else if (target >= 100) {
    createWarning("Input must lower than 100");
  } else if (target === 0) {
    createWarning("Input must greater than 0");
  }
}

function findTargetAnimation(target, algorithmParameters) {
  let head = document.getElementById("head");

  if (algorithmParameters.linkedList.current.value === target) {
    clearInterval(timer);
    algorithmParameters.linkedList.counter = 0;

    createFounded(algorithmParameters);
    return true;
  }
  if (algorithmParameters.linkedList.counter < linkedListValues.length - 1) {
    head.style.transform += "translateX(6rem)";
    algorithmParameters.linkedList.current =
      algorithmParameters.linkedList.current.next;
    algorithmParameters.linkedList.counter++;
  } else {
    let warning = document.getElementsByClassName("warning")[0];
    if (warning) {
      warning.remove();
      createWarning("Target wasn't found");
    } else {
      createWarning("Target wasn't found");
    }
    clearInterval(timer);
    algorithmParameters.linkedList.counter = 0;
    algorithmParameters.isRunning = false;

    return;
  }
}

export default findTarget;
