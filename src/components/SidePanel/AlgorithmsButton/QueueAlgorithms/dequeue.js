function dequeue(queue, algorithmParameters) {
  if (queue.items.length !== 0) {
    algorithmParameters.isRunning = true;
    let queueElement = document.getElementsByClassName("queue")[0];
    queue.items.map((item, index) => {
      let squareElement = document.getElementsByClassName(`square ${item}`)[0];
      if (index === 0) {
        squareElement.style.transform = `translateX(${15 + item * 2.2}rem)`;
        squareElement.style.opacity = "0";
        setTimeout(() => {
          queueElement.removeChild(squareElement);
        }, 1000);
      } else {
        setTimeout(() => {
          squareElement.style.transform = `translateX(${
            2.2 * algorithmParameters.queue.order
          }rem)`;
        }, 750 * index);
      }
    });
    setTimeout(() => {
      algorithmParameters.isRunning = false;
    }, 750 * queue.items.length);
    queue.items.shift();
    algorithmParameters.queue.order++;
  }
}

export default dequeue;
