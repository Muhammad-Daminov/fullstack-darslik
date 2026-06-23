function moveZeroes(arr){
    arrNum = [];
    arrZero = [];
    for (let i of arr){
        i != 0 ? arrNum += i : arrZero += i;
    };
    return arrNum.concat(arrZero);
    
}


console.log(moveZeroes([0,1,0,3,12]));