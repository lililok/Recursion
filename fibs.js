function fibs(n) {
    let arr = [0, 1]
    for (let i = 2; i < n; i++) {
        let sum = arr[arr.length-1]+arr[arr.length-2]
        arr.push(sum)
    }
    console.log(arr)
}

function fibsRec(n) {
    if (n<2) {
        return [0, 1]
    } else {
        let arr = fibsRec(n-1)

        arr.push(arr[arr.length-1]+arr[arr.length-2]);

        return arr;
    }

}

//fibs(8)

console.log(fibsRec(8))
