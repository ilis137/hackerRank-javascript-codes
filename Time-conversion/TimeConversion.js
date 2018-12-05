function timeConversion(s) {
    /*
     * Write your code here.
     */
    const regex = /PM$/
    let hour = parseInt(s.substring(0, 2), 10)

    if (regex.test(s)) {

        if (hour >= 1 && hour < 12) {
            hour += 12
        }

    } else {
        if (hour == 12) {
            hour = 0
        }
    }
    let hourstring = "";
    if (hour < 10) {
        hourstring = "0" + hour
    } else {
        hourstring = "" + hour;
    }



    return s.replace(s.substring(0, 2), hourstring).substring(0, s.length - 2)
}