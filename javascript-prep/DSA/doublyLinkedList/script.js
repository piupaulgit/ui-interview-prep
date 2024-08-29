class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const newNode = new Node(value);

        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode
        }else{
            newNode.prev = this.tail;
            newNode.next = null;
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;

        return this;
    }

    pop(){
        if(this.length === 1){
            this.head = null;
            this.tail = null
        } else{
            let currentTail = this.tail.prev;
            currentTail.next = null;
            this.tail = currentTail;
        }

        this.length--;
    }

    unShift(value){
        if(this.length === 0){
            this.push(value);
        }else{
            const newNode = new Node(value);
            newNode.next = this.head;
            this.head.prev= newNode;
            this.head = newNode;
            this.length++;
        }

        return this;
    }

    shift() {
        if(this.length === 0) return null;

        if(this.length === 1){
            this.pop();
        } else {
            let currentHead = this.head.next;
            currentHead.prev = null;
            this.head = currentHead;
            this.length--;
        }

        return this;
    }

    get(position) {
        let current = this.head;
        if(position < 0 || position > this.length) return null;

        if(position === 0){
            return this.head
        }

        if(position === this.length - 1){
            return this.tail;
        }

        let count = 0;
        while(position !== count){
            current = current.next;
            count++;
        }

        return current;
    }

    set(position, value) {
        const newNode = new Node(value);
        if(position === 0){
            const currentHead = this.head;
            currentHead.next.prev = newNode;
            this.head = newNode;
            this.head.next = currentHead.next;
            return this;

        } if(position === this.length -1){
            const currentTail = this.tail;
            currentTail.prev.next = newNode;
            newNode.prev = currentTail.prev;
            this.tail = newNode;
            return this;
        }
        else{
            const currentNode = this.get(position-1);
            newNode.next = currentNode.next.next;
            newNode.prev = currentNode;
            currentNode.next = newNode;
        }
    }

    print(){
        const arr = [];
        let current = this.head;

        while(current){
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr)
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(11)
doublyLinkedList.push(22)
doublyLinkedList.push(33)

// doublyLinkedList.pop()
// doublyLinkedList.pop()

// doublyLinkedList.unShift('00')
// doublyLinkedList.unShift('01')

// doublyLinkedList.shift()
// doublyLinkedList.shift()
// doublyLinkedList.shift()

// const item = doublyLinkedList.get(1)
// console.log(item)

doublyLinkedList.set(2,55)

doublyLinkedList.print()
console.log(doublyLinkedList)