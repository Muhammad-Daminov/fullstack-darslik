function ikkilik(n) {
    let result = "";
    
    for (; n > 0; n = Math.floor(n / 2)) {
        result = (n % 2) + result;
    }
    
    return result; 
}


console.log(ikkilik(5));
console.log(ikkilik(10));
console.log(ikkilik(1));