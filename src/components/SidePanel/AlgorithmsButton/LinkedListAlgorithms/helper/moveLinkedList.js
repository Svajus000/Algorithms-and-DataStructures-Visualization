import { linkedListValues } from "../../../../Playground/LinkedList/LinkedList";

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
export default moveLinkedList;
