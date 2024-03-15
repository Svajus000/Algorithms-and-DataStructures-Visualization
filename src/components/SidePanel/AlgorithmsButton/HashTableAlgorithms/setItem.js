import { values } from "../../../Playground/HashTable/HashTable";
import createWarning from "../../Warning/warning";
import hashFunction from "./hashFunction";

function setItem(hashTable, algorithmParameters) {
  let order = algorithmParameters.hashTable.order;
  if (order < values.length && !algorithmParameters.isRunning) {
    algorithmParameters.isRunning = true;
    setItemAnimation(hashTable, algorithmParameters, order);
    algorithmParameters.hashTable.order++;
  } else if (order >= values.length) {
    createWarning("There are no more items left");
  }
}

function setItemAnimation(hashTable, algorithmParameters, order) {
  let computatedValue = hashFunction(values[order][0]);
  let hashElement = document.getElementsByClassName("hashFunction")[0];
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
    hashBoundaries.left - listElementBoundaries.left + 10
  }px,${hashBoundaries.top - listElementBoundaries.top + 55}px)`;
  setTimeout(() => {
    hashElement.style.animation = "shake-1 1s";
  }, 1000);
  let hashBound = hashValue.getBoundingClientRect();
  setTimeout(() => {
    key.style.transform = `translate(${hashBound.left - keyBoundaries.left}px,${
      hashBound.top - keyBoundaries.top
    }px)`;
    hashElement.style.animation = "none";
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

export default setItem;
