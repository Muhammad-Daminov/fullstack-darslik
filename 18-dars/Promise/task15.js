const promise = function(num){
    return new Promise(res => {
        setTimeout(() => res(num), 3000);
    })
};

promise(5)
    .then(res => {return res * 2})
    .then(res => {return res + 10})
    .then(res => console.log(res));