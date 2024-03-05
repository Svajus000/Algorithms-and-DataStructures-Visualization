import { grid } from "../../../Playground/Graph/Graph";

function resetGraph(algorithmParameters) {
  if (!algorithmParameters.isRunning) {
    algorithmParameters.state = false;
    algorithmParameters.graph.speed = 15;
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
  }
}

export default resetGraph;
