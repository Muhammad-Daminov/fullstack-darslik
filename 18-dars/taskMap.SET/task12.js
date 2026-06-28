// So'z chastotasi O'rta
// Matndagi har bir so'z nechta marta takrorlanganini Map'da saqlang.

const str ="salom dunyo salom"
const map =new Map()


for (let i of str.split(" ")){
    
    if(map.has(i)){
        map.set(i,map.get(i)+1)
    }else {
        map.set(i,1)
    }
}
console.log(map)