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

function tubSonlar(a, b) {
    arr = [];
    
    if (a < b) {
        for (a; a <= b; a++) {
            if(tubmi(a)) {
                arr.push(a)
            }
        }
        return arr
    }
    else return [];
}

console.log(tubSonlar(2,10));
console.log(tubSonlar(10, 20));
console.log(tubSonlar(8, 10));