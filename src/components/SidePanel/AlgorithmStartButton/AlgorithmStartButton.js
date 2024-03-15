import "./AlgorithmStartButton.css";
import { useContext } from "react";
import { DsaContext } from "../../../App";
import createWarning from "../Warning/warning";
// <<----QUEUE---->>
import { queue } from "../../Playground/Queue/Queue";
import dequeue from "../AlgorithmsButton/QueueAlgorithms/dequeue";
import enqueue from "../AlgorithmsButton/QueueAlgorithms/enqueue";
// <<----STACK---->>
import { stack } from "../../Playground/Stack/Stack";
import popStack from "../AlgorithmsButton/StackAlgorithms/pop";
import pushStack from "../AlgorithmsButton/StackAlgorithms/push";
// <<----HASH-TABLE---->>
import { hashTable } from "../../Playground/HashTable/HashTable";
import setItem from "../AlgorithmsButton/HashTableAlgorithms/setItem";
import getItem from "../AlgorithmsButton/HashTableAlgorithms/getItem";
// <<----LINKED-LIST---->>
import resetLinkedList from "../ResetButton/ResetLinkedList/ResetLinkedList";
import insertOrDeleteTarget from "../AlgorithmsButton/LinkedListAlgorithms/insertOrDelete";
import findTarget from "../AlgorithmsButton/LinkedListAlgorithms/findTarget";
import { linkedList, Node } from "../../Playground/LinkedList/LinkedList";
// <<----TREE---->>
import resetTree from "../ResetButton/ResetTree/ResetTree";
import deleteNode from "../AlgorithmsButton/TreeAlgorithms/deleteNode";
import insert from "../AlgorithmsButton/TreeAlgorithms/insert";
// <<----GRAPH---->>
import { startingNode, grid } from "../../Playground/Graph/Graph";
import { dfs, bfs } from "../AlgorithmsButton/GraphAlgorithms/GraphAlgorithms";
import resetGraph from "../ResetButton/ResetGraph/ResetGraph";

function AlgorithmStartButton() {
  const { dataStructure, algorithmParameters } = useContext(DsaContext);

  function handleClick() {
    let algorithmButton = document.getElementById("Algorithms").innerHTML;
    let algorithmDropdownButton =
      document.getElementsByClassName("dropdown-algorithm")[0];
    let dataStructureDropdown =
      document.getElementsByClassName("dropdown-content")[0];
    let warning = document.getElementsByClassName("warning")[0];
    if (
      algorithmDropdownButton.classList.contains("open") ||
      dataStructureDropdown.classList.contains("open")
    ) {
      algorithmDropdownButton.classList.remove("open");
      dataStructureDropdown.classList.remove("open");
    }
    if (!algorithmParameters.isRunning) {
      if (warning) {
        warning.remove();
      }

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
      if (dataStructure === "Tree") {
        resetTree(algorithmParameters);
        if (algorithmButton === "InsertTarget") {
          insert(algorithmParameters);
        }
        if (algorithmButton === "DeleteTarget") {
          deleteNode(algorithmParameters);
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
        }
      }

      if (dataStructure === "Choose Data Structure") {
        if (warning) {
          warning.remove();
          createWarning("Choose Data Structure");
        } else {
          createWarning("Choose Data Structure");
        }
      }
      if (
        algorithmButton === "Choose Algorithm" &&
        dataStructure !== "Choose Data Structure"
      ) {
        if (warning) {
          warning.remove();
          createWarning("Choose Algorithm");
        } else {
          createWarning("Choose Algorithm");
        }
      }
    } else {
      if (warning) {
        warning.remove();
        createWarning("Algorithm is running");
      } else {
        createWarning("Algorithm is running");
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
