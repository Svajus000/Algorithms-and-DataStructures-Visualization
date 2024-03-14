import "./HashTable.css";

let values = [
  ["hello", 2000],
  ["end", 1680],
  ["scissors", 2103],
  ["world", 1020],
  ["Drinks", 1460],
  ["Pancakes", 1201],
  ["Cup", 1600],
];

class HashTable {
  constructor(size = 7) {
    this.dataMap = Array.from({ length: size }, () => []);
  }
}

const hashTable = new HashTable();

function Key({ k }) {
  return <div className="k">{k}</div>;
}

function Value({ v }) {
  return <div className="v">{v}</div>;
}

function HashMap() {
  for (let i = 0; i < hashTable.dataMap.length; i++) {
    hashTable.dataMap[i] = [];
  }
  return (
    <div className="hashMap">
      <thead>
        <tr>
          <th scope="col">Values</th>
          <th scope="col">Keys</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="value 0"></td>
          <th scope="row" className="hashValue 0">
            <div className="key 0">0</div>
          </th>
        </tr>
        <tr>
          <td className="value 1"></td>
          <th scope="row" className="hashValue 1">
            <div className="key 1">1</div>
          </th>
        </tr>
        <tr>
          <td className="value 2"></td>
          <th scope="row" className="hashValue 2">
            <div className="key 2">2</div>
          </th>
        </tr>
        <tr>
          <td className="value 3"></td>
          <th scope="row" className="hashValue 3">
            <div className="key 3">3</div>
          </th>
        </tr>
        <tr>
          <td className="value 4"></td>
          <th scope="row" className="hashValue 4">
            <div className="key 4">4</div>
          </th>
        </tr>
        <tr>
          <td className="value 5"></td>
          <th scope="row" className="hashValue 5">
            <div className="key 5">5</div>
          </th>
        </tr>
        <tr>
          <td className="value 6"></td>
          <th scope="row" className="hashValue 6">
            <div className="key 6">6</div>
          </th>
        </tr>
      </tbody>
    </div>
  );
}

function ValuesList() {
  let listValues = values.map((value, index) => {
    let k = value[0];
    let v = value[1];
    return (
      <li key={index} className={`listItem ${index}`}>
        [
        <Key k={k} />
        ,
        <Value v={v} />]
      </li>
    );
  });
  return <ul className="valuesList">[{listValues}]</ul>;
}

function HashMapA() {
  return (
    <div className="header-hashTable">
      <div className="hashTable">
        <ValuesList />
        <div className="hashContainer">
          <p>Hash Function</p>
          <div className="hashFunction"></div>
        </div>
        <div className="empty"></div>
        <HashMap />
      </div>
      <div>
        <div id="form" action="">
          <label for="item">Get Value:</label>
          <input type="text" id="item" name="item"></input>
        </div>
        <div className="behind"></div>
      </div>
    </div>
  );
}

export { values, hashTable };
export default HashMapA;
