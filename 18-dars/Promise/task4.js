const promise = () => {
    return new Promise(res => res("salom"));
}

promise()
    .then((res) => {return('xayr')})
    .then((res2) => {console.log(res2)})