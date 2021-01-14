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
