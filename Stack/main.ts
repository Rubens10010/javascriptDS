import {Stack} from './stack'

let myStack = new Stack<string>();

myStack.push("hola");
myStack.push("mundo");

myStack.push("fellow");
myStack.push("mellows");

myStack.print();
console.log("Peek 1: " + myStack.peek())
console.log("Pop 1: " + myStack.pop())
myStack.print();
console.log("Peek 2: " + myStack.peek())
myStack.print();
myStack.push("Generics")
myStack.print();
console.log("Size 1: " + myStack.length());
console.log("Peek 3: " + myStack.peek())
console.log("pop 2: " + myStack.pop())
console.log("Peek 4: " + myStack.peek())
myStack.print();