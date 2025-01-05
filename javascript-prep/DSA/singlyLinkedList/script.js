// class Node {
//   constructor(val) {
//     this.value = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
//   }

//   push(val) {
//     const newNode = new Node(val);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       const currentTail = this.tail;
//       this.tail = newNode;
//       currentTail.next = this.tail;
//     }
//     this.length++;
//   }

//   pop() {
//     if (!this.head) return undefined;

//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       let currentNode = this.head;
//       let secondLastNode;
//       while (currentNode.next) {
//         secondLastNode = currentNode;
//         currentNode = currentNode.next;
//       }

//       secondLastNode.next = null;
//       this.tail = secondLastNode;
//     }

//     this.length--;
//     return this;
//   }

//   shift() {
//     if (!this.head) return undefined;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       let newHead = this.head.next;
//       this.head = newHead;
//     }

//     this.length--;
//     this.this;
//   }

//   unShift(val) {
//     const newNode = new Node(val);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   get(position) {
//     if (position < 0 || position > this.length) {
//       return undefined;
//     }
//     let count = 0;
//     let node = this.head;
//     while (count !== position) {
//       node = node.next;
//       count++;
//     }
//     return node;
//   }

//   set(position, value) {
//     const foundNode = this.get(position);

//     if (foundNode) {
//       foundNode.value = value;
//       return true;
//     }
//     return false;
//   }

//   insert(position, value) {
//     if (position < 0 || position > this.length) return false;

//     if (position === this.length - 1) {
//       this.push(value);
//     }

//     if (position === 0) {
//       this.unShift(value);
//     }
//     const newNode = new Node(value);

//     const prevNode = this.get(position - 1);
//     const nextNode = prevNode.next;
//     prevNode.next = newNode;
//     newNode.next = nextNode;

//     this.length++;

//     return this;
//   }

//   remove(position) {
//     if (position < 0 || position > this.length) return false;

//     if (position === 0) {
//       this.shift();
//       return;
//     }

//     if (position === this.length) {
//       this.pop();
//       return;
//     }
//     const prevNode = this.get(position - 1);
//     const nextNode = prevNode.next.next;
//     prevNode.next = nextNode;

//     this.length--;
//   }

//   print() {
//     const arr = [];
//     let current = this.head;
//     while (current) {
//       arr.push(current.value);
//       current = current.next;
//     }

//     console.log(arr);
//   }

//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let prev = null,
//       next;
//     for (let i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//   }

//   alternateConsequtiveItems() {
//     if (this.length === 0) return null;
//     if (this.length === 1) return this;

//     let current = this.head;
//     while (current.next && current.next.next) {
//       let expectedRight = current;
//       let expectedLeft = current.next;
//       current.next = expectedRight;
//       expectedLeft = current.next.next;
//       current = current.next;
//     }
//     console.log(this);
//   }
// }

// const singlyLinkedList = new SinglyLinkedList();
// singlyLinkedList.push(1);
// singlyLinkedList.push(2);
// singlyLinkedList.push(3);
// singlyLinkedList.push(4);
// // singlyLinkedList.push(6);

// // singlyLinkedList.pop();
// // singlyLinkedList.pop();
// // singlyLinkedList.pop();

// // singlyLinkedList.shift();
// // singlyLinkedList.shift();
// // singlyLinkedList.shift();

// // singlyLinkedList.unShift(1);
// // singlyLinkedList.unShift(9);
// // singlyLinkedList.unShift(0);

// // singlyLinkedList.get(0);
// // singlyLinkedList.get(1);
// // const node = singlyLinkedList.get(1);
// // console.log(node);

// // console.log(singlyLinkedList.get(2));
// // singlyLinkedList.set(2, "piu");
// // console.log(singlyLinkedList.get(2));

// // singlyLinkedList.insert(1, "inserted");
// // singlyLinkedList.remove(1);

// // singlyLinkedList.print()
// // singlyLinkedList.reverse();
// singlyLinkedList.print();
// singlyLinkedList.alternateConsequtiveItems();
// singlyLinkedList.print();

// ===================================================================

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      let oldTail = this.tail;
      oldTail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  pop() {
    if (!this.head) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      let secondLast = null;

      while (current.next) {
        secondLast = current;
        current = current.next;
      }

      secondLast.next = null;
      this.tail = secondLast;
    }

    this.length--;
  }

  unShift(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  shift() {
    if (!this.head) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
  }

  get(position) {
    if (position < 0 || position > this.length) return undefined;

    let count = 0;
    let current = this.head;

    while (position !== count) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(val, position) {
    const node = new Node(val);

    if (position < 0 || position > this.length + 1) return undefined;

    let oldNode = this.get(position - 1);
    let nextNode = this.get(position + 1);
    node.next = nextNode;
    oldNode.next = node;
  }

  insert(val, position) {
    if (position === 0) {
      this.unShift(val);
      return;
    }

    if (position === this.length) {
      this.push(val);
      return;
    }

    let node = new Node(val);

    let prevValue = this.get(position - 1);
    node.next = prevValue.next;
    prevValue.next = node;
    this.length++;
  }

  remove(position) {
    if (position < 0 || position > this.length) return undefined;

    if (position === 0) {
      this.shift();
      return;
    }

    if (position === this.length) {
      this.pop();
    }

    let previousVal = this.get(position - 1);
    previousVal.next = previousVal.next.next;
    this.length--;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    this.tail = this.head;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  deleteMiddleNode() {
    let current = this.head;

    if (!current || !current.next) return null;

    let prev = current,
      slow = current,
      fast = current;

    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    if (prev) {
      prev.next = slow.next;
    }
  }

  oddEvenLinkedList() {
    let odd = this.head;
    let even = this.head.next;
    let evenHead = even;

    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;

      even.next = odd.next;
      even = even.next;
    }

    odd.next = evenHead;
  }

  ifCycleLinkedList() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }

    return false;
  }

  removeNodeFromLast(position) {}

  printVals() {
    let current = this.head;
    let values = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values);
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push("hi");
singlyLinkedList.push("I");
singlyLinkedList.push("Am");
singlyLinkedList.push("Piu");
console.log(singlyLinkedList);

// singlyLinkedList.pop();
// singlyLinkedList.pop();
// console.log(singlyLinkedList);

// singlyLinkedList.unShift("hey");
// singlyLinkedList.unShift("new");
// console.log(singlyLinkedList);

// singlyLinkedList.shift();
// singlyLinkedList.shift();
// console.log(singlyLinkedList);

// console.log(singlyLinkedList.get(2));

// singlyLinkedList.set("new", 1);
// console.log(singlyLinkedList);

// singlyLinkedList.insert("new", 1);
// singlyLinkedList.insert("new2", 2);
// console.log(singlyLinkedList);

// singlyLinkedList.remove(2);
// console.log(singlyLinkedList);

// singlyLinkedList.reverse();
// console.log(singlyLinkedList);

// singlyLinkedList.deleteMiddleNode();
// singlyLinkedList.deleteMiddleNode();
// console.log(singlyLinkedList);

// singlyLinkedList.oddEvenLinkedList();

singlyLinkedList.printVals();
