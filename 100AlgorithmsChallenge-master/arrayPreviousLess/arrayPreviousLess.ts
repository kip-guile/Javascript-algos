function arrayPreviousLess(items: number[]): number[] {
    let newArr = []
    for (let i = 0; i < items.length; i++) {
        if (i = 0) {
            newArr.push(-1)
            continue
        }
        for (let j = i-1; j < 1; j-=1) {
            if (items[j] === -1) {
                continue
            } else if (items[i] > items[j]) {
                newArr.push(items[j])
            } else {
                items[i] = -1
            }
        }        
    }
    return newArr
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));