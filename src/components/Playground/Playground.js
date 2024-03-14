import "./Playground.css";
import Graph from "./Graph/Graph";
import Queue from "./Queue/Queue";
import FStack from "./Stack/Stack";
import HashMapA from "./HashTable/HashTable";
import ALinkedList from "./LinkedList/LinkedList";
import TreeElement from "./Tree/Tree";
import { useContext } from "react";
import { DsaContext } from "../../App";

function Playground() {
  const { dataStructure, algorithmParameters } = useContext(DsaContext);
  let dataStructureComponent = null;

  if (dataStructure === "Queue") {
    dataStructureComponent = (
      <Queue algorithmParameters={algorithmParameters} />
    );
  }
  if (dataStructure === "Stack") {
    dataStructureComponent = <FStack />;
  }
  if (dataStructure === "HashTable") {
    dataStructureComponent = <HashMapA />;
  }
  if (dataStructure === "LinkedList") {
    dataStructureComponent = <ALinkedList />;
  }
  if (dataStructure === "Tree") {
    dataStructureComponent = <TreeElement />;
  }
  if (dataStructure === "Graph") {
    dataStructureComponent = <Graph />;
  }
  if (dataStructureComponent === null) {
    dataStructureComponent = (
      <h1 className="heading-playground">Choose Data Structure</h1>
    );
  }
  return <div className="playground">{dataStructureComponent}</div>;
}

export default Playground;
