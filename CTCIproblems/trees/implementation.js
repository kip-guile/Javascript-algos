class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
    } else {
      let current = this.root
      while (true) {
        if (value < current.value) {
          //Left
          if (!current.left) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else {
          //Right
          if (!current.right) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return 'Tree is empty'
    }
    let current = this.root
    while (current) {
      if (current.value === value) {
        return current
      } else if (value < current.value) {
        // Left
        if (current.left) {
          current = current.left
        } else {
          return 'Not found'
        }
      } else {
        if (current.right) {
          current = current.right
        } else {
          return 'Not found'
        }
      }
    }
  }

  remove(value) {
    if (!this.root) {
      return false
    }
    let current = this.root
    let parentNode = null
    while (current) {
      if (value < current.value) {
        parentNode = current
        current = current.left
      } else if (value > current.value) {
        parentNode = current
        current = current.right
      } else if (current.value === value) {
        // We have a match
        // option 1: no right child:
        if (current.right === null) {
          if (parentNode === null) {
            this.root = current.left
          } else {
            // if parent > current value, make current left child a child of parent
            if (current.value < parentNode.value) {
              parentNode.left = current.left
              // if parent < current value, make left child a right child of parent
            } else if (current.value > parentNode.value) {
              parentNode.right = current.left
            }
          }
        } else if (current.right.left === null) {
          if (parentNode === null) {
            this.root = current.left
          } else {
            current.right.left = current.left
            //if parentNode > current, make right child of the left a parent
            if (current.value < parentNode.value) {
              parentNode.left = current.right
              // if parent < current, make right child a right child of parent
            } else if (current.value > parentNode.value) {
              parentNode.right = current.right
            }
          }
        } else {
          // find the right child'd left most child
          let leftmost = current.right.left
          let leftmostParent = current.right
          while (leftmost.left !== null) {
            leftmostParent = leftmost
            leftmost = leftmost.left
          }
          // Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right
          leftmost.left = current.left
          leftmost.right = current.right

          if (parentNode === null) {
            this.root = leftmost
          } else {
            if (current.value < parentNode.value) {
              parentNode.left = leftmost
            } else if (current.value > parentNode.value) {
              parentNode.right = leftmost
            }
          }
        }
        return true
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))
tree.remove(20)
console.log(JSON.stringify(traverse(tree.root)))
// console.log(tree.lookup(20))
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}
