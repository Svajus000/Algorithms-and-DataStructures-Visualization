import "./App.css";
import Graph from "./components/Graph/Graph";
import SidePanel from "./components/SidePanel/SidePanel";
import { useState, createContext, useContext } from "react";

const DsaContext = createContext(null);

function Playground() {
  const { dataStructure } = useContext(DsaContext);
  if (dataStructure === "Graph") {
    return <Graph />;
  } else {
    return null;
  }
}

function App() {
  const [dataStructure, setDataStructure] = useState("Choose algorithm");
  return (
    <DsaContext.Provider value={{ dataStructure, setDataStructure }}>
      <div className="heading">
        <SidePanel />
        <Playground />
      </div>
    </DsaContext.Provider>
  );
}

export { DsaContext };
export default App;
