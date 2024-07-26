
function sumAllItems(array) {
    if (array.length === 0) {
        return []
    }
    // if you wanna sum all items of an array the initial value of sum should be 0
    let sum = 1
    // x is not defined
    for (let i = 0; i < array.length; x++) {
        sum += sum[i] //sum += array[i]
    }
    console.log(sum)
}
console.log(sumAllItems([1, 2, 3, 4]))
//also need to handle sum = undefine
//can sum be outOfBound?