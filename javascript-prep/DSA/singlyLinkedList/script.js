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

  set(position, value) {
    const foundNode = this.get(position);

    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(position, value) {
    if (position < 0 || position > this.length) return false;

    if (position === this.length - 1) {
      this.push(value);
    }

    if (position === 0) {
      this.unShift(value);
    }
    const newNode = new Node(value);

    const prevNode = this.get(position - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;

    this.length++;

    return this;
  }

  remove(position) {
    if (position < 0 || position > this.length) return false;

    if (position === 0) {
      this.shift();
      return;
    }

    if (position === this.length) {
      this.pop();
      return;
    }
    const prevNode = this.get(position - 1);
    const nextNode = prevNode.next.next;
    prevNode.next = nextNode;

    this.length--;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    console.log(arr);
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null,
      next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(1);
// singlyLinkedList.push(6);

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

// console.log(singlyLinkedList.get(2));
// singlyLinkedList.set(2, "piu");
// console.log(singlyLinkedList.get(2));

// singlyLinkedList.insert(1, "inserted");
// singlyLinkedList.remove(1);

// singlyLinkedList.print()
// singlyLinkedList.reverse();
// singlyLinkedList.print()
