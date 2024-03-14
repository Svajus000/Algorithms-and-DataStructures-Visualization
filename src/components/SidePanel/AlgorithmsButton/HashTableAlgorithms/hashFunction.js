import { values } from "../../../Playground/HashTable/HashTable";
function hashFunction(word) {
  let adress = 0;
  for (let i = 0; i < word.length; i++) {
    adress += word.charCodeAt(i);
  }
  adress = adress % values.length;
  return adress;
}

export default hashFunction;
