function tubmi(num) {
    if (num > 1) {
        for (let n = 2; n <= Math.floor(num / 2); n++) {
            if (num % n == 0) {
                return false
            }
        }
        return true
    }
    else return false
}

console.log(tubmi(7));
console.log(tubmi(4));
console.log(tubmi(9));
console.log(tubmi(77));