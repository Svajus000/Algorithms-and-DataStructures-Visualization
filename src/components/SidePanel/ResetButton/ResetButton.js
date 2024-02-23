import "./ResetButton.css";
import { DsaContext } from "../../../App";
import { useContext } from "react";
import resetGraph from "./ResetGraph/ResetGraph";

function ResetButton() {
  const { dataStructure } = useContext(DsaContext);

  function handleClick() {
    if (dataStructure === "Graph") {
      resetGraph();
    }
  }
  return (
    <button className="sidepanel-button" onClick={handleClick}>
      Reset
    </button>
  );
}

export default ResetButton;