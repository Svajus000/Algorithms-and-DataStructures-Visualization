import { startingNode, grid } from "../../Playground/Graph/Graph";
import "./AlgorithmStartButton.css";
import { dfs, bfs } from "../AlgorithmsButton/GraphAlgorithms/GraphAlgorithms";
import { useContext } from "react";
import { DsaContext } from "../../../App";
import { stack } from "../../Playground/Stack/Stack";
import resetGraph from "../ResetButton/ResetGraph/ResetGraph";
import {
  popStack,
  pushStack,
} from "../AlgorithmsButton/StackAlgorithms/StackAlgorithms";

function AlgorithmStartButton() {
  const { dataStructure, algorithmParameters } = useContext(DsaContext);

  function handleClick() {
    let algorithmButton = document.getElementById("Algorithms").innerHTML;

    if (!algorithmParameters.isRunning) {
      if (dataStructure === "Stack") {
        if (algorithmButton === "Push") {
          // pushStack(stack, algorithmParameters);
        }
        if (algorithmButton === "Pop") {
          // popStack(stack, algorithmParameters);
        }
      }

      if (dataStructure === "Stack") {
        if (algorithmButton === "Push") {
          pushStack(stack, algorithmParameters);
        }
        if (algorithmButton === "Pop") {
          popStack(stack, algorithmParameters);
        }
      }
      if (dataStructure === "Graph") {
        resetGraph(algorithmParameters);
        if (algorithmButton === "Breath-First-Search") {
          bfs(startingNode, grid, algorithmParameters);
        }
        if (algorithmButton === "Depth-First-Search") {
          dfs(
            grid,
            grid[startingNode.row + 1][startingNode.column],
            algorithmParameters
          );
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
