import createWarning from "../../Warning/warning";
function enqueue(queue, algorithmParameters) {
  if (queue.items.length < 13) {
    queue.items.push(algorithmParameters.queue.lastElement);
    let queueElement = document.getElementsByClassName("queue")[0];
    let squareElement = document.createElement("div");
    squareElement.setAttribute(
      "class",
      `square ${algorithmParameters.queue.lastElement}`
    );
    squareElement.style.marginRight = `${
      algorithmParameters.queue.lastElement * 2.2
    }rem`;
    squareElement.style.transform = `translateX(${
      algorithmParameters.queue.order * 2.2
    }rem)`;
    squareElement.style.animation = `appear 1s`;
    queueElement.appendChild(squareElement);
    algorithmParameters.queue.lastElement++;
  } else {
    createWarning("There is no more space");
  }
}

export default enqueue;
