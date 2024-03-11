import {
  linkedList,
  linkedListValues,
} from "../../../Playground/LinkedList/LinkedList";

let timer = null;

function moveLinkedList(direction, algorithmParameters) {
  if (direction === "forward") {
    for (let i = 0; i < linkedListValues.length; i++) {
      const element = document.getElementById(linkedListValues[i]).parentElement
        .parentElement;
      element.style.transform = `translate(96px, 0px)`;
    }
  }
  if (direction === "backward") {
    for (
      let i = 0;
      i < algorithmParameters.linkedList.previousElementsList.length;
      i++
    ) {
      const element = algorithmParameters.linkedList.previousElementsList[i];
      element.style.transform = `translate(-96px, 0px)`;
    }
  }
}

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
      console.log("insert first");
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

function findTarget(algorithmParameters) {
  algorithmParameters.linkedList.current = linkedList.head;
  algorithmParameters.isRunning = true;
  let target = Number(document.getElementById("target").value);
  console.log("Started");
  timer = setInterval(findTargetAnimation, 1000, target, algorithmParameters);
}

function findTargetAnimation(target, algorithmParameters) {
  let head = document.getElementById("head");
  console.log("Started");
  if (algorithmParameters.linkedList.current.value === target) {
    clearInterval(timer);
    algorithmParameters.linkedList.counter = 0;

    algorithmParameters.isRunning = false;
    if (algorithmParameters.linkedList.type !== null) {
      insertOrDeleteTarget("insert", algorithmParameters);
    }
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
  } else {
    console.warn(
      `Incorrect type ${targetIndex}, ${targetValue}, ${linkedListValues.length}`
    );
  }
}

function createTargetNode(targetValue) {
  let target = document.getElementsByClassName("target")[0];
  let flexContainer = document.createElement("div");
  let nodeElement = document.createElement("div");
  let valueElement = document.createElement("div");
  let pointerElement = document.createElement("div");
  let lineElement = document.createElement("div");
  let arrowHeadRight = document.createElement("div");

  flexContainer.setAttribute("class", "flex-container targetNode");
  nodeElement.setAttribute("class", "node--linkedList");
  valueElement.setAttribute("class", "value");
  valueElement.setAttribute("id", `${targetValue}`);
  pointerElement.setAttribute("class", "targetPointer");
  lineElement.setAttribute("class", "line--horizontal ");
  arrowHeadRight.setAttribute("class", "arrowHead--right ");

  valueElement.innerHTML = targetValue;

  target.appendChild(flexContainer);
  flexContainer.appendChild(nodeElement);
  flexContainer.appendChild(pointerElement);
  nodeElement.appendChild(valueElement);

  pointerElement.appendChild(lineElement);
  pointerElement.appendChild(arrowHeadRight);
  return flexContainer;
}

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
        console.log(element);
        element.style.transform = "translate(-6rem,0px)";
      }
      algorithmParameters.isRunning = false;
    }, 2500);
  }
}

function createPrevElement() {
  let lList = document.getElementsByClassName("lList")[0];
  console.log(lList);
  let prevElement = document.createElement("div");
  let lineVertical = document.createElement("div");
  let arrowHeadBottom = document.createElement("div");
  let p = document.createElement("p");
  p.textContent = "Prev";
  prevElement.setAttribute("id", "prev");
  lineVertical.setAttribute("class", "line--vertical");
  arrowHeadBottom.setAttribute("class", "arrowHead--bottom");
  prevElement.appendChild(p);
  prevElement.appendChild(lineVertical);
  prevElement.appendChild(arrowHeadBottom);
  lList.appendChild(prevElement);
}

export { findTarget, insertOrDeleteTarget };
