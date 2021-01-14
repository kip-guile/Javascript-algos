const { LinkedList } = require('../linkedLists/implementation.js')

class Queue {
  constructor() {
    this.storage = new LinkedList()
    this.size = 0
  }

  enqueue(element) {
    this.storage.insertFirst(element)
    this.size += 1
  }

  dequeue() {
    this.storage.removeLast()
    this.size -= 1
  }

  getLength() {
    return this.size
  }

  print() {
    this.storage.printListData()
  }
}
const queue = new Queue()
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
queue.dequeue()
console.log(queue.getLength())

queue.print()
