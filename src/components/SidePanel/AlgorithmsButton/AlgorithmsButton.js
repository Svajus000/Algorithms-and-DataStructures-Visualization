import "./AlgorithmsButton.css";
import React, { useState, useContext } from "react";
import { DsaContext } from "../../../App";
import createWarning from "../Warning/warning";

const algorithms = {
  Queue: ["Enqueue", "Dequeue"],
  Stack: ["Push", "Pop"],
  HashTable: ["GetItem", "SetItem"],
  LinkedList: ["FindTarget", "InsertTarget", "DeleteTarget"],
  Tree: ["InsertTarget", "DeleteTarget"],
  Graph: ["Breath-First-Search", "Depth-First-Search"],
};

export default function AlgorithmsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { dataStructure, setDataStructure, algorithmParameters } =
    useContext(DsaContext);
  const [algorithm, setAlgorithm] = useState("Choose Algorithm");
  const toggleDropdown = (event) => {
    let warning = document.getElementsByClassName("warning")[0];
    if (!algorithmParameters.isRunning) {
      if (warning) {
        warning.remove();
      }
      setIsOpen(!isOpen);
      setAlgorithm(event.target.innerHTML);
      setDataStructure(document.getElementById("dataStructures")?.innerHTML);
    } else {
      if (warning) {
        warning.remove();
        createWarning("Algorithm is running");
      } else {
        createWarning("Algorithm is running");
      }
    }
  };
  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle sidepanel-button"
        id="Algorithms"
        onClick={toggleDropdown}
      >
        {algorithm}
      </button>
      <div className={`dropdown-algorithm ${isOpen ? "open" : ""} `}>
        {algorithms[dataStructure]?.map((algorithm) => (
          <button className="sidepanel-button" onClick={toggleDropdown}>
            {algorithm}
          </button>
        ))}
      </div>
    </div>
  );
}
