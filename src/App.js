import "./App.css";
import Playground from "./components/Playground/Playground";
import SidePanel from "./components/SidePanel/SidePanel";
import { useState, createContext } from "react";

const DsaContext = createContext(null);

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
