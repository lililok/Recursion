import { Node, Tree } from "./classes.js";

const arr = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
const myTree = new Tree();
myTree.buildTree(arr)

console.log(myTree.isBalanced(myTree.root))

console.log(myTree.levelOrder())
console.log(myTree.inOrder())
console.log(myTree.preOrder())
console.log(myTree.postOrder())

myTree.insert(myTree.root, 222)
myTree.insert(myTree.root, 333)
myTree.insert(myTree.root, 111)
myTree.insert(myTree.root, 555)
myTree.insert(myTree.root, 234)
myTree.insert(myTree.root, 101)

console.log(myTree.isBalanced(myTree.root))
myTree.rebalance(myTree.root)
console.log(myTree.isBalanced(myTree.root))

console.log(myTree.levelOrder())
console.log(myTree.inOrder())
console.log(myTree.preOrder())
console.log(myTree.postOrder())

