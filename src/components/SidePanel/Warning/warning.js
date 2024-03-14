export default function createWarning(message) {
  let sidepanel = document.getElementsByClassName("sidepanel-inner")[0];
  let warningElement = document.createElement("div");

  warningElement.classList.add("warning");
  warningElement.innerHTML = `<span>&#9888;</span> ${message}`;
  sidepanel.appendChild(warningElement);
}
