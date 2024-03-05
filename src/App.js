import "./App.css";
import Playground from "./components/Playground/Playground";
import SidePanel from "./components/SidePanel/SidePanel";
import Instructions from "./components/Instructions/Instructions";
import { useState, createContext } from "react";

const DsaContext = createContext(null);

function App() {
  const algorithmParameters = {
    isRunning: false,
    state: false,
    graph: {
      speed: 15,
    },
    stack: {
      isInside: false,
    },
    queue: {
      order: 0,
      lastElement: null,
      enqueue: null,
    },
  };
  const [dataStructure, setDataStructure] = useState("Choose algorithm");
  return (
    <DsaContext.Provider
      value={{
        dataStructure,
        setDataStructure,
        algorithmParameters,
      }}
    >
      <div className="heading">
        <SidePanel />
        <Playground />
        <Instructions />
      </div>
    </DsaContext.Provider>
  );
}

export { DsaContext };
export default App;
