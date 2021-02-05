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

const replaceSpace = (string) => {
  let fill = '%20'
  let arr = string.split('')
  arr.forEach((char, i) => {
    if (char == ' ') {
      arr[i] = fill
    }
  })
  return arr.join('')
}

// console.log(replaceSpace('Mr John Smith'))

const stringCompression = (string) => {
  let currChar = string[1]
  let count = 0
  let outputStr = []
  string.split('').forEach((char, i) => {
    if (char === currChar) {
      count += 1
      if (string.length === i + 1) {
        outputStr.push(currChar)
        outputStr.push(count)
      }
    } else {
      outputStr.push(currChar)
      outputStr.push(count)
      currChar = char
      count = 1
    }
  })
  if (outputStr.length >= string.length) {
    return string
  } else {
    return outputStr.join('')
  }
}

// console.log(stringCompression('aaabbcc'))
