function promise(){
    return new Promise((res, rej) => rej("Rad etildi"));
}


promise()
    .catch(rej => console.log(rej));