import "./DataStructureDropdown.css";
import React, { useState, useContext } from "react";
import { DsaContext } from "../../../App.js";
import createWarning from "../Warning/warning.js";

const dataStuctures = [
  "Queue",
  "Stack",
  "HashTable",
  "LinkedList",
  "Tree",
  "Graph",
];

export default function DataStructureDropdown() {
  const { dataStructure, setDataStructure, algorithmParameters } =
    useContext(DsaContext);
  const [isOpen, setIsOpen] = useState(false);
  const algorithmsButton = document.getElementById("Algorithms");
  const toggleDropdown = (event) => {
    let warning = document.getElementsByClassName("warning")[0];
    if (!algorithmParameters.isRunning) {
      if (warning) {
        warning.remove();
      }
      setIsOpen(!isOpen);
      if (event.target.innerHTML !== dataStructure) {
        algorithmsButton.innerText = "Choose Algorithm";
      }
      setDataStructure(event.target.innerHTML);
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
