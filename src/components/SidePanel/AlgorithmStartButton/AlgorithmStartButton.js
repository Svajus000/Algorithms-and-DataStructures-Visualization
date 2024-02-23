import { startingNode, grid } from "../../Playground/Graph/Graph";
import "./AlgorithmStartButton.css";
import {
  bfs,
  dfs,
  algorithm,
} from "../AlgorithmsButton/GraphAlgorithms/GraphAlgorithms";
import { useContext } from "react";
import { DsaContext } from "../../../App";

function AlgorithmStartButton() {
  const { dataStructure } = useContext(DsaContext);

  function handleClick() {
    let algorithmButton = document.getElementById("Algorithms").innerHTML;
    if (dataStructure === "Graph") {
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
  }

  return (
    <button className="sidepanel-button" onClick={handleClick}>
      Start Algorithm
    </button>
  );
}

export default AlgorithmStartButton;
export { algorithm };
