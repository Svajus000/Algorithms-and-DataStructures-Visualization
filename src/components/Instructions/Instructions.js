import "./Instructions.css";
import { useContext } from "react";
import { DsaContext } from "../../App";

function Instructions() {
  const { dataStructure } = useContext(DsaContext);
  let note = null;
  if (dataStructure === "LinkedList") {
    note = (
      <div className="instruction">
        <p className="note">
          Note: <br></br>FindTarget requires Target without TargetIndex.
          <br></br>
          InsertTarget requires both Target and TargetIndex <br></br>
          DeleteTarget requires only TargetIndex
        </p>
      </div>
    );
  }
  if (dataStructure === "HashTable") {
    note = (
      <div className="instruction">
        <p className="note">
          Note: <br></br>Items are storage with key-value pairs in order to get
          Value you have to:
          <br></br>
          1. SetItem atleast 1 Item <br></br>
          2. Write storaged item key to get its value
        </p>
      </div>
    );
  }
  return (
    <div className="instructions">
      <div className="instructions-inner">
        <div className="instructions-header">
          <p className="instructions-header-heading">Instructions</p>
        </div>
        <div className="introduction">
          <p className="text">
            Follow the instruction to understand how to use Data Structures and
            algorithms visualizer. Order matters.
          </p>
        </div>
        <div className="instruction">
          <p className="text">1. Choose data structure that you want to use</p>
        </div>
        <div className="instruction">
          <p className="text">2. Choose algorithm that you want to use</p>
        </div>
        <div className="instruction">
          <p className="text">3. Press Start Algorithm</p>
        </div>
        <div className="instruction">
          <p className="text">
            4. Reset Button restores data structures state to its initial state
          </p>
        </div>
        <div className="instruction">
          <p className="text">
            5. If an algorithm is running other actions won't work, until the
            algorithm hasn't finished
          </p>
        </div>
        {note}
      </div>
    </div>
  );
}

export default Instructions;
