function armstrong(num) {
    return num === String(num).split("").map((n) => n ** 3).reduce((a,b) => a + b)
}

console.log(armstrong(153)); 
console.log(armstrong(370)); 
console.log(armstrong(100)); 