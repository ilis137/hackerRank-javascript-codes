function birthdayCakeCandles(ar) {
    const max = Math.max.apply(null, ar)

    let count = 0;
    ar.forEach((el) => {
        if (el == max)
            count++;
    })
    return count
}