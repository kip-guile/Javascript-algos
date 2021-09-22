function convertString(s: string, t: string): boolean {
    let init = 0
    let target = t[init]
    let str = ''
    s.split('').forEach(char => {
        if (target === char) {
            str = str + target
            target = t[init += 1]
        }
    })
    if (str === t) return true
    return false
}

console.log(convertString('ceoydefthf5iyg5h5ytsggr', 'codefightsr'));
console.log(convertString('addbycad', 'abcde'));
