function resetStack(stack, algorithmParameters) {
  algorithmParameters.stack.isInside = false;
  for (let i = 0; i < stack.items.length; i++) {
    let pileElement = document.getElementsByClassName(`pile ${i}`)[0];
    pileElement.style.transform = "translate(0rem, 0rem)";
    pileElement.style.transitionDuration = "0s";
    setTimeout(() => {
      pileElement.style.transitionDuration = "2s";
    }, 250);
  }
}

export default resetStack;
