import createWarning from "../../Warning/warning";

function pushStack(stack, algorithmParameters) {
  if (!algorithmParameters.stack.isInside) {
    algorithmParameters.isRunning = true;
    for (let i = 0; i < stack.items.length; i++) {
      let pileElement = document.getElementsByClassName(`pile ${i}`)[0];
      setTimeout(pushAnimation, 2000 * i, pileElement, i, stack);
    }
    setTimeout(() => {
      algorithmParameters.isRunning = false;
      algorithmParameters.stack.isInside = true;
    }, 4000 * stack.items.length - 1 - 2000);
  } else {
    createWarning("There is nothing to push");
  }
}

function pushAnimation(element, elementNumber) {
  let directionUp = 24 + elementNumber * 3.2;
  let directionDown = 6.4 + elementNumber * -6.4;
  element.style.transform = `translateY(-${directionUp}rem)`;
  setTimeout(() => {
    element.style.transform = `translate(24rem, -${directionUp}rem)`;
  }, 2000);
  setTimeout(() => {
    element.style.transform = `translate(24rem, ${directionDown}rem)`;
  }, 4000);
}

export default pushStack;
