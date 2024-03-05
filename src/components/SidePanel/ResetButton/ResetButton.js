import "./ResetButton.css";
import { DsaContext } from "../../../App";
import { useContext } from "react";
import resetGraph from "./ResetGraph/ResetGraph";
import resetStack from "./ResetStack/ResetStack";
import resetQueue from "./ResetQueue/ResetQueue";
import { stack } from "../../Playground/Stack/Stack";
import { queue } from "../../Playground/Queue/Queue";

function ResetButton() {
  const { dataStructure, algorithmParameters } = useContext(DsaContext);

  function handleClick() {
    if (!algorithmParameters.isRunning) {
      if (dataStructure === "Queue") {
        resetQueue(queue, algorithmParameters);
      }
      if (dataStructure === "Stack") {
        resetStack(stack, algorithmParameters);
      }
      if (dataStructure === "Graph") {
        resetGraph(algorithmParameters);
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
