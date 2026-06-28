function promise(){
    return new Promise((res) => res("salom"));
}

promise()
    .then(res => console.log(res))
    .finally(() => console.log('yankunlandi'));

