class Heap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    debugger;

    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIndex];

      if (parent >= element) {
        break;
      } else {
        [this.values[parentIndex], this.values[idx]] = [
          this.values[idx],
          this.values[parentIndex],
        ];
        idx = parentIndex;
      }
    }
  }
}

const heap = new Heap();
heap.insert(55);
console.log(heap);
