const promise = function(){
    return new Promise(res => res(3));
}

promise()
    .then(res => {return res * 2})
    .then(res => console.log(res))