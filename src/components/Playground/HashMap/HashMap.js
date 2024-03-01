import "./HashMap.css";

let values = ["hello", "end", "scissors", "world", "Drinks", "Pancakes", "Cup"];

function hashFunction(word) {
  let adress = 0;
  for (let i = 0; i < word.length; i++) {
    adress += word.charCodeAt(i);
  }
  adress = adress % values.length;
  return adress;
}

function HashMap() {
  return (
    <div className="hashMap">
      <thead>
        <tr>
          <th scope="col">Key</th>
          <th scope="col">Values</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className="hashValue 1">
            1
          </th>
          <td></td>
        </tr>
        <tr>
          <th scope="row" className="hashValue 2">
            2
          </th>
          <td></td>
        </tr>
        <tr>
          <th scope="row" className="hashValue 3">
            3
          </th>
          <td></td>
        </tr>
        <tr>
          <th scope="row" className="hashValue 4">
            4
          </th>
          <td></td>
        </tr>
        <tr>
          <th scope="row" className="hashValue 5">
            5
          </th>
          <td></td>
        </tr>
        <tr>
          <th scope="row" className="hashValue 6">
            6
          </th>
          <td></td>
        </tr>
        <tr>
          <th scope="row" className="hashValue 7">
            7
          </th>
          <td></td>
        </tr>
      </tbody>
    </div>
  );
}

function ValuesList() {
  let listValues = values.map((value, index) => {
    return (
      <li key={index} className={`listItem ${index}`}>
        {value}
      </li>
    );
  });
  return <ul>[{listValues}]</ul>;
}

function StartButton() {
  function handleClick() {
    let hashElement = document.getElementsByClassName("hashFunc")[0];
    let boundaries = hashElement.getBoundingClientRect();
    for (let i = 0; i < values.length; i++) {
      let listElement = document.getElementsByClassName(`listItem ${i}`)[0];
      let rect = listElement.getBoundingClientRect();
      setTimeout(() => {
        listElement.style.transform = `translate(${
          boundaries.left - rect.left
        }px,${boundaries.top - rect.top}px)`;
      }, 1000 * i);
      setTimeout(() => {
        listElement.innerHTML = hashFunction(values[i]);
      }, 1000 * i);

      let hashValue = document.getElementsByClassName(
        `hashValue ${hashFunction(values[i])}`
      )[0];
      console.log(hashValue);
      let hashBound = hashValue.getBoundingClientRect();
      setTimeout(() => {
        listElement.style.transform = `translate(${
          hashBound.left - rect.left
        }px,${hashBound.top - rect.top}px)`;
      }, 3000 * i);
    }
  }
  return (
    <button onClick={handleClick} className="startButton">
      Start
    </button>
  );
}

function HashMapA() {
  return (
    <div className="header">
      <StartButton />
      <ValuesList />
      <div className="hashFunc"></div>
      <HashMap />
    </div>
  );
}

export default HashMapA;
