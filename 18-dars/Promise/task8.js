function user(){
    return new Promise(res => setTimeout(() => res({name : 'eshmat', age : 19}), 2000));
}

user()
    .then(res => console.log(res))