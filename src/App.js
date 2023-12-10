import "./App.css";
import Grid from "./components/Grid/Grid";
import SidePanel from "./components/SidePanel/SidePanel";

function Playground() {
  return <Grid />;
}

function App() {
  return (
    <div className="heading">
      <SidePanel />
      <Playground />
    </div>
  );
}

export default App;
