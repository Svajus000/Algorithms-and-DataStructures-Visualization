import findTargetIndex from "./helper/findTargetIndex";
import {
  linkedList,
  linkedListValues,
} from "../../../Playground/LinkedList/LinkedList";
let timer = null;
function insertOrDeleteTarget(type, algorithmParameters) {
  let targetValue = document.getElementById("target").value;
  let targetIndex = Number(document.getElementById("targetIndex").value);

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
    (targetValue.length > 0 &&
      targetValue.length < 3 &&
      targetIndex <= linkedListValues.length &&
      algorithmParameters.linkedList.type === "insert" &&
      !linkedListValues.includes(parseInt(targetValue)) &&
      parseInt(targetValue) >= 0) ||
    parseInt(targetValue) < 0
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
  } else {
    console.warn(
      `Incorrect type ${targetIndex}, ${targetValue}, ${linkedListValues.length}`
    );
  }
}

export { timer };
export default insertOrDeleteTarget;
