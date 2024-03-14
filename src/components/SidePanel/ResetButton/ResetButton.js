import { DsaContext } from "../../../App";
import { useContext } from "react";
import { stack } from "../../Playground/Stack/Stack";
import { queue } from "../../Playground/Queue/Queue";
import { hashTable } from "../../Playground/HashTable/HashTable";
import { linkedList, Node } from "../../Playground/LinkedList/LinkedList";
import resetGraph from "./ResetGraph/ResetGraph";
import resetStack from "./ResetStack/ResetStack";
import resetQueue from "./ResetQueue/ResetQueue";
import resetHashTable from "./ResetHashTable/ResetHashTable";
import resetLinkedList from "./ResetLinkedList/ResetLinkedList";
import resetTree from "./ResetTree/ResetTree";
import createWarning from "../Warning/warning";

function ResetButton() {
  const { dataStructure, algorithmParameters } = useContext(DsaContext);

  function handleClick() {
    let warning = document.getElementsByClassName("warning")[0];
    if (!algorithmParameters.isRunning) {
      if (warning) {
        warning.remove();
      }
      if (dataStructure === "HashTable") {
        resetHashTable(hashTable, algorithmParameters);
      }
      if (dataStructure === "Queue") {
        resetQueue(queue, algorithmParameters);
      }
      if (dataStructure === "Stack") {
        resetStack(stack, algorithmParameters);
      }
      if (dataStructure === "LinkedList") {
        resetLinkedList(linkedList, Node, algorithmParameters);
      }
      if (dataStructure === "Trees") {
        resetTree(algorithmParameters);
      }
      if (dataStructure === "Graph") {
        resetGraph(algorithmParameters);
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
      Reset
    </button>
  );
}

export default ResetButton;
