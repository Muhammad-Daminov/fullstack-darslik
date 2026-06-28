function promise(){
    return new Promise(res => setTimeout(() => res("Tayyor"), 2000));
}

promise()
    .then(res => console.log(res));