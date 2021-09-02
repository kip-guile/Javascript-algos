// Implementing an array
class MyArray {
  constructor () {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length += 1
    return this.length
  }

  pop() {
    let index = this.length - 1
    delete this.data[index]
    this.length -= 1
    return this.length
  }

  delete(index) {
    const item = this.data[index]
    this.shiftItems(index)
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1]
    this.length -= 1
  }
}

const newArray = new MyArray()
newArray.push(2)
newArray.push(4)
newArray.push(6)
newArray.push(8)
newArray.delete(2)
// console.log(newArray)


const uniqueChars = (s) => {
  let sorted = s.split('').sort()
  let prev = null
  for (let i = 0; i < sorted.length; i++) {
    if (prev === sorted[i]) {
      return 'NO'
    }
    prev = sorted[i]
  }
  return 'YES'
}

// console.log(uniqueChars('eeeeeb'))

// JavaScript does not use NULL terminated strings, while C does.
// Javascript strings are stored by keeping track of the characters
// and the length separately instead of trying to assume that a
// NULL marks the end of the string.

const permutationCheck = (string1, string2) => {
  let hash1 = {}
  let hash2 = {}
  let res = true
  string1.split('').forEach((char) => {
    if (hash1[char]) {
      hash1[char] = hash1[char] + 1
    } else {
      hash1[char] = 1
    }
  })
  string2.split('').forEach((char) => {
    if (hash2[char]) {
      hash2[char] = hash2[char] + 1
    } else {
      hash2[char] = 1
    }
  })
  for (const key in hash1) {
    if (hash1[key] !== hash2[key]) {
      return false
    }
  }
  return res
}

// console.log(permutationCheck('strungss', 'trungsss'))

const replaceSpace = (n, s) => {
  let fill = '%20'
  let arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
    if (i === n) {
      break
    }
    if (arr[i] == ' ') {
      arr[i] = fill
    }
  }
  return arr.join('')
}

// console.log(replaceSpace('Mr John Smith'))

function palindromePermutation(s) {
  // basically if more than one char is appears an odd number of times, it cant be a palindrome
  let oddCount = 0
  let hash = {}
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]] += 1
    } else {
      hash[s[i]] = 1
    }
  }
  for (const k in hash) {
    if (hash[k] % 2 !== 0) {
      oddCount += 1
    }
  }
  if (oddCount > 1) {
    return 'NO'
  }
  return 'YES'
}

const stringCompression = (string) => {
  let currChar = string[0]
  let count = 0
  let outputStr = []

  for (let i = 0; i < string.length; i++) {
    if (string[i] === currChar) {
      count += 1
      if (string.length === i + 1 && count !== 0) {
        outputStr.push(currChar)
        outputStr.push(count)
      }
    } else {
      outputStr.push(currChar)
      outputStr.push(count)
      currChar = string[i]
      count = 1
    }
  }
  console.log(outputStr.join(''))
  if (outputStr.length >= string.length) {
    return string
  } else {
    return outputStr.join('')
  }
}

// console.log(stringCompression('aggghhwww'))

function oneAway(a, b) {
  if (Math.abs(a.length - b.length) > 1) return 'NO'
  let difference = 0
  let indexLeft = 0
  let indexRight = 0
  while (difference < 2 && indexLeft < a.length && indexRight < b.length) {
    if (a[indexLeft] !== b[indexRight]) {
      difference++
      // Character inserted in left string, or character removed in right string
      if (a[indexLeft + 1] === b[indexRight]) indexLeft++
      // Character inserted in right string, or character removed in left string
      else if (a[indexLeft] === b[indexRight + 1]) indexRight++
    }
    indexLeft++
    indexRight++
  }
  if (difference < 2) {
    return 'YES'
  } else {
    return 'NO'
  }
}

function rotateMatrix(matrix) {
  return matrix.map((row, i) =>
    row.map((val, j) => matrix[matrix.length - 1 - j][i])
  )
}

function zeroMatrix(m) {
  //Create arrays to hold row and column positions
  var rows = []
  var columns = []
  for (r = 0; r < m.length; r++) {
    for (c = 0; c < m[r].length; c++) {
      if (m[r][c] === 0) {
        rows.push(r)
        columns.push(c)
      }
    }
  } //Loop through row array to replace with zeros
  rows.forEach((e, l) => {
    for (i = 0; i < m.length; i++) {
      for (j = 0; j < m[i].length; j++) {
        if (i === e) {
          m[i][j] = 0
        }
      }
    }
  }) //Loop through column array to replace with zeros
  columns.forEach((e, l) => {
    for (i = 0; i < m.length; i++) {
      for (j = 0; j < m[i].length; j++) {
        if (j === e) {
          m[i][j] = 0
        }
      }
    }
  }) //Return our mutated matrix
  return m
}

const reverse = (str) => {
  let newStr = ''
  for (let i = str.length - 1; i > 0; i--) {
    newStr = newStr + str[i]
  }
  return newStr
}

// console.log(reverse("nwanne di na mba"))

const mergeSortedArrays = (arr1, arr2) => {
  const dump = [...arr1, ...arr2]
  return dump.sort((a,b) => a - b)
}

const mergeSortedArrays2 = (arr1, arr2) => {
  let res = []
  let index1 = 0
  let index2 = 0
  while (index1 < (arr1.length) || index2 < (arr2.length)) {
    if (!arr2[index2] && !arr1[index1]) return res
    if (!arr2[index2] && arr1[index1]) {
      res.push(arr1[index1])
      index1 += 1
    }
    if (!arr1[index1] && arr2[index2]) {
      res.push(arr2[index2])
      index2 += 1
    }
    if (arr1[index1] >= arr2[index2]) {
      res.push(arr2[index2])
      index2 += 1
    } else if (arr2[index2] > arr1[index1]) {
      res.push(arr1[index1])
      index1 += 1
    }
  }
  return res
}

// console.log('merge =>', mergeSortedArrays2([0,3,4, 31, 32, 35, 98, 700], [4,6,30, 31, 60, 1289]))

var twoSum = function(nums, target) {
    // key is to find the complement
    let store = {}
    nums.forEach((item, i) => {
        store[item] = i
    })
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        
        if (store[complement] && store[complement] != i) {
            return [store[complement], i]
        }
    }
};

console.log(twoSum([2,7,11,15], 9))

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

var maxSubArray = function(nums) {
    // initiate two variable, maxSum for total max, sum for current max
    let maxSum = -Infinity
    let currentSum = 0
    // iterate through the nums, store sub-problems result
    for(let i = 0; i < nums.length; i++){ 
        //cumulating answers to the top
        
        //compare currentSum add current number 
        //with current number and store the maximum value
        currentSum = Math.max(nums[i], currentSum + nums[i])
        
        //compare maxSum with currentSum and store the greater value
        maxSum = Math.max(currentSum, maxSum)
        
    }
    return maxSum
};
