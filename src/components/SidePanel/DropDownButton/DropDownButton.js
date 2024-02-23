import "./DropDownButton.css";
import React, { useState } from "react";

const algorithms = {
  Array: [],
  Queue: [],
  Stack: [],
  LinkedList: [],
  Trees: [],
  Graphs: ["Breath-First-Search", "Depth-First-Search"],
};

export default function AlgorithmButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataStructure, setDataStructure] = useState("");
  const [algorithm, setAlgorithm] = useState("Algorithms");
  const toggleDropdown = (event) => {
    setIsOpen(!isOpen);
    setAlgorithm(event.target.innerHTML);
    setDataStructure(document.getElementById("dataStructures")?.innerHTML);
    console.log(dataStructure);
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
