import "./Tree.css";

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this._insertNode(this.root, node);
    }
  }

  _insertNode(node, newNode) {
    if (node.value > newNode.value) {
      if (node.left === null) {
        node.left = newNode;
        newNode.parent = node;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        newNode.parent = node;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  find(value) {
    return this._findNode(this.root, value);
  }

  _findNode(current, value) {
    if (current === null) {
      console.log("Null");
      return null;
    }
    if (current.value === value) {
      return current;
    }
    if (current.value > value) {
      return this._findNode(current.left, value);
    } else if (current.value < value) {
      return this._findNode(current.right, value);
    }
  }

  deleteNode(value) {
    this._deletehelper(this.root, value);
  }

  _deletehelper(current, value) {
    if (current === null) {
      return null;
    }
    if (current.value > value) {
      current.left = this._deletehelper(current.left, value);
    } else if (current.value < value) {
      current.right = this._deletehelper(current.right, value);
    } else {
      if (current.right === null && current.left === null) {
        return null;
      } else if (current.left === null) {
        current = current.right;
      } else if (current.right === null) {
        current = current.left;
      } else {
        const subTree = this._minValue(current.right);
        current.value = subTree;
        current.right = this._deletehelper(current.right, subTree);
      }
    }
    return current;
  }

  _minValue(current) {
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
const binaryTree = new Tree();
binaryTree.insert(25);
binaryTree.insert(12);
binaryTree.insert(50);
binaryTree.insert(7);
binaryTree.insert(20);
binaryTree.insert(38);
binaryTree.insert(75);

function Target() {
  return (
    <form className="target-tree">
      <label>Target:</label>
      <input type="text" id="target-tree"></input>
    </form>
  );
}

function TreeNode({ layer, value }) {
  return (
    <div className={`nodeContainer ${layer}`}>
      <div className="node-tree">
        <div id={`${value}`} className="value">
          {value}
        </div>
      </div>
      <div className={`pointer-tree-left-${layer}`}>
        <div className="line-vertical-tree"></div>
        <div className="arrowHead-bottom-tree"></div>
      </div>
      <div className={`pointer-tree-right-${layer}`}>
        <div className="line-vertical-tree"></div>
        <div className="arrowHead-bottom-tree"></div>
      </div>
    </div>
  );
}

function TreeElement() {
  return (
    <div className="header-tree">
      <div className="layer">
        <TreeNode layer="layer1" value="25" />
      </div>
      <div className="layer">
        <TreeNode layer="layer2" value="12" />
        <TreeNode layer="layer2" value="50" />
      </div>
      <div className="layer">
        <TreeNode layer="layer3" value="7" />
        <TreeNode layer="layer3" value="20" />
        <TreeNode layer="layer3" value="38" />
        <TreeNode layer="layer3" value="75" />
      </div>
      <Target />
    </div>
  );
}

export { binaryTree, Tree };
export default TreeElement;
