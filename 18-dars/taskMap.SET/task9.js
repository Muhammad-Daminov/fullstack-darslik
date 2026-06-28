//  Ikki massiv kesishmasi O'rta
// Ikki massivning umumiy elementlarini Set yordamida toping. Misol: ([1,2,3],[2,3,4]) ->
// [2,3].

const arr = [1,2,3];
const arr1 = [2,3,4];
let arr3 = [];
for (let i of arr){
    if (arr1.includes(i)){
        arr3.push(i)
    }
}
console.log(arr3)