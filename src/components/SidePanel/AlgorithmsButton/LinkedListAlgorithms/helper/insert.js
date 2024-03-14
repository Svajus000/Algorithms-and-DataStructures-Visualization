import moveLinkedList from "./moveLinkedList";

function insert(position, targetElement, currentElement, algorithmParameters) {
  const targetsArrowElement = targetElement.childNodes[1];
  const targetsArrowLineElement = targetsArrowElement.childNodes[0];
  const targetsArrowHeadElement = targetsArrowElement.childNodes[1];
  const currentsArrowElement = currentElement.childNodes[1];

  const targetBoundaries = targetElement.getBoundingClientRect();
  const currentBoundaries = currentElement.getBoundingClientRect();

  const translateX = currentBoundaries.left - targetBoundaries.left;
  const translateY = currentBoundaries.top - targetBoundaries.top;
  targetsArrowElement.style.transitionDuration = "1s";
  targetElement.style.transitionDuration = "1.5s";
  targetsArrowLineElement.style.transitionDuration = "1s";
  targetsArrowHeadElement.style.transitionDuration = "1s";

  targetElement.style.transform = `translate(${translateX}px, ${
    translateY + 96
  }px)`;
  setTimeout(() => {
    if (position === "first") {
      targetsArrowElement.style.transform = "rotate(-90deg)";
    }
    if (position === "between") {
      targetsArrowElement.style.transform = "rotate(-45deg)";
    }
    if (position === "last") {
      currentsArrowElement.style.transform = "rotate(90deg)";
    }
  }, 1500);
  if (position === "between") {
    setTimeout(() => {
      targetsArrowLineElement.style.transform = "scaleX(2.4)";
      const arrowLineBoundaries =
        targetsArrowLineElement.getBoundingClientRect();
      const arrowHeadBoundaries =
        targetsArrowHeadElement.getBoundingClientRect();
      targetsArrowHeadElement.style.transform = `translate(${
        arrowHeadBoundaries.left - arrowLineBoundaries.left + 21
      }px,0px)`;
    }, 2000);
  }
  setTimeout(() => {
    if (position === "first") {
      targetElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
      moveLinkedList("forward", algorithmParameters);
      targetElement.style.transitionDuration = "1.3s";
      targetsArrowElement.style.transform = "rotate(0deg)";
      algorithmParameters.isRunning = false;
    }
    if (position === "between") {
      currentsArrowElement.style.transform = "rotate(90deg)";
    }
    if (position === "last") {
      targetElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
      moveLinkedList("backward", algorithmParameters);
      targetsArrowElement.style.transitionDuration = "1.2s";
      currentsArrowElement.style.transform = "rotate(0deg)";
      algorithmParameters.isRunning = false;
    }
  }, 2500);
  if (position === "between") {
    setTimeout(() => {
      moveLinkedList("backward", algorithmParameters);
      currentsArrowElement.style.transform = "rotate(0deg)";
      currentsArrowElement.style.transitionDuration = "1.3s";
      targetElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
      targetsArrowHeadElement.style.transform = `translate(0px,0px)`;
      targetsArrowLineElement.style.transform = "scaleX(1)";
      targetsArrowElement.style.transitionDuration = "1.8s";
      targetsArrowElement.style.transform = "rotate(0deg)";

      algorithmParameters.isRunning = false;
    }, 3500);
  }
}
export default insert;
