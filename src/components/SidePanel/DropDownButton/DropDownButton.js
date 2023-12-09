import "./DropDownButton.css";

export default function DropDownButton() {
  function handleButtonClick(event) {
    let dropDownButton = document.getElementById("algorithm");
    dropDownButton.innerHTML = event.target.innerHTML;
    let chosenAlgorithm = event.target.innerHTML;
    return chosenAlgorithm;
  }
  return (
    <div className="dropdown">
      <button
        id="algorithm"
        className="btn dropdown-toggle se"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        - - Select Algorithm - -
      </button>
      <ul className="dropdown-menu">
        <li>
          <button onClick={handleButtonClick} className="dropdown-item">
            Breath-First-Search
          </button>
        </li>
        <li>
          <button onClick={handleButtonClick} className="dropdown-item">
            Depth-First-Search
          </button>
        </li>
      </ul>
    </div>
  );
}
