import "./AlgorithmsButton.css";
import React, { useState, useContext } from "react";
import { DsaContext } from "../../../App";

const algorithms = {
  Queue: ["Enqueue", "Dequeue"],
  Stack: ["Push", "Pop"],
  HashTable: ["GetItem", "SetItem"],
  LinkedList: ["FindTarget", "InsertTarget", "DeleteTarget"],
  Trees: [],
  Graph: ["Breath-First-Search", "Depth-First-Search"],
};

export default function AlgorithmsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { dataStructure, setDataStructure, algorithmParameters } =
    useContext(DsaContext);
  const [algorithm, setAlgorithm] = useState("Algorithms");
  const toggleDropdown = (event) => {
    if (!algorithmParameters.isRunning) {
      setIsOpen(!isOpen);
      setAlgorithm(event.target.innerHTML);
      setDataStructure(document.getElementById("dataStructures")?.innerHTML);
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
