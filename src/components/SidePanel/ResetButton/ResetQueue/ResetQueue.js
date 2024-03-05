function resetQueue(queue, algorithmParameters) {
  let queueElement = document.getElementsByClassName("queue")[0];
  if (!algorithmParameters.isRunning) {
    algorithmParameters.queue.order = 0;
    algorithmParameters.queue.lastElement = 0;
    for (let i = 0; i < queue.items.length; i++) {
      const element = document.getElementsByClassName(
        `square ${queue.items[i]}`
      )[0];
      queueElement.removeChild(element);
    }
    for (let i = 0; i < 5; i++) {
      let squareElement = document.createElement("div");
      squareElement.setAttribute("class", `square ${i}`);
      squareElement.style.transform = `translate(0rem, 0rem)`;
      squareElement.style.opacity = "1";

      squareElement.style.marginRight = `${
        algorithmParameters.queue.lastElement * 2.2
      }rem`;
      squareElement.style.transform = `translateX(${
        algorithmParameters.queue.order * 2.2
      }rem)`;
      queueElement.appendChild(squareElement);
      algorithmParameters.queue.lastElement++;
    }
    queue.items = [0, 1, 2, 3, 4];
  }
}

export default resetQueue;
