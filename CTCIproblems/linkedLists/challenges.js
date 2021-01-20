const {
  ll,
  LinkedList,
  Node,
  first,
  second,
  palindrome,
} = require('./implementation')

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
  }
  prevOne.next = valueNode

  return headOne
}

const padList = (headToPad, n) => {
  let nullNode = new Node(0)
  for (let i = 0; i < n; i++) {
    nullNode.next = headToPad
    headToPad = nullNode
  }
  return headToPad
}
const countNode = (list) => {
  let count = 0
  let curr = list
  while (curr) {
    count += 1
    curr = curr.next
  }
  return count
}

// add reversed lists
const addReversedLists = (headOne, headTwo) => {
  let countList1 = countNode(headOne)
  let countList2 = countNode(headTwo)
  if (countList1 > countList2) {
    headTwo = padList(headTwo, countList1 - countList2)
  } else if (countList2 > countList1) {
    headOne = padList(headOne, countList2 - countList1)
  }
  let curr = headOne
  let curr2 = headTwo
  let remainder = 0
  let resHead = null
  let prev = null
  while (curr && curr2) {
    let sum = remainder + curr.data + curr2.data
    let stringed = sum.toString()
    if (stringed.length > 1) {
      remainder = parseInt(stringed[0])
      let newNode = new Node(parseInt(stringed[1]))
      if (!resHead) {
        resHead = newNode
        prev = resHead
      } else {
        prev.next = newNode
        prev = newNode
      }
    } else {
      remainder = 0
      let newNode = new Node(parseInt(stringed[0]))
      if (!resHead) {
        resHead = newNode
        prev = resHead
      } else {
        prev.next = newNode
        prev = newNode
      }
    }
    curr = curr.next
    curr2 = curr2.next
  }
  if (remainder !== 0) {
    list.push(remainder)
    prev.next = new Node(remainder)
  }
  return print(resHead)
}

// reverse linked list
const reverseTheList = (headie) => {
  console.log('head', print(headie))
  let curr = headie
  let prev = null
  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

// check if linked list is a palindrome
const isPalindrome = (head) => {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  slow = reverseTheList(slow)
  console.log('rev', print(slow))
  console.log('head', print(head))
  while (slow) {
    console.log(head.data, slow.data)
    if (head.data !== slow.data) {
      return false
    }
    head = head.next
    slow = slow.next
  }
  return true
}

// check if linked list has a loop
var hasCycle = function (head) {
  let fast = head
  let slow = head
  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
}

// find intersection of two linked lists
var getIntersectionNode = function (headA, headB) {
  let hash = {}
  let p1 = headA
  let p2 = headB
  while (p1) {
    if (!hash[p1.val]) {
      hash[p1.val] = p1
    } else {
      // doing this because we dont want to ovewrite a previous key
      hash['second'] = p1
    }
    p1 = p1.next
  }
  while (p2) {
    if (hash[p2.val] == p2 || hash['second'] == p2) {
      return p2
    }
    p2 = p2.next
  }
  return null
}

// remove all instances of a value in a linked list
var removeElements = function (head, val) {
  let curr = head
  let prev = null
  while (curr) {
    if (curr.val === val) {
      if (!prev) {
        curr = head.next
        head = head.next
        continue
      } else {
        prev.next = curr.next
        curr = curr.next
      }
    } else {
      prev = curr
      curr = curr.next
    }
  }
  return head
}

// return decimal number of binary linked list
var getDecimalValue = function (head) {
  let weight = 1
  let curr = head
  let binary = 0
  let reversed = reverse(head)

  while (reversed !== null) {
    if (reversed.val === 1) {
      binary += weight
    }
    weight = weight * 2
    reversed = reversed.next
  }
  return binary
}

console.log(isPalindrome(palindrome.head))
// console.log(addReversedLists(first.head, second.head))
// console.log(ll)
// const reversed = reverseList(ll.head)
// console.log(print(reversed))
// console.log(reversed)
// console.log(middleNode(reversed))
// console.log(print(ll.head.next))
// console.log('nodups', print(removeDuplicatesUnsorted(reversed)))
// console.log('findkth', findkthToLastNode(reversed, 2))
// const mid = middleNode(reversed)
// console.log(deleteMidleNodeGivenMiddleNode(mid))
// console.log(print(partitionaroundX(reversed, 750)))
