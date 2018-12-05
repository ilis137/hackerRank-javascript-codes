function miniMaxSum(arr) {
    let max = 0,
        min = arr.reduce((a, b) => { return a + b });

    for (let i = 0; i < arr.length; i++) {
        let temp = arr.filter((el, index) => {
            return index != i
        }).reduce((a, b) => {
            return a + b
        }, 0)

        if (temp > max) max = temp

        if (temp < min) min = temp

    }
    process.stdout.write(min + " " + max)
}