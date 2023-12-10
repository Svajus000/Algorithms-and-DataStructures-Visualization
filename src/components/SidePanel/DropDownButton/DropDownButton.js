import "./DropDownButton.css";

export default function DropDownButton() {
  function handleButtonClick(event) {
    let dropDownButton = document.getElementById("algorithm");
    dropDownButton.innerHTML = event.target.innerHTML;
    let chosenAlgorithm = event.target.innerHTML;
    return chosenAlgorithm;
  }
  return (
    <button className="sidepanel-button" id="algorithm" type="button">
      - - Select Algorithm - -
    </button>
    /* <ul className="dropdown-menu">
        <li>
          <button onClick={handleButtonClick} className="">
            Breath-First-Search
          </button>
        </li>
        <li>
          <button onClick={handleButtonClick} className="">
            Depth-First-Search
          </button>
        </li>
      </ul> */
  );
}
