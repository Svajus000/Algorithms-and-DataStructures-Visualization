import React, { useState, useContext } from "react";
import "./DataStructureDropdown.css";
import { DsaContext } from "../../../App.js";

const dataStuctures = [
  "Array",
  "Queue",
  "Stack",
  "HashMap",
  "LinkedList",
  "Trees",
  "Graph",
];

export default function DataStructureDropdown() {
  const { dataStructure, setDataStructure } = useContext(DsaContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event) => {
    setIsOpen(!isOpen);
    setDataStructure(event.target.innerHTML);
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
