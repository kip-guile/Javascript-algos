const { ll } = require('./implementation')

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
var reverseList = function (head) {
  if (!head || !head.next) {
    return head
  }
  let temp = reverseList(head.next)
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

console.log(ll.printListData())
console.log()
