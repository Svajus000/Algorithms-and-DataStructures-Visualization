import DropDownButton from "./DropDownButton/DropDownButton";
import AlgorithmStartButton from "./AlgorithmStartButton/AlgorithmStartButton";
import ClearButton from "./ClearButton/ClearButton";
import "./SidePanel.css";
import React, { useState, useCallback } from "react";

export default function SidePanel() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleButtonClick = useCallback((option) => {
    setSelectedOption(option);
  }, []);
  return (
    <div className="sidepanel">
      <div classname="sidepanel-inner">
        <div className="sidepanel-header">
          <p className="sidepanel-header-heading">
            <b>Data Structures & Algorithms</b>
          </p>
        </div>

        <div className="sidepanel-menu">
          <button
            id="dataStructures"
            className="sidepanel-button"
            type="button"
          >
            {selectedOption || "- - Select Data Structure - -"}
          </button>
          {/* <ul className="">
            <li>
              <button onClick={() => handleButtonClick("Array")} className="">
                Array
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick("Queue")} className="">
                Queue
              </button>
            </li>
            <li>
              <li>
                <button onClick={() => handleButtonClick("Stack")} className="">
                  Stack
                </button>
              </li>
              <button
                onClick={() => handleButtonClick("Linked List")}
                className=""
              >
                Linked List
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick("Trees")} className="">
                Trees
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick("Graphs")} className="">
                Graphs
              </button>
            </li>
          </ul> */}
          <ClearButton />
          <DropDownButton className="sidepanel-button" />
          <AlgorithmStartButton className="sidepanel-button" />
        </div>
      </div>
    </div>
  );
}
