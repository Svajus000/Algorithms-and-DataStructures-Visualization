import { grid } from "../../../Playground/Graph/Graph";
import { algorithm } from "../../AlgorithmStartButton/AlgorithmStartButton";

function resetGraph() {
  for (let numOfRows = 0; numOfRows < grid.length; numOfRows++) {
    let row = grid[numOfRows];
    for (let numOfColumns = 0; numOfColumns < row.length; numOfColumns++) {
      let node = row[numOfColumns];
      let nodeElement = document.getElementById(
        `node-${node.row}-${node.column}`
      );
      if (node.isStarting === true) {
        nodeElement.classList.remove("visited");
        nodeElement.classList.remove("backtrack");
      } else {
        nodeElement.classList.remove("visited");
        nodeElement.classList.remove("backtrack");
        node.visited = false;
        node.previousNode = null;
      }
    }
  }
  algorithm.state = false;
  algorithm.speed = 100;
  algorithm.backtrackingSpeed = 15;
}

export default resetGraph;
