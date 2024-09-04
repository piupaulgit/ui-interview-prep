class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
    
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }

        let current = this.root;
        if(current.value === value) {
            return false
        }
        let added = false;
        while(!added){
            if(value > current.value){
                if(current.right === null){
                    current.right = newNode;
                    added = true;
                }else{
                    current = current.right
                }
            }

            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    added = true;
                }else{
                    current = current.left
                }
            }
        }

        return this;
    }

    breadthFirst () {
        let node = this.root;
        let queue = [];
        let result = [];

        queue.push(node);
        while(queue.length){
            const node = queue.shift();
            result.push(node.value);
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }

        return result;
    }

}

const bts = new Tree();
bts.insert(9)
bts.insert(10)
bts.insert(2)
bts.insert(1)
bts.insert(3)
const breadthFirstvalues = bts.breadthFirst();
console.log(breadthFirstvalues)
console.log(bts)