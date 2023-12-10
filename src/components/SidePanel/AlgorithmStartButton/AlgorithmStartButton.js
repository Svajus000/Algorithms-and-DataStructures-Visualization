import { startingNode, grid } from "../../Grid/Grid";
import "./AlgorithmStartButton.css";

let algorithm = { state: false, speed: 15, backtrackingSpeed: 15 };
let targetNode;

function bfs(startingNode, grid) {
  let neighbours = [startingNode];
  let nodesList = [];
  while (neighbours.length > 0) {
    let neighbour = neighbours.shift();
    setTimeout(animateVisitedNodes, algorithm.speed, neighbour);
    algorithm.speed += 15;
    if (neighbour.isFinishing === true) {
      targetNode = neighbour;
      break;
    }
    nodesList = getNeigbours(grid, neighbour);
    for (const node in nodesList) {
      nodesList[node].previousNode = neighbour;
      nodesList[node].visited = true;
      neighbours.push(nodesList[node]);
    }
  }
  backtrack(targetNode);
  algorithm.state = true;
}

function animateVisitedNodes(node) {
  let nodeElement = document.getElementById(`node-${node.row}-${node.column}`);
  nodeElement.classList.add("visited");
}

function animateBacktracking(node) {
  let nodeElement = document.getElementById(`node-${node.row}-${node.column}`);
  nodeElement.classList.add("backtrack");
}

function backtrack(targetNode) {
  let currentNode = targetNode;

  while (currentNode.previousNode != null) {
    setTimeout(animateBacktracking, algorithm.speed, currentNode);
    currentNode = currentNode.previousNode;
    algorithm.speed += 10;
    console.log(algorithm.speed);
  }
  setTimeout(animateBacktracking, algorithm.speed, currentNode);
}

function getNeigbours(grid, node) {
  let neighbours = [];
  let neighbourLeft;
  let neighbourBottom;
  let neighbourTop;
  let neighbourRight;
  if (
    node.column + 1 < grid[0].length &&
    grid[node.row][node.column + 1].visited === false
  ) {
    neighbourRight = grid[node.row][node.column + 1];
    neighbours.push(neighbourRight);
    neighbourRight.distance = node.distance + 1;
  }
  if (
    node.row + 1 < grid.length &&
    grid[node.row + 1][node.column].visited === false
  ) {
    neighbourBottom = grid[node.row + 1][node.column];
    neighbours.push(neighbourBottom);
    neighbourBottom.distance = node.distance + 1;
  }
  if (
    node.column - 1 >= 0 &&
    grid[node.row][node.column - 1].visited === false
  ) {
    neighbourLeft = grid[node.row][node.column - 1];
    neighbours.push(neighbourLeft);
    neighbourLeft.distance = node.distance + 1;
  }
  if (node.row - 1 >= 0 && grid[node.row - 1][node.column].visited === false) {
    neighbourTop = grid[node.row - 1][node.column];
    neighbours.push(neighbourTop);
    neighbourTop.distance = node.distance + 1;
  }
  return neighbours;
}

function dfs(grid, node) {
  if (algorithm.state) {
    return;
  }
  if (node.isFinishing === true) {
    algorithm.state = true;
    targetNode = node;
    backtrack(targetNode);
  }
  algorithm.speed += 10;
  node.visited = true;
  setTimeout(animateVisitedNodes, algorithm.speed, node);
  if (
    node.row + 1 < grid.length &&
    grid[node.row + 1][node.column].visited === false
  ) {
    grid[node.row + 1][node.column].previousNode = node;
    dfs(grid, grid[node.row + 1][node.column]);
  }
  if (
    node.column + 1 < grid[0].length &&
    grid[node.row][node.column + 1].visited === false
  ) {
    grid[node.row][node.column + 1].previousNode = node;
    dfs(grid, grid[node.row][node.column + 1]);
  }
  if (node.row - 1 >= 0 && grid[node.row - 1][node.column].visited === false) {
    grid[node.row - 1][node.column].previousNode = node;
    dfs(grid, grid[node.row - 1][node.column]);
  }
  if (
    node.column - 1 >= 0 &&
    grid[node.row][node.column - 1].visited === false
  ) {
    grid[node.row][node.column - 1].previousNode = node;
    dfs(grid, grid[node.row][node.column - 1]);
  }
}

export default function AlgorithmStartButton() {
  function handleClick() {
    let algorithmButton = document.getElementById("algorithm").innerHTML;

    if (!algorithm.state) {
      if (algorithmButton === "Breath-First-Search") {
        bfs(startingNode, grid);
      }
      if (algorithmButton === "Depth-First-Search") {
        dfs(grid, grid[startingNode.row + 1][startingNode.column]);
      } else {
        console.log("None");
        console.log(algorithmButton);
      }
    }
  }

  return (
    <button className="sidepanel-button" onClick={handleClick}>
      Start Algorithm
    </button>
  );
}

export { algorithm };
