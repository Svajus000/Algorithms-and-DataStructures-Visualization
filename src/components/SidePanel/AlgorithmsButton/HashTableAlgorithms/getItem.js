import hashFunction from "./hashFunction";
import createWarning from "../../Warning/warning";

function getItem(hashTable, algorithmParameters) {
  let itemValue = document.querySelector("#item").value;
  console.log(itemValue);
  console.log(hashTable);
  let includes = false;
  for (let i = 0; i < hashTable.dataMap.length; i++) {
    const table = hashTable.dataMap[i];
    for (let x = 0; x < table.length; x++) {
      const element = table[x];
      includes = element.includes(itemValue);
      if (includes) {
        break;
      }
    }
    if (includes) {
      break;
    }
  }

  if (itemValue.length !== 0 && itemValue.length < 10 && includes) {
    algorithmParameters.isRunning = true;
    getItemAnimation(itemValue, algorithmParameters);
  } else if (itemValue.length === 0) {
    createWarning("Get Value field is empty");
  } else if (itemValue.length > 10) {
    createWarning("To many characters");
  } else if (!includes) {
    createWarning("Key isn't in storage");
  }
}

function getItemAnimation(itemValue, algorithmParameters) {
  let computatedValue = hashFunction(itemValue);
  let hashElement = document.getElementsByClassName("hashFunction")[0];
  let empty = document.getElementsByClassName("empty")[0];
  let hashValue = document.getElementsByClassName(`key ${computatedValue}`)[0];
  let behind = document.getElementsByClassName("behind")[0];
  let form = document.getElementById("form");

  let itemElement = document.createElement("div");
  itemElement.setAttribute("class", "getItem");
  itemElement.style.marginTop = "-1.2rem";
  itemElement.style.transitionDuration = "1s";
  itemElement.innerHTML = itemValue;
  behind.appendChild(itemElement);

  let key = document.createElement("div");
  key.setAttribute("class", "calculatedKey");
  key.innerHTML = computatedValue;
  empty.appendChild(key);

  let keyBoundaries = key.getBoundingClientRect();
  let hashBoundaries = hashElement.getBoundingClientRect();
  let itemElementBoundaries = itemElement.getBoundingClientRect();
  let hashBound = hashValue.getBoundingClientRect();
  let formBoundaries = form.getBoundingClientRect();

  itemElement.style.transform = `translate(${
    hashBoundaries.left - itemElementBoundaries.left + 10
  }px,${hashBoundaries.top - itemElementBoundaries.top + 55}px)`;

  if (algorithmParameters.hashTable.getItem) {
    let keyElementParent = algorithmParameters.hashTable.getItem.parentNode;
    keyElementParent.removeChild(algorithmParameters.hashTable.getItem);
    algorithmParameters.hashTable.getItem = null;
  }
  setTimeout(() => {
    hashElement.style.animation = "shake-1 1s";
  }, 1000);
  setTimeout(() => {
    hashElement.style.animation = "none";
    key.style.transform = `translate(${hashBound.left - keyBoundaries.left}px,${
      hashBound.top - keyBoundaries.top
    }px)`;
  }, 2000);

  setTimeout(() => {
    empty.removeChild(key);
    behind.removeChild(itemElement);
    let k = document.getElementsByClassName("k");
    for (let i = 0; i < k.length; i++) {
      const element = k[i];
      if (element.innerHTML === itemValue) {
        let keyElement = document.createElement("div");
        keyElement.setAttribute("class", "getItem");
        keyElement.style.marginTop = "-1.55rem";
        keyElement.innerHTML = element.parentNode.lastElementChild.textContent;
        element.parentNode.lastElementChild.appendChild(keyElement);
        let keyElementBoundaries = keyElement.getBoundingClientRect();
        keyElement.style.transform = `translate(${
          formBoundaries.left - keyElementBoundaries.left + 100
        }px,${formBoundaries.top - keyElementBoundaries.top}px)`;
        algorithmParameters.hashTable.getItem = keyElement;
      }
    }

    algorithmParameters.isRunning = false;
  }, 4000);
}

export default getItem;
