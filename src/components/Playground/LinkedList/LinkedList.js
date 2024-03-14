import "./LinkedList.css";

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let linkedListValues = [];

const node1 = new Node(1);
const node2 = new Node(32);
const node3 = new Node(18);
const node4 = new Node(13);
const node5 = new Node(25);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const linkedList = new LinkedList(node1);

function createLinkedListValues() {
  let current = linkedList.head;
  while (current) {
    linkedListValues.push(current.value);
    current = current.next;
  }
}
createLinkedListValues();

function LinkList() {
  const listValues = linkedListValues.map((value) => (
    <div className="flex-container">
      <div className="node-linkedList">
        <div key={`${value}`} className="value" id={`${value}`}>
          {value}
        </div>
      </div>
      <Pointer />
    </div>
  ));
  return (
    <div className="dsa-linkedList">
      <div className="lList">
        <Head />
        <ul className="linkedList">{listValues}</ul>
      </div>
    </div>
  );
}

function Pointer() {
  return (
    <div className="pointer">
      <div className="line-horizontal"></div>
      <div className="arrowHead-right"></div>
    </div>
  );
}

function Head() {
  return (
    <div id="head">
      <p>Head</p>
      <div className="line-vertical"></div>
      <div className="arrowHead-bottom"></div>
    </div>
  );
}

function Target() {
  return (
    <form className="target">
      <label>Target:</label>
      <input type="text" id="target"></input>
    </form>
  );
}

function TargetIndex() {
  return (
    <form className="targetIndex">
      <label>Target Index:</label>
      <input type="text" id="targetIndex"></input>
    </form>
  );
}

export { linkedList, Node, linkedListValues };
export default function ALinkedList() {
  return (
    <div className="header-linkedList">
      <LinkList />
      <Target />
      <TargetIndex />
    </div>
  );
}
