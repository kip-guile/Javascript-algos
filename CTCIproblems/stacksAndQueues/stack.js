const { LinkedList } = require('../linkedLists/implementation.js')

class Stack {
  constructor() {
    this.storage = new LinkedList()
    this.size = 0
  }

  push(element) {
    this.storage.insertLast(element)
    this.size += 1
  }

  pop(element) {
    if (this.size == 0) {
      return
    }
    this.storage.removeLast(element)
    this.size -= 1
  }

  getLength() {
    return this.size
  }

  print() {
    this.storage.printListData()
  }
}

const stack = new Stack()
stack.push(100)
stack.push(200)
stack.push(300)
stack.push(100)
stack.push(200)
stack.push(300)
stack.pop()
console.log(stack.getLength())

stack.print()
