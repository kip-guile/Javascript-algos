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

  //Remove from head
  removeFromHead() {
    if (this.size <= 1) {
      return null
    }
    let current = this.head
    this.head = current.next
    this.size -= 1
  }

  // Remove from tail
  removeLast() {
    let current = this.head
    if (!current) {
      return null
    }
    if (this.size <= 1) {
      this.head = null
      return this.head
    }
    let prev
    while (current.next) {
      prev = current
      current = current.next
    }
    prev.next = null
    this.size -= 1
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

  //Check if list contains value
  contains(value) {
    let current = this.head
    if (!current) {
      return null
    }
    while (current) {
      if (current.data === value) {
        console.log(true)
        return
      }
      current = current.next
    }
    console.log(false)
    return
  }

  // get max value
  getMax() {
    let current = this.head
    if (!current) {
      return null
    }
    let max = current.data
    while (current) {
      let newData = current.data
      if (newData > max) {
        max = newData
      }
      current = current.next
    }
    return max
  }

  // get min value
  getMin() {
    let current = this.head
    if (!current) {
      return null
    }
    let min = current.data
    while (current) {
      let newData = current.data
      if (newData < min) {
        min = newData
      }
      current = current.next
    }
    return min
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

ll.getAtIndex(0)
ll.removeAtIndex(2)
ll.removeFromHead()
ll.removeLast()

ll.contains(500)
console.log(ll.getMax())
console.log(ll.getMin())

ll.printListData()
