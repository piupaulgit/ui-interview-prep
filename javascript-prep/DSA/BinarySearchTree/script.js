class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return this;
    }

    let current = this.root;

    if (current.value === value) {
      return this;
    }

    let added = false;

    while (!added) {
      if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          added = true;
          return this;
        } else {
          current = current.right;
        }
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          added = true;
          return this;
        } else {
          current = current.left;
        }
      }
    }
  }

  find(value) {
    let current = this.root;

    if (current.value === value) {
      return current;
    }

    let found = false;

    while (current && !found) {
      if (current.value === value) {
        found = true;
        return current;
      }

      if (value > current.value) {
        current = current.right;
      }
      if (value < current.value) {
        current = current.left;
      }
    }
  }

  BFS() {
    let result = [];
    let queue = [this.root];

    while (queue.length) {
      let node = queue.shift();
      result.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }

  DFSPreOrder() {
    let result = [];

    function traverse(node) {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return result;
  }

  DFSPostOrder() {
    let result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    }

    traverse(this.root);
    return result;
  }

  DFSInOrder() {
    let result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return result;
  }

  findKthSmallNumber(k) {
    let result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.value);
    }

    traverse(this.root);
    return result[k - 1];
  }
}

const BTS = new BinarySearchTree();
BTS.insert(5);
BTS.insert(3);
BTS.insert(6);
BTS.insert(4);
BTS.insert(2);
BTS.insert(1);
console.log(BTS.findKthSmallNumber(3));
// console.log(BTS.BFS());
// console.log(BTS.DFSPreOrder());
// console.log(BTS.DFSPostOrder());
// console.log(BTS.DFSInOrder());
console.log(BTS);
