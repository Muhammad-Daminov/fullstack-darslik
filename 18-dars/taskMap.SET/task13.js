//  Map'ni aylanish O'rta
// Map'dagi barcha kalit-qiymat juftliklarini for...of bilan chiqaring


const map = new Map();
map.set("Ali",60)
    .set("vali",70)
    .set("Gali",90);
for (let [key,value] of map){
    console.log(key,value)
}    
