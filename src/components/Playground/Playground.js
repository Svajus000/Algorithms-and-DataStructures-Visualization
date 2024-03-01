import Graph from "./Graph/Graph";
import Queue from "./Queue/Queue";
import FStack from "./Stack/Stack";
import HashMapA from "./HashMap/HashMap";
import { useContext } from "react";
import { DsaContext } from "../../App";

function Playground() {
  const { dataStructure } = useContext(DsaContext);
  if (dataStructure === "Array") {
    // return <Graph />;
  }
  if (dataStructure === "Queue") {
    return <Queue />;
  }
  if (dataStructure === "Stack") {
    return <FStack />;
  }
  if (dataStructure === "HashMap") {
    return <HashMapA />;
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
