function ekub1(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let residue = a % b;
        a = b;
        b = residue;
    }
    
    return a;
}

function ekub2(a, b) {
    return !b ? a : ekub2(b, a % b)
}


console.log(ekub1(12, 18));
console.log(ekub1(7, 13));
console.log(ekub1(20, 5));

console.log(ekub2(12, 18));
console.log(ekub2(7, 13));
console.log(ekub2(20, 5));




