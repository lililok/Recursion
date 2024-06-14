export class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
} 

export class Tree {
    constructor() {
        this.root = null; 
    }

    buildTree(array) {
        array = Array.from(new Set(array));
        array.sort((a, b) => a - b);

        this.root = this.sortedArrayToBST(0, array.length-1, array)
        return this.root;
    }

    sortedArrayToBST(l, r, array) {
        if (l > r)
        {
            return null;
        }

        var m = Math.floor((l + r) / 2);
        var node = new Node(array[m]);

        node.left = this.sortedArrayToBST(l, m-1, array);
        node.right = this.sortedArrayToBST(m+1, r, array);
        
        return node;
    }

    prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      }

    insert(root, value) {
        if (root == null) {
            root = new Node(value);
            return root;
        }

        if (value < root.value)
            root.left = this.insert(root.left, value);
        else if (value > root.value)
            root.right = this.insert(root.right, value);
 
        return root;
    }

    deleteItem(root, value) {
        if (root === null) {
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteItem(root.left, value);
        }
        else if (value > root.value) {
            root.right = this.deleteItem(root.right, value);
        }  else {
            if (root.left === null)
                return root.right;
            else if (root.right === null)
                return root.left;

            root.value = this.minValue(root.right);

            root.right = this.deleteItem(root.right, root.value);
        }
        return root;
    }

    minValue(node) {
        let min = node.value;
        while (node.left !== null) {
            min = node.left.value;
            node = node.left;
        }
        return min;
    }

    find(root, value) {
        if (root === null || root.value === value) {
            return root;
        }

        if (root.value < value) {
            return this.find(root.right, value);
          }
         
          return this.find(root.left, value);
    }

    levelOrder(callback) {
        if (this.root === null) {
            return;
        }

        let q = [];
        const result = []

        q.push(this.root);

        while (q.length !== 0) {
            let curr = q.shift();
            result.push(callback ? callback(curr.value) : curr.value);

            if (curr.left !== null) {
                q.push(curr.left);
            }

            if (curr.right !== null) {
                q.push(curr.right);
            }
        }
          return result;
    }

    inOrder(callback) {
        const result = [];
        if (this.root === null) {
            return result;
          }

          let s = [];
          let curr = this.root;

          while (curr != null || s.length > 0)
            {
                while (curr != null)
                {
                    s.push(curr);
                    curr = curr.left;
                }

                curr = s.pop();
                result.push(curr.value);
                curr = curr.right;
            }
            return result;
    }

    preOrder(callback) {
        const result = [];

        if (this.root === null) {
            return result;
        }

        const stack = [];
        stack.push(this.root);

        while (stack.length > 0) {
            const curr = stack.pop();

            result.push(callback ? callback(curr.value) : curr.value);

            if (curr.right !== null) {
                stack.push(curr.right);
            }
            if (curr.left !== null) {
                stack.push(curr.left);
            }
        }

        return result;
    }

    postOrder(callback) {
        const result = [];

        const traverse = (node) => {
            if (node !== null) {
                traverse(node.left);
                traverse(node.right);
                result.push(node.value);
                if (callback) {
                    callback(node);
                }
            }
        };
    
        traverse(this.root);
        return result;
    }

    height(node) {
        if (node === null) {
            return -1;
        }
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(node) {
        let givenNode = this.find(node);
    
        if (!givenNode) return -1;
    
        const findDepth = (currentNode, currentDepth) => {
            if (!currentNode) return -1; 
    
            if (currentNode === givenNode) {
                return currentDepth;
            } else {
                if (givenNode.value < currentNode.value) {
                    return findDepth(currentNode.left, currentDepth + 1);
                } else {
                    return findDepth(currentNode.right, currentDepth + 1);
                }
            }
        };
    
        return findDepth(this.root, 0);
    }
    

    isBalanced(root) {
        if(root == null) {
            return true
        }

        let lh = this.height(root.left)
        let rh = this.height(root.right)
    
        if (Math.abs(lh - rh) <= 1 && this.isBalanced(
        root.left)== true && this.isBalanced( root.right) == true)
            return true

        return false
    }

    rebalance(root) {
        this.root = this.buildTree(this.inOrder())
    }
}
