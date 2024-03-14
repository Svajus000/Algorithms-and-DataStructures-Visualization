function popStack(stack, algorithmParameters) {
  if (algorithmParameters.stack.isInside) {
    algorithmParameters.isRunning = true;
    for (let i = 0; i < stack.items.length; i++) {
      let pileElement = document.getElementsByClassName(`pile ${i}`)[0];
      setTimeout(
        popAnimation,
        2000 * (stack.items.length - 1 - i),
        pileElement,
        i
      );
    }
    setTimeout(() => {
      algorithmParameters.isRunning = false;
      algorithmParameters.stack.isInside = false;
    }, 4000 * stack.items.length - 1);
  } else {
    let sidepanel = document.getElementsByClassName("sidepanel-inner")[0];
    let warningElement = document.createElement("div");
    warningElement.classList.add("warning");
    warningElement.innerHTML = "You can't pop an empty stack";
    sidepanel.appendChild(warningElement);
  }
}

function popAnimation(element, elementNumber) {
  let directionUp = 24 + elementNumber * 3.2;
  element.style.transform = `translate(24rem, -${directionUp}rem)`;
  setTimeout(() => {
    element.style.transform = `translateY(-${directionUp}rem)`;
  }, 2000);
  setTimeout(() => {
    element.style.transform = `translate(0rem, 0rem)`;
  }, 4000);
}

export default popStack;
