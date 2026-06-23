const containsDuplicate = function(arr){
    let arr2 = new Set(arr);
    return arr2.length !== arr.length ? true : false;
}

console.log(containsDuplicate([1, 2, 3, 1]));