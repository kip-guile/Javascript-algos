class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // Insert to head
  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size += 1
  }

  //Insert to tail
  insertLast(data) {
    let node = new Node(data)
    let current = this.head
    //if empty, make it the head
    if (!current) {
      this.head = node
    } else {
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size += 1
  }

  //Insert at index
  insertAtIndex(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      console.error('error: out of range')
      return
    }
    // if index is zero
    if (index === 0) {
      this.insertFirst(data)
      return
    }
    let count = 0
    let prevNodeIndex = index - 1
    let current = this.head
    // if list is empty
    while (count != prevNodeIndex) {
      current = current.next
      count += 1
    }
    let nextNode = current.next
    current.next = new Node(data, nextNode)
    this.size += 1
  }

  //Get at index
  getAtIndex(index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      console.error('error: out of range')
      return
    }
    let count = 0
    let current = this.head
    while (index !== count) {
      count += 1
      current = current.next
    }
    console.log(current.data)
  }

  // Remove at index
  removeAtIndex(index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      console.error('error: out of range')
      return
    }
    // if index is zero
    if (index === 0) {
      let newNext = this.head.next
      this.head = newNext
      this.size -= 1
      return
    }
    let count = 0
    let current = this.head
    let prev
    while (count !== index) {
      count += 1
      prev = current
      current = current.next
    }
    let newNext = current.next
    prev.next = newNext
    this.size -= 1
  }

  //Clear list
  clearList() {
    this.head = null
    this.size = 0
  }

  //Print list data
  printListData() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
    console.log('size: ' + this.size)
  }
}

const ll = new LinkedList()
ll.insertLast(600)
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertFirst(400)
ll.insertLast(500)
ll.insertAtIndex(700, 2)
// ll.getAtIndex(0)
ll.removeAtIndex(2)
ll.clearList()

ll.printListData()
