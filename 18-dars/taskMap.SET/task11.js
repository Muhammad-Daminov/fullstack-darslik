// Harf chastotasi O'rta
// Map yordamida matndagi har bir harf nechta marta uchraganini sanang

const str ="sadfs"
str.split("")
const map =new Map()

for (let i of str){
    if(map.has(i)){
        map.set(i,map.get(i)+1)
    }else {
        map.set(i,1)
    }
}
console.log(map)