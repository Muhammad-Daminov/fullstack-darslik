//  Map'ni obyektga O'rta
// Map'ni oddiy obyektga aylantiring va konsolga chiqaring.

const map = new Map();
map.set("Ali",60)
    .set("vali",70)
    .set("Gali",90);

    console.log(Object.fromEntries(map))

    