import DropDownButton from "./DropDownButton/DropDownButton";
import AlgorithmStartButton from "./AlgorithmStartButton/AlgorithmStartButton";
import ClearButton from "./ClearButton/ClearButton";
// import DataStructuresButton from "./DataStructuresButton/DataStructuresButton";
import "./SidePanel.css";
import "./DataStructuresButton.css";
import React, { useState, useCallback } from "react";

export default function SidePanel() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleButtonClick = useCallback((option) => {
    setSelectedOption(option);
  }, []);
  return (
    <div className="sidepanel">
      <h2>Data Structures & Algorithms</h2>
      <div>
        <div className="dataStructureDropDown">
          <button
            id="dataStructures"
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedOption || "- - Select Data Structure - -"}
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                onClick={() => handleButtonClick("Array")}
                className="dropdown-item"
              >
                Array
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick("Queue")}
                className="dropdown-item"
              >
                Queue
              </button>
            </li>
            <li>
              <li>
                <button
                  onClick={() => handleButtonClick("Stack")}
                  className="dropdown-item"
                >
                  Stack
                </button>
              </li>
              <button
                onClick={() => handleButtonClick("Linked List")}
                className="dropdown-item"
              >
                Linked List
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick("Trees")}
                className="dropdown-item"
              >
                Trees
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick("Graphs")}
                className="dropdown-item"
              >
                Graphs
              </button>
            </li>
          </ul>
        </div>
      </div>
      {selectedOption === "Graphs" ? (
        <div>
          <ClearButton />
          <DropDownButton />
          <AlgorithmStartButton />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
