let targetNode;

const bfs = (startingNode, grid, algorithmParameters) => {
  if (!algorithmParameters.isRunning) {
    algorithmParameters.isRunning = true;
    let neighbours = [startingNode];
    let nodesList = [];
    while (neighbours.length > 0) {
      let neighbour = neighbours.shift();
      setTimeout(
        animateVisitedNodes,
        algorithmParameters.graph.speed,
        neighbour
      );
      algorithmParameters.graph.speed += 15;
      if (neighbour.isFinishing === true) {
        targetNode = neighbour;
        setTimeout(() => {
          algorithmParameters.isRunning = false;
        }, algorithmParameters.graph.speed);
        break;
      }
      nodesList = getNeigbours(grid, neighbour);
      for (const node in nodesList) {
        nodesList[node].previousNode = neighbour;
        nodesList[node].visited = true;
        neighbours.push(nodesList[node]);
      }
    }
    backtrack(targetNode, algorithmParameters);
    algorithmParameters.state = true;
  }
};

function animateVisitedNodes(node) {
  let nodeElement = document.getElementById(`node-${node.row}-${node.column}`);
  nodeElement.classList.add("visited");
}

function animateBacktracking(node) {
  let nodeElement = document.getElementById(`node-${node.row}-${node.column}`);
  nodeElement.classList.add("backtrack");
}

function backtrack(targetNode, algorithmParameters) {
  let currentNode = targetNode;

  while (currentNode.previousNode != null) {
    setTimeout(
      animateBacktracking,
      algorithmParameters.graph.speed,
      currentNode
    );
    currentNode = currentNode.previousNode;
    algorithmParameters.graph.speed += 10;
  }
  setTimeout(animateBacktracking, algorithmParameters.graph.speed, currentNode);
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

const dfs = (grid, node, algorithmParameters) => {
  if (algorithmParameters.state) {
    return;
  }
  if (node.isFinishing === true) {
    algorithmParameters.state = true;
    targetNode = node;
    backtrack(targetNode, algorithmParameters);
    setTimeout(() => {
      algorithmParameters.isRunning = false;
    }, algorithmParameters.graph.speed);
  }
  algorithmParameters.isRunning = true;
  algorithmParameters.graph.speed += 10;
  node.visited = true;
  setTimeout(animateVisitedNodes, algorithmParameters.graph.speed, node);
  if (
    node.row + 1 < grid.length &&
    grid[node.row + 1][node.column].visited === false
  ) {
    grid[node.row + 1][node.column].previousNode = node;
    dfs(grid, grid[node.row + 1][node.column], algorithmParameters);
  }
  if (
    node.column + 1 < grid[0].length &&
    grid[node.row][node.column + 1].visited === false
  ) {
    grid[node.row][node.column + 1].previousNode = node;
    dfs(grid, grid[node.row][node.column + 1], algorithmParameters);
  }
  if (node.row - 1 >= 0 && grid[node.row - 1][node.column].visited === false) {
    grid[node.row - 1][node.column].previousNode = node;
    dfs(grid, grid[node.row - 1][node.column], algorithmParameters);
  }
  if (
    node.column - 1 >= 0 &&
    grid[node.row][node.column - 1].visited === false
  ) {
    grid[node.row][node.column - 1].previousNode = node;
    dfs(grid, grid[node.row][node.column - 1], algorithmParameters);
  }
};

export { dfs, bfs };
