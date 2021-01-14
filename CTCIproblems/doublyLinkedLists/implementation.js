class Node {
  constructor(data, prev = null, next = null) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class DoublyLinkeDList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  // Insert to head
  insertToHead(data) {
    let newNode = new Node(data)
    let current = this.head
    if (!current) {
      this.tail = newNode
      this.head = newNode
    } else {
      let prev = this.head
      this.head = newNode
      prev.prev = this.head
      this.head.next = prev
    }
    this.size += 1
  }

  removeFromHead() {
    let current = this.head
    if (!current) {
      return null
    }
    let prev = this.head
    this.head = current.next
    prev.next = null
    this.head.prev = null
    this.size -= 1
  }

  insertToTail(data) {
    let newNode = new Node(data)
    if (!this.tail) {
      this.tail = newNode
      this.head = newNode
    } else {
      let prev = this.tail
      this.tail = newNode
      this.tail.prev = prev
      prev.next = this.tail
    }
    this.size += 1
  }

  removeFromTail() {
    if (!this.tail) {
      return null
    }
    let temp = this.tail
    this.tail = temp.prev
    temp.prev = null
    this.tail.next = null
    this.size -= 1
  }

  moveToHead(data) {
    let current = this.head
    if (data == current.data) {
      return current
    }
    while (current) {
      if (current.data == data) {
        let prev = current.prev
        let next = current.next
        prev.next = current.next
        next.prev = prev
      }
      current = current.next
    }
    this.size -= 1
    this.insertToHead(data)
  }

  moveToTail(data) {
    let current = this.head
    while (current) {
      if (current.data == data) {
        let prev = current.prev
        prev.next = current.next
        current.next.prev = prev
      }
      current = current.next
    }
    this.size -= 1
    this.insertToTail(data)
  }

  // Print list
  printList() {
    let current = this.head
    let list = []
    while (current) {
      list.push(current.data)
      current = current.next
    }
    console.log(this, list, 'size: ' + this.size)
  }
}

class RingBuffer {
  constructor(size) {
    this.storage = new DoublyLinkeDList()
    this.maxSize = size
    this.current = null
  }

  append(data) {
    if (this.storage.size < 1) {
      this.storage.insertFirst(data)
      this.current = this.storage.head
    } else if (this.storage.size < this.maxSize) {
      this.storage.insertToTail(data)
      this.current = this.current.next
    } else {
      if (!this.current) {
        this.storage.removeFromHead()
        this.storage.insertFirst(data)
        this.current = this.storage.head
      } else {
        this.storage.insertLast(data)
        // to be continued
      }
    }
  }

  get() {
    let list = []
    let current = this.storage.head
    while (current) {
      list.push(current.data)
      current = current.next
    }
    return list
  }
}

const dll = new DoublyLinkeDList()
dll.insertToHead(2)
dll.insertToHead(4)
dll.insertToHead(6)
dll.insertToHead(8)
dll.removeFromHead()
dll.insertToTail(8)
dll.insertToTail(10)
dll.insertToTail(12)
dll.removeFromTail()
dll.moveToHead(8)
dll.moveToTail(4)

dll.printList()
