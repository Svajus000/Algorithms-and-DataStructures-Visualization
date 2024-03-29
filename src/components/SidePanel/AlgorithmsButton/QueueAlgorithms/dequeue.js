import createWarning from "../../Warning/warning";
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
          if (window.innerWidth > 1024) {
            squareElement.style.transform = `translateX(${
              2.2 * algorithmParameters.queue.order
            }rem)`;
          } else if (window.innerWidth > 750 && window.innerWidth < 1024) {
            squareElement.style.transform = `translateX(${
              1.7 * algorithmParameters.queue.order
            }rem)`;
          } else if (window.innerWidth > 540 && window.innerWidth < 750) {
            squareElement.style.transform = `translateX(${
              1.4 * algorithmParameters.queue.order
            }rem)`;
          } else if (window.innerWidth < 540) {
            squareElement.style.transform = `translateX(${
              0.9 * algorithmParameters.queue.order
            }rem)`;
          }
        }, 750 * index);
      }
    });
    setTimeout(() => {
      algorithmParameters.isRunning = false;
    }, 750 * queue.items.length);
    queue.items.shift();
    algorithmParameters.queue.order++;
  } else {
    createWarning("There is no one in the queue");
  }
}

export default dequeue;
