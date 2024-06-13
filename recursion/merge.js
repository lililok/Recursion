function mergeSort(arr) {
    if (arr.length<=1) {
        return arr
    }
    let mid = Math.floor(arr.length/2)

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right)
}

function merge(left, right) {
    let result = []
    let leftI = 0
    let rightI = 0

    while (leftI < left.length && rightI < right.length) {
        if (left[leftI] < right[rightI]) {
            result.push(left[leftI])
            leftI++;
        } else {
            result.push(right[rightI])
            rightI++;
        }
    }

    while (leftI < left.length) {
        result.push(left[leftI]);
        leftI++;
    }

    while (rightI < right.length) {
        result.push(right[rightI]);
        rightI++;
    }

    return result;
}

let arr = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(mergeSort(arr))

arr = [105, 79, 100, 110]
console.log(mergeSort(arr))