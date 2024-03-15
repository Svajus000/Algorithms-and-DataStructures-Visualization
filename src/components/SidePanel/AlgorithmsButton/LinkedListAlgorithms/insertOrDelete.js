import findTargetIndex from "./helper/findTargetIndex";
import {
  linkedList,
  linkedListValues,
} from "../../../Playground/LinkedList/LinkedList";
import createWarning from "../../Warning/warning";
let timer = null;
function insertOrDeleteTarget(type, algorithmParameters) {
  let targetValue = document.getElementById("target").value;
  let targetIndex = Number(document.getElementById("targetIndex").value);
  console.log(targetIndex);
  if (type === "insert") {
    algorithmParameters.linkedList.type = "insert";
  } else {
    algorithmParameters.linkedList.type = "delete";
  }
  if (targetIndex > 0 && algorithmParameters.linkedList.type === "insert") {
    algorithmParameters.linkedList.counter = targetIndex - 1;
  } else {
    algorithmParameters.linkedList.counter = targetIndex;
  }
  algorithmParameters.linkedList.index = targetIndex;
  algorithmParameters.linkedList.current = linkedList.head;
  if (
    targetValue > -1 &&
    targetValue < 100 &&
    targetIndex <= linkedListValues.length &&
    targetIndex > -1 &&
    algorithmParameters.linkedList.type === "insert" &&
    !linkedListValues.includes(parseInt(targetValue)) &&
    parseInt(targetValue) >= 0
  ) {
    algorithmParameters.isRunning = true;
    timer = setInterval(
      findTargetIndex,
      1000,
      targetValue,
      algorithmParameters
    );
  } else if (
    algorithmParameters.linkedList.type === "delete" &&
    targetIndex < linkedListValues.length &&
    targetIndex > -1
  ) {
    algorithmParameters.isRunning = true;
    targetValue = null;
    timer = setInterval(
      findTargetIndex,
      1000,
      targetValue,
      algorithmParameters
    );
  } else if (linkedListValues.includes(parseInt(targetValue))) {
    createWarning("Input value must to be unique");
  } else if (targetValue > 100) {
    createWarning("Input mustn't be more than 2 letters");
  } else if (targetValue <= -1) {
    createWarning("Input mustn't not be less than 0 value");
  } else if (targetIndex > linkedListValues.length) {
    createWarning("Target index is too big");
  } else if (targetIndex <= -1) {
    createWarning("Target index is too small");
  } else if (isNaN(targetIndex)) {
    createWarning("TargetIndex must be a number");
  } else if (isNaN(targetValue)) {
    createWarning("Target must be a number");
  }
}

export { timer };
export default insertOrDeleteTarget;
