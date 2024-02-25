import "./Stack.css";

class StackC {
  constructor() {
    this.items = [];
  }
}

let stack = new StackC();

stack.items.push(0);
stack.items.push(1);
stack.items.push(2);

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function ItemsList() {
  let items = stack.items.map((item) => {
    return <Pile id={item} key={item} />;
  });
  return <div>{items}</div>;
}

function Stack() {
  return <div className="stack"></div>;
}

// Find different approach on naming pile element classes
// ------------------------------------------------------------
function Pile({ id }) {
  return (
    <div
      className={`pile ${id}`}
      style={{ backgroundColor: randomRGB() }}
    ></div>
  );
}

function FStack() {
  return (
    <div className="header">
      <Stack />
      <ItemsList />
    </div>
  );
}

export default FStack;
export { stack };
