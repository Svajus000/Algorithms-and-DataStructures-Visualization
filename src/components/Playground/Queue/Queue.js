import "./Queue.css";
import { useState } from "react";

class QueueC {
  constructor() {
    this.items = [];
  }
}

const queue = new QueueC();

queue.items.push(0);
queue.items.push(1);
queue.items.push(2);
queue.items.push(3);
queue.items.push(4);

function Square({ id, position, movement }) {
  const animationName = "appear";
  const squareStyle = {
    marginRight: `${position}rem`,
    transform: `translateX(${movement}rem)`,
  };
  if (id > 4) {
    squareStyle.animation = `${animationName} 1s`;
  }
  return <div className={`square ${id}`} style={squareStyle}></div>;
}

function Queue(algorithmParameters) {
  queue.items = [0, 1, 2, 3, 4];
  algorithmParameters.algorithmParameters.queue.order = 0;
  algorithmParameters.algorithmParameters.queue.lastElement =
    queue.items.length;
  const [line, setLine] = useState(queue.items);
  algorithmParameters.algorithmParameters.queue.enqueue = setLine;
  let position = null;
  let movement = null;
  let squareList = line.map((item, index) => {
    movement = algorithmParameters.algorithmParameters.queue.order * 2.2;
    position = index * 2.2;
    return <Square id={item} position={position} movement={movement} />;
  });

  return (
    <div className="header-queue">
      <div className="queue">{squareList}</div>
      <div className="line">
        <p>Back</p>
        <p>Front</p>
      </div>
    </div>
  );
}

export { queue, Square };
export default Queue;
