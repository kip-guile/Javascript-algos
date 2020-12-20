function checkPalindrome(inputString: string, pointer1 = 0): boolean {
  let pointer2
  if (pointer1 === 0) {
    pointer2 = inputString.length - 1
  } else {
    pointer2 = inputString.length - 1 - pointer1
  }
  if (
    pointer1 === inputString.length &&
    inputString[pointer1] === inputString[pointer2]
  ) {
    return true
  }
  if (inputString[pointer1] !== inputString[pointer2]) {
    return false
  }
  let newpointer1 = pointer1 + 1
  return checkPalindrome(inputString, newpointer1)
}

console.log(checkPalindrome('aabaa'))
console.log(checkPalindrome('abba'))
console.log(checkPalindrome('abac'))
console.log(checkPalindrome('abbaabba'))
console.log(checkPalindrome('a'))
