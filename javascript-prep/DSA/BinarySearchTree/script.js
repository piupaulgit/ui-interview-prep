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
}

const BTS = new BinarySearchTree();
BTS.insert(6);
BTS.insert(7);
BTS.insert(10);
BTS.insert(5);
console.log(BTS.find(5));
// console.log(BTS);
