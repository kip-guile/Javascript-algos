// implement a queue using two stacks.

var MyQueue = function () {
  this.firstStack = []
  this.secondStack = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  let length = this.firstStack.length
  for (let i = 0; i < length; i++) {
    this.secondStack.push(this.firstStack.pop())
  }
  this.secondStack.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let length = this.secondStack.length
  for (let i = 0; i < length; i++) {
    this.firstStack.push(this.secondStack.pop())
  }
  let token = this.firstStack.pop()
  return token
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let length = this.secondStack.length
  for (let i = 0; i < length; i++) {
    this.firstStack.push(this.secondStack.pop())
  }
  return this.firstStack[this.firstStack.length - 1]
}

MyQueue.prototype.empty = function () {
  if (this.firstStack.length === 0 && this.secondStack.length === 0) {
    return true
  } else {
    return false
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
