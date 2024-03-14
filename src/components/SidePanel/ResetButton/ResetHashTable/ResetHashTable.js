import { values } from "../../../Playground/HashTable/HashTable";

function resetHashTable(hashTable, algorithmParameters) {
  const empty = document.getElementsByClassName("empty")[0];
  console.log(empty.childNodes);

  for (let i = 0; i < hashTable.dataMap.length; i++) {
    hashTable.dataMap[i] = [];
  }
  for (let i = 0; i < values.length; i++) {
    const element = document.getElementsByClassName(`listItem ${i}`)[0];
    const emptyElementChilds = empty.childNodes;
    element.style.transform = `translate(0rem,0rem)`;
    element.style.transitionDuration = "0s";
    for (let i = 0; i < empty.childNodes.length; i++) {
      empty.removeChild(emptyElementChilds[i]);
    }
    setTimeout(() => {
      element.style.transitionDuration = "1s";
    });
  }
  if (algorithmParameters.hashTable.getItem !== null) {
    let keyElementParent = algorithmParameters.hashTable.getItem.parentNode;
    keyElementParent.removeChild(algorithmParameters.hashTable.getItem);
  }
  algorithmParameters.hashTable.getItem = null;
  algorithmParameters.hashTable.order = 0;
}

export default resetHashTable;
