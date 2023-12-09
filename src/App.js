import "./App.css";
import Grid from "./components/Grid/Grid";
import SidePanel from "./components/SidePanel/SidePanel";

function Navigation() {
  return <div className="nav"></div>;
}

function Playground() {
  return <Grid />;
}

function App() {
  return (
    <div>
      <Navigation />
      <div className="heading">
        <SidePanel />
        <Playground />
      </div>
    </div>
  );
}

export default App;
