function twoSum(arr, sum) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if(sum === arr[i] + arr[j]){
                return [arr[i],arr[j]]
            }
        }
    }
}
console.log(twoSum([2,7,11,15], 9));
