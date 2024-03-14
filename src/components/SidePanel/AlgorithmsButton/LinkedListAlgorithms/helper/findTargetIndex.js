import insert from "../helper/insert";
import deleteNode from "../helper/deleteNode";
import createPrevElement from "../components/createPrev";
import createTargetNode from "../components/createTargetNode";
import { linkedListValues } from "../../../../Playground/LinkedList/LinkedList";
import { timer } from "../insertOrDelete";

function findTargetIndex(targetValue, algorithmParameters) {
  let prevElement = document.getElementById("prev");
  let head = document.getElementById("head");
  let elem = document.getElementById(
    algorithmParameters.linkedList.current.value
  ).parentElement.parentElement;
  algorithmParameters.linkedList.previousElementsList.push(elem);
  if (algorithmParameters.linkedList.counter === 0) {
    clearInterval(timer);
    const currentElement = document.getElementById(
      `${algorithmParameters.linkedList.current.value}`
    ).parentElement.parentElement;
    if (algorithmParameters.linkedList.type === "insert") {
      let targetElement = createTargetNode(targetValue);
      if (algorithmParameters.linkedList.index === 0) {
        insert("first", targetElement, currentElement, algorithmParameters);
      }
      if (algorithmParameters.linkedList.index === linkedListValues.length) {
        insert("last", targetElement, currentElement, algorithmParameters);
      }
      if (
        algorithmParameters.linkedList.index > 0 &&
        algorithmParameters.linkedList.index < linkedListValues.length
      ) {
        insert("between", targetElement, currentElement, algorithmParameters);
      }
    }
    if (algorithmParameters.linkedList.type === "delete") {
      if (algorithmParameters.linkedList.index === 0) {
        deleteNode("first", currentElement, algorithmParameters);
      }
      if (
        algorithmParameters.linkedList.index ===
        linkedListValues.length - 1
      ) {
        deleteNode("last", currentElement, algorithmParameters);
      }
      if (
        algorithmParameters.linkedList.index > 0 &&
        algorithmParameters.linkedList.index < linkedListValues.length - 1
      ) {
        deleteNode("between", currentElement, algorithmParameters);
      }
    }
    return;
  } else {
    head.style.transform += "translateX(6rem)";
    if (
      algorithmParameters.linkedList.index !== linkedListValues.length - 1 &&
      algorithmParameters.linkedList.type !== "insert"
    ) {
      if (!prevElement) {
        createPrevElement();
      } else {
        prevElement.style.transform += "translateX(6rem)";
      }
    }
    algorithmParameters.linkedList.counter--;
    algorithmParameters.linkedList.current =
      algorithmParameters.linkedList.current.next;
  }
}
export default findTargetIndex;
