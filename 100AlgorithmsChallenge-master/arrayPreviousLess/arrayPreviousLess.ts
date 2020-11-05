function arrayPreviousLess(items: number[]): number[] {
    let newArr = [...items]
    for (let i = 0; i < items.length; i++) {
        if (i === 0) {
            newArr[i] = -1
             continue
        }
        for (let j = i-1; j >= 0; j--) {
            if (items[j] === -1) {
                continue
            } else if (items[i] > items[j]) {
                newArr[i] = items[j]
                break
            } else {
                newArr[i] = -1
            }
        }        
    }
    return newArr
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));