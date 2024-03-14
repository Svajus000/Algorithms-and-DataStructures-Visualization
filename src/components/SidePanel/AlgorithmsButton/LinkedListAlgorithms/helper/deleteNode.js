import { linkedListValues } from "../../../../Playground/LinkedList/LinkedList";

function deleteNode(position, currentElement, algorithmParameters) {
  let head = document.getElementById("head");
  let headBoundaries = head.getBoundingClientRect();
  let firstElementBoundaries = document
    .getElementById("1")
    .getBoundingClientRect();
  let currentElementPointer = currentElement.childNodes[1];
  let currentElementLine = currentElementPointer.childNodes[0];
  let currentElementArrowHead = currentElementPointer.childNodes[1];

  if (position === "first" || position === "last") {
    head.style.transitionDuration = "0.44s";
    currentElement.style.transitionDuration = "1s";
    head.style.transform = `translate(${
      headBoundaries.x - firstElementBoundaries.x + 50
    }px,-5rem)`;
    currentElement.style.transform = "translate(0rem,-5rem)";
    algorithmParameters.isRunning = false;
  }
  if (position === "between") {
    let prevElement =
      algorithmParameters.linkedList.previousElementsList[
        algorithmParameters.linkedList.previousElementsList.length - 2
      ];
    let prevElementPointer = prevElement.childNodes[1];
    let prevElementLine = prevElementPointer.childNodes[0];
    let prevElementArrowHead = prevElementPointer.childNodes[1];
    head.style.transitionDuration = "0.44s";
    currentElement.style.transitionDuration = "1s";
    head.style.transform = `translate(${
      headBoundaries.x - firstElementBoundaries.x + 50
    }px,-5rem)`;
    currentElement.style.transform = "translate(0rem,-5rem)";

    prevElementPointer.style.transform = "rotate(-40deg)";
    prevElementLine.style.transform = "scaleX(2)";
    let prevLineBoundaries = prevElementLine.getBoundingClientRect();
    let prevHeadBoundaries = prevElementArrowHead.getBoundingClientRect();
    prevElementArrowHead.style.transitionDuration = "1s";
    prevElementArrowHead.style.transform = `translate(${
      prevHeadBoundaries.left - prevLineBoundaries.left - 3
    }px,0px)`;

    currentElementPointer.style.transform = "rotate(40deg)";
    currentElementLine.style.transform = "scaleX(2)";
    const currentLineBoundaries = currentElementLine.getBoundingClientRect();
    const currentArrowHeadBoundaries =
      currentElementArrowHead.getBoundingClientRect();
    currentElementArrowHead.style.transitionDuration = "1s";
    currentElementArrowHead.style.transform = `translate(${
      currentArrowHeadBoundaries.left - currentLineBoundaries.left - 3
    }px, 0px)`;
    setTimeout(() => {
      prevElementPointer.style.transform = "rotate(0deg)";
      prevElementLine.style.transform = "scaleX(4)";
      prevElementArrowHead.style.transform = `translate(${
        prevHeadBoundaries.left - prevLineBoundaries.left + 64
      }px,0px)`;
    }, 1000);
    setTimeout(() => {
      currentElementPointer.style.transform = "rotate(0deg)";
      currentElementLine.style.transform = "scaleX(1)";
      currentElementArrowHead.style.transform = `translate(${
        currentArrowHeadBoundaries.left - currentLineBoundaries.left - 32
      }px, 0px)`;
    }, 2000);
    setTimeout(() => {
      prevElementLine.style.transform = "scaleX(1)";
      prevElementArrowHead.style.transform = `translate(0px,0px)`;

      let restLinkedList = linkedListValues.slice(
        algorithmParameters.linkedList.index + 1,
        linkedListValues.length
      );

      for (let i = 0; i < restLinkedList.length; i++) {
        const element = document.getElementById(restLinkedList[i]).parentElement
          .parentElement;
        element.style.transform = "translate(-6rem,0px)";
      }
      algorithmParameters.isRunning = false;
    }, 2500);
  }
}

export default deleteNode;
