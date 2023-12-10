import "./ClearButton.css";
import { grid } from "../../Grid/Grid";
import { algorithm } from "../AlgorithmStartButton/AlgorithmStartButton";

export default function ClearButton() {
  function handleClick() {
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
  return (
    <button className="sidepanel-button" onClick={handleClick}>
      Clear Board
    </button>
  );
}
