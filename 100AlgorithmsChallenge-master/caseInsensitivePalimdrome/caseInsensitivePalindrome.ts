function isCaseInsensitivePalindrome(inputString: string, count=0, last=inputString.length - 1): boolean {
    if (inputString[count].toLowerCase() !== inputString[last].toLowerCase()) {
        return false
    } else if (count === inputString.length - 1) {
        return true
    }
    count = count + 1
    last = last - 1
    return isCaseInsensitivePalindrome(inputString, count, last)
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abAAba'));