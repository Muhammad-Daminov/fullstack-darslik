function engKopTakror(arr) {
    let result = new Map();
    
    for (let ell of arr) {
        if (result.has(ell)) {
            result.set(ell,result.get(ell)+1);
        }
        else {
            result.set(ell,1);
        }
    }
    
    const maxVal = Math.max(...result.values());

    let maxKey = 0;
    for (let [key, value] of result.entries()) {
        if (value === maxVal) {
            return key;
        }
    }
}


console.log(engKopTakror([1, 2, 2, 3, 2]));
console.log(engKopTakror([4, 4, 5, 5, 5]));
console.log(engKopTakror([7])); 