class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentTail = this.tail;
      this.tail = newNode;
      currentTail.next = this.tail;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      let secondLastNode;
      while (currentNode.next) {
        secondLastNode = currentNode;
        currentNode = currentNode.next;
      }

      secondLastNode.next = null;
      this.tail = secondLastNode;
    }

    this.length--;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      this.head = newHead;
    }

    this.length--;
    this.this;
  }

  unShift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(position) {
    if (position < 0 || position > this.length) {
      return undefined;
    }
    let count = 0;
    let node = this.head;
    while (count !== position) {
      node = node.next;
      count++;
    }
    return node;
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(4);
singlyLinkedList.push(6);
singlyLinkedList.push(5);

// singlyLinkedList.pop();
// singlyLinkedList.pop();
// singlyLinkedList.pop();

// singlyLinkedList.shift();
// singlyLinkedList.shift();
// singlyLinkedList.shift();

// singlyLinkedList.unShift(1);
// singlyLinkedList.unShift(9);
// singlyLinkedList.unShift(0);

// singlyLinkedList.get(0);
// singlyLinkedList.get(1);
// const node = singlyLinkedList.get(1);
// console.log(node);

// console.log(singlyLinkedList);
