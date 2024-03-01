import "./Queue.css";

class QueueC {
  constructor() {
    this.items = [];
  }
}

let isRunning = false;
let counter = 0;
const queue = new QueueC();

queue.items.push(0);
queue.items.push(1);
queue.items.push(2);
queue.items.push(3);
queue.items.push(4);

function dequeue(element, elementNumber) {
  if (elementNumber === 0) {
    element.style.transform = `translateX(3rem)`;
    setTimeout(() => {
      element.style.transform = `translate(3rem, 12rem)`;
    }, 2000);
  } else {
    element.style.transform = `${2.2 * (counter + 1)}rem`;
  }
  if (elementNumber === counter) {
    element.style.transform = `translateX(${2.2 * elementNumber + 3}rem)`;
    setTimeout(() => {
      element.style.transform = `translate(${
        2.2 * elementNumber + 3
      }rem, 12rem)`;
    }, 2000);
  }
}

function Square({ id }) {
  return <div className={`square ${id}`}></div>;
}

function Queue() {
  let squareList = queue.items.map((item) => <Square id={item} />);
  return (
    <div className="head">
      <div className="queue">{squareList}</div>
      <div className="para">
        <p>Back</p>
        <p>Front</p>
      </div>
      <DequeueButton />
      <ResetButton />
    </div>
  );
}

function DequeueButton() {
  function handleClick() {
    if (!isRunning && queue.items.length > 0) {
      for (let i = 0 + counter; i < queue.items.length; i++) {
        isRunning = true;
        let itemElement = document.getElementsByClassName(`square ${i}`)[0];
        setTimeout(dequeue, 1000 * i, itemElement, i);
      }
      setTimeout(() => {
        isRunning = false;
        counter++;
      }, 4000);
    }
  }
  return <button onClick={handleClick}>Dequeue</button>;
}

function ResetButton() {
  function handleClick() {
    console.log(queue);
    if (!isRunning) {
      for (let i = 0; i < queue.items.length; i++) {
        let itemElement = document.getElementsByClassName(`square ${i}`)[0];
        itemElement.style.transform = `translate(0rem, 0rem)`;
        setTimeout(() => {
          isRunning = false;
          counter = 0;
        }, 6000);
      }
    }
  }
  return <button onClick={handleClick}>Reset</button>;
}

export default Queue;
