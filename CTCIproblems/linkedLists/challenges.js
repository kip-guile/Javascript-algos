const { ll, LinkedList, Node } = require('./implementation')

// reverse list
var reverseList = function (head) {
  let current = head
  let next = null
  let prev = null
  while (current) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}

// reverse list recursively
var reverseListRecursevely = function (head) {
  if (!head || !head.next) {
    return head
  }
  let temp = reverseListRecursevely(head.next)
  head.next.next = head
  head.next = null
  return temp
}

// find middle element
var middleNode = function (head) {
  let p1 = head
  let p2 = head
  while (p2 && p2.next) {
    p2 = p2.next.next
    p1 = p1.next
  }
  return p1
}

// delete duplicates from sorted linked list
var deleteDuplicates = function (head) {
  let curr = head
  if (!curr) {
    return head
  }
  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  return head
}

const removeDuplicatesUnsorted = (head) => {
  let cache = {}
  let current = head
  while (current) {
    if (cache[current.data]) {
      cache[current.data] += 1
    } else {
      cache[current.data] = 1
    }
    current = current.next
  }
  let newHead = null
  let prev = null
  for (const key in cache) {
    let newNode = new Node(key)
    if (newHead === null) {
      newHead = newNode
      prev = newHead
    } else {
      prev.next = newNode
      prev = newNode
    }
  }
  return newHead
}

const print = (head) => {
  let box = []
  let curr = head
  while (curr) {
    box.push(curr.data)
    curr = curr.next
  }
  return box
}

const findkthToLastNode = (head, k) => {
  let slow = head
  let fast = head
  let count = 0
  while (count !== k) {
    fast = fast.next
    count += 1
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  console.log(slow)
  return slow.data
}

const deleteMidleNodeGivenMiddleNode = (node) => {
  let token = node.next.data
  node.next = node.next.next
  node.data = token
  return node
}

const partitionaroundX = (head, x) => {
  let curr = head
  let headOne,
    headTwo,
    prevOne,
    prevTwo = null
  while (curr) {
    let newNode = new Node(curr.data)
    if (curr.data < x) {
      if (!headOne) {
        headOne = newNode
        prevOne = newNode
      } else {
        prevOne.next = newNode
        prevOne = newNode
      }
    } else {
      if (!headTwo) {
        headTwo = newNode
        prevTwo = newNode
      } else {
        prevTwo.next = newNode
        prevTwo = newNode
      }
    }
    curr = curr.next
  }
  let curr2 = headOne
  let valueNode = new Node(x)
  valueNode.next = headTwo
  if (!curr2) {
    return valueNode
  } else {
    while (curr2.next) {
      curr2 = curr2.next
    }
  }
  curr2.next = valueNode

  return headOne
}

// console.log(ll)
const reversed = reverseList(ll.head)
// console.log(print(reversed))
// console.log(reversed)
// console.log(middleNode(reversed))
// console.log(print(ll.head.next))
// console.log('nodups', print(removeDuplicatesUnsorted(reversed)))
// console.log('findkth', findkthToLastNode(reversed, 2))
// const mid = middleNode(reversed)
// console.log(deleteMidleNodeGivenMiddleNode(mid))
console.log(print(partitionaroundX(reversed, 50)))
