import { LinkedList, Node } from './classes.js';

const list = new LinkedList();

list.append(1);
list.append(3);
list.append(6);
list.append(10);

console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());

console.log(list.at(2));
console.log(list.contains(6));
console.log(list.find(6));

console.log(list.toString());
list.pop()
console.log(list.toString());
