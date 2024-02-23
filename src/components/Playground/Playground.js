import Graph from "./Graph/Graph";
import { useContext } from "react";
import { DsaContext } from "../../App";

function Playground() {
  const { dataStructure } = useContext(DsaContext);
  if (dataStructure === "Array") {
    // return <Graph />;
  }
  if (dataStructure === "Queue") {
    // return <Graph />;
  }
  if (dataStructure === "Stack") {
    // return <Graph />;
  }
  if (dataStructure === "HashMap") {
    // return <Graph />;
  }
  if (dataStructure === "LinkedList") {
    // return <Graph />;
  }
  if (dataStructure === "Tree") {
    // return <Graph />;
  }
  if (dataStructure === "Graph") {
    return <Graph />;
  } else {
    return null;
  }
}

export default Playground;
