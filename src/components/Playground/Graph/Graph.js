import "./Graph.css";

export let startingNode;
export const grid = createGrid(40, 40);

function createGrid(row, column) {
  const grid = [];
  for (let i = 0; i < row; i++) {
    grid.push([]);
    for (let x = 0; x < column; x++) {
      let node = {
        row: i,
        column: x,
        visited: false,
        isStarting: false,
        isFinishing: false,
        distance: Infinity,
        previousNode: null,
      };
      if (node.row === 10 && node.column === 10) {
        startingNode = node;
        node.isStarting = true;
        node.visited = true;
        node.distance = 0;
      }
      if (node.row === 20 && node.column === 20) {
        node.isFinishing = true;
      }
      grid[i].push(node);
    }
  }
  return grid;
}

export default function Graph() {
  const gridNodes = grid.map((row) => (
    <div key={`row-${row[0].row}`} className="row">
      {row.map((node) => (
        <div
          key={`node-${node.row}-${node.column}`}
          id={`node-${node.row}-${node.column}`}
          className={`node-graph ${node.isStarting ? "isStarting" : ""} ${
            node.isFinishing ? "isFinishing" : ""
          }`}
        ></div>
      ))}
    </div>
  ));
  return (
    <div key="grid" className="grid">
      {gridNodes}
    </div>
  );
}
