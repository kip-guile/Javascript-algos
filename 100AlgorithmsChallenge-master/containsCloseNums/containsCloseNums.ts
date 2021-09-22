function containsCloseNums(nums: number[], k: number): boolean {
    let store = {}
    for (let i = 0; i < nums.length; i++) {
        if (store[nums[i]]) {
            store[nums[i]].push(i)
            console.log(store)
            let num1 = store[nums[i]][0]
            let num2 = store[nums[i]][1]
            let abs = Math.abs(num1 - num2)
            if (abs <= k) {
                return true
            }
        } else {
            store[nums[i]] = [i]
        }
    }
    return false
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));