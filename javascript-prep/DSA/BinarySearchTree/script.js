class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
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

    find(value){
        let current = this.root;
        let found = false
        while(current && !found){
            if(value > current.value){
                current = current.right
            }else if(value < current.value){
                current = current.left
            }else{
                found = true;
                return current;
            }
        }
    }
}

const bts = new BinarySearchTree();
bts.insert(9)
bts.insert(10)
bts.insert(2)
bts.insert(1)
bts.insert(3)
const ele = bts.find(9)
console.log(ele, 'found')

console.log(bts)