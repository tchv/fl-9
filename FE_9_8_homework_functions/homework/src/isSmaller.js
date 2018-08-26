// function isSmiller(a, b) {
//     return !isBigger(a, b);
// }

function isSmaller(a, b) {
    function isBigger(a, b) {
        return a > b
    }
    if (a === b) {
        return false
    } else {
        return !isBigger(a,b)
    }
}
