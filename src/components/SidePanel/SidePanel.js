import DropDownButton from "./DropDownButton/DropDownButton";
import ClearButton from "./ClearButton/ClearButton";
import AlgorithmStartButton from "./AlgorithmStartButton/AlgorithmStartButton";
import "./SidePanel.css";
import DataStructureDropdown from "./DataStructureDropdown/DataStructureDropdown";

export default function SidePanel() {
  return (
    <div className="sidepanel">
      <div className="sidepanel-inner">
        <div className="sidepanel-header">
          <p className="sidepanel-header-heading">
            <b>Data Structures & Algorithms</b>
          </p>
        </div>

        <DataStructureDropdown />
        <ClearButton />
        <DropDownButton />
        <AlgorithmStartButton />
      </div>
    </div>
  );
}
