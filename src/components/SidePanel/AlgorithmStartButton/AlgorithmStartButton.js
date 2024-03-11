import { startingNode, grid } from "../../Playground/Graph/Graph";
import "./AlgorithmStartButton.css";
import { dfs, bfs } from "../AlgorithmsButton/GraphAlgorithms/GraphAlgorithms";
import { useContext } from "react";
import { DsaContext } from "../../../App";
import { stack } from "../../Playground/Stack/Stack";
import { queue } from "../../Playground/Queue/Queue";
import { hashTable } from "../../Playground/HashTable/HashTable";
import resetGraph from "../ResetButton/ResetGraph/ResetGraph";
import resetLinkedList from "../ResetButton/ResetLinkedList/ResetLinkedList";
import {
  popStack,
  pushStack,
} from "../AlgorithmsButton/StackAlgorithms/StackAlgorithms";
import {
  dequeue,
  enqueue,
} from "../AlgorithmsButton/QueueAlgorithms/QueueAlgorithms";
import {
  setItem,
  getItem,
} from "../AlgorithmsButton/HashTableAlgorithms/HashTableAlgorithms";
import {
  insertOrDeleteTarget,
  findTarget,
} from "../AlgorithmsButton/LinkedListAlgorithms/LinkedListAlgorithms";
import { linkedList, Node } from "../../Playground/LinkedList/LinkedList";

function AlgorithmStartButton() {
  const { dataStructure, algorithmParameters } = useContext(DsaContext);
  algorithmParameters.queue.lastElement = queue.items.length;
  function handleClick() {
    let algorithmButton = document.getElementById("Algorithms").innerHTML;
    let algorithmDropdownButton =
      document.getElementsByClassName("dropdown-algorithm")[0];
    let dataStructureDropdown =
      document.getElementsByClassName("dropdown-content")[0];

    if (
      algorithmDropdownButton.classList.contains("open") ||
      dataStructureDropdown.classList.contains("open")
    ) {
      algorithmDropdownButton.classList.remove("open");
      dataStructureDropdown.classList.remove("open");
    }
    if (!algorithmParameters.isRunning) {
      if (dataStructure === "Queue") {
        if (algorithmButton === "Enqueue") {
          enqueue(queue, algorithmParameters);
        }
        if (algorithmButton === "Dequeue") {
          dequeue(queue, algorithmParameters);
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
      if (dataStructure === "HashTable") {
        if (algorithmButton === "GetItem") {
          getItem(hashTable, algorithmParameters);
        }
        if (algorithmButton === "SetItem") {
          setItem(hashTable, algorithmParameters);
        }
      }
      if (dataStructure === "LinkedList") {
        resetLinkedList(linkedList, Node, algorithmParameters);
        if (algorithmButton === "FindTarget") {
          findTarget(algorithmParameters);
        }
        if (algorithmButton === "InsertTarget") {
          insertOrDeleteTarget("insert", algorithmParameters);
        }
        if (algorithmButton === "DeleteTarget") {
          insertOrDeleteTarget("delete", algorithmParameters);
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
