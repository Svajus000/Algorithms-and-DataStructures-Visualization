import { values } from "../../../Playground/HashTable/HashTable";

function setItem(hashTable, algorithmParameters) {
  let order = algorithmParameters.hashTable.order;
  if (order < values.length && !algorithmParameters.isRunning) {
    algorithmParameters.isRunning = true;
    setItemAnimation(hashTable, algorithmParameters, order);
    algorithmParameters.hashTable.order++;
  }
}

function setItemAnimation(hashTable, algorithmParameters, order) {
  let computatedValue = hashFunction(values[order][0]);
  let hashElement = document.getElementsByClassName("hashFunc")[0];
  let empty = document.getElementsByClassName("empty")[0];
  let listElement = document.getElementsByClassName(`listItem ${order}`)[0];
  let valueElement = document.getElementsByClassName(
    `value ${computatedValue}`
  )[0];
  let hashValue = document.getElementsByClassName(`key ${computatedValue}`)[0];

  let hashBoundaries = hashElement.getBoundingClientRect();
  let listElementBoundaries = listElement.getBoundingClientRect();
  let valueElementBoundaries = valueElement.getBoundingClientRect();

  let key = document.createElement("div");
  key.setAttribute("class", "calculatedKey");
  key.innerHTML = computatedValue;
  empty.appendChild(key);
  let keyBoundaries = key.getBoundingClientRect();

  listElement.style.transform = `translate(${
    hashBoundaries.left - listElementBoundaries.left
  }px,${hashBoundaries.top - listElementBoundaries.top + 55}px)`;

  let hashBound = hashValue.getBoundingClientRect();
  setTimeout(() => {
    key.style.transform = `translate(${hashBound.left - keyBoundaries.left}px,${
      hashBound.top - keyBoundaries.top
    }px)`;
  }, 2000);
  setTimeout(() => {
    listElement.style.transform = `translate(${
      valueElementBoundaries.left - listElementBoundaries.left + 5
    }px,${
      valueElementBoundaries.top -
      listElementBoundaries.top +
      2 +
      hashTable.dataMap[computatedValue].length * 24
    }px`;
    hashTable.dataMap[computatedValue].push(values[order]);
  }, 3000);
  setTimeout(() => {
    algorithmParameters.isRunning = false;
  }, 4000);
}

function getItem(hashTable, algorithmParameters) {
  let itemValue = document.querySelector("#item").value;
  if (itemValue.length !== 0) {
    algorithmParameters.isRunning = true;
    getItemAnimation(itemValue, algorithmParameters);
  }
}

function getItemAnimation(itemValue, algorithmParameters) {
  let computatedValue = hashFunction(itemValue);
  let hashElement = document.getElementsByClassName("hashFunc")[0];
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
    hashBoundaries.left - itemElementBoundaries.left
  }px,${hashBoundaries.top - itemElementBoundaries.top + 55}px)`;

  if (algorithmParameters.hashTable.getItem) {
    let keyElementParent = algorithmParameters.hashTable.getItem.parentNode;
    keyElementParent.removeChild(algorithmParameters.hashTable.getItem);
    algorithmParameters.hashTable.getItem = null;
  }

  setTimeout(() => {
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

function hashFunction(word) {
  let adress = 0;
  for (let i = 0; i < word.length; i++) {
    adress += word.charCodeAt(i);
  }
  adress = adress % values.length;
  return adress;
}

export { setItem, getItem };
