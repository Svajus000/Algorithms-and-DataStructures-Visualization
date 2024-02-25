import "./AlgorithmsButton.css";
import React, { useState, useContext } from "react";
import { DsaContext } from "../../../App";

const algorithms = {
  Array: [],
  Queue: [],
  Stack: ["Push", "Pop"],
  LinkedList: [],
  Trees: [],
  Graph: ["Breath-First-Search", "Depth-First-Search"],
};

export default function AlgorithmsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { dataStructure, setDataStructure } = useContext(DsaContext);
  const [algorithm, setAlgorithm] = useState("Algorithms");
  const toggleDropdown = (event) => {
    setIsOpen(!isOpen);
    setAlgorithm(event.target.innerHTML);
    setDataStructure(document.getElementById("dataStructures")?.innerHTML);
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
