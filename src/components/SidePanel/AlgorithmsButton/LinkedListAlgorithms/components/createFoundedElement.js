function createFounded(algorithmParameters) {
  let formElement = document.getElementsByClassName("target")[0];
  let formElementBoundaries = formElement.getBoundingClientRect();
  let foundedTargetParent = document.getElementById(
    algorithmParameters.linkedList.current.value
  ).parentElement;

  let foundedTarget = document.createElement("div");
  foundedTarget.classList.add("founded");
  foundedTarget.innerHTML = algorithmParameters.linkedList.current.value;
  foundedTargetParent.appendChild(foundedTarget);
  let foundedTargetBoundaries = foundedTarget.getBoundingClientRect();
  console.log(foundedTargetBoundaries, formElementBoundaries);
  setTimeout(() => {
    console.log(foundedTargetBoundaries.left, formElementBoundaries.left);
    foundedTarget.style.transitionDuration = "1s";
    foundedTarget.style.transform = `translate(${
      formElementBoundaries.left - foundedTargetBoundaries.left + 70
    }px, ${formElementBoundaries.top - foundedTargetBoundaries.top + 14}px)`;
  }, 500);
  setTimeout(() => {
    algorithmParameters.isRunning = false;
  }, 1500);
}

export default createFounded;
