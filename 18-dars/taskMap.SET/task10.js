//  Ikki massiv birlashmasi O'rta
// Ikki massivni Set yordamida takrorsiz birlashtiring. Misol: ([1,2],[2,3]) -> [1,2,3]
const arr = [1,2];
const arr2 = [2,4];

const set = new Set (arr.concat(arr2))
console.log(set)