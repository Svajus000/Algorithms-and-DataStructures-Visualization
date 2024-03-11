import { linkedListValues } from "../../../Playground/LinkedList/LinkedList";

function resetLinkedList(linkedList, Node, algorithmParameters) {
  const node1 = new Node(1);
  const node2 = new Node(32);
  const node3 = new Node(18);
  const node4 = new Node(13);
  const node5 = new Node(25);

  linkedList.head = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  algorithmParameters.linkedList.current = linkedList.head;
  algorithmParameters.linkedList.previousElementsList = [];
  let targetNodes = document.getElementsByClassName("targetNode");
  let head = document.getElementById("head");
  let prev = document.getElementById("prev");
  if (prev) {
    document.getElementById("prev").parentElement.removeChild(prev);
  }
  head.style.transform = `translate(0rem,0rem)`;
  head.style.transitionDuration = "0s";

  for (let i = 0; i < linkedListValues.length; i++) {
    const value = linkedListValues[i];
    let element = document.getElementById(value).parentElement.parentElement;
    let elementPointer =
      document.getElementById(value).parentElement.nextSibling;
    let elementPointerArrow = elementPointer.childNodes[1];
    let elementPointerLine = elementPointer.childNodes[0];
    elementPointer.style.transform = `translate(0rem,0rem)`;
    elementPointer.style.transitionDuration = "0s";
    elementPointerArrow.style.transform = `translate(0rem,0rem)`;
    elementPointerArrow.style.transitionDuration = "0s";
    elementPointerLine.style.transform = `translate(0rem,0rem)`;
    elementPointerLine.style.transitionDuration = "0s";
    element.style.transform = `translate(0rem,0rem)`;
    element.style.transitionDuration = "0s";
    setTimeout(() => {
      element.style.transitionDuration = "0.8s";
      elementPointerArrow.style.transitionDuration = "1s";
      elementPointerLine.style.transitionDuration = "1s";
      elementPointer.style.transitionDuration = "1s";
    });
  }
  for (let i = 0; i < targetNodes.length; i++) {
    const element = targetNodes[i];
    element.parentElement.removeChild(element);
  }
  setTimeout(() => {
    head.style.transitionDuration = "0.5s";
  });
  console.log(algorithmParameters);
}

export default resetLinkedList;
