//  Ayirma (difference) O'rta
// Birinchi massivda bor, ikkinchisida yo'q elementlarni Set bilan toping. Misol: ([1,2,3],[2])-> [1,3].

const arr = [1,2,3];

const arr2 =[2];
const arr3 = new Set([])

for (let i of arr){
    if(!arr2.includes(i)){
        arr3.add(i)
    }
}
console.log(arr3)