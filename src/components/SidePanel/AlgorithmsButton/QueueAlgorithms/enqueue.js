import { Square } from "../../../Playground/Queue/Queue";

function enqueue(queue, algorithmParameters) {
  if (queue.items.length < 13) {
    queue.items.push(algorithmParameters.queue.lastElement);
    console.log(queue.items);
    // algorithmParameters.queue.enqueue([...queue.items]);
    let queueElement = document.getElementsByClassName("queue")[0];
    queueElement.appendChild(<Square />);
    algorithmParameters.queue.lastElement++;
  }
}
