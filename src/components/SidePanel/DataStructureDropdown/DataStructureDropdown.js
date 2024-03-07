import React, { useState, useContext } from "react";
import "./DataStructureDropdown.css";
import { DsaContext } from "../../../App.js";

const dataStuctures = [
  "Queue",
  "Stack",
  "HashTable",
  "LinkedList",
  "Trees",
  "Graph",
];

export default function DataStructureDropdown() {
  const { dataStructure, setDataStructure, algorithmParameters } =
    useContext(DsaContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (event) => {
    if (!algorithmParameters.isRunning) {
      setIsOpen(!isOpen);
      setDataStructure(event.target.innerHTML);
    }
  };
  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle sidepanel-button"
        id="dataStructures"
        onClick={toggleDropdown}
      >
        {dataStructure}
      </button>
      <div className={`dropdown-content ${isOpen ? "open" : ""} `}>
        {dataStuctures.map((dataStructure) => (
          <button className="sidepanel-button" onClick={toggleDropdown}>
            {dataStructure}
          </button>
        ))}
      </div>
    </div>
  );
}
