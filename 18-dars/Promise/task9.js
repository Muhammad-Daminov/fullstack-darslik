const promise = (ms) => {
    return new Promise((res, rej) => {
        if(ms > 0.5){
            res("son 0.5 dan katta");
        } else {
            rej("son 0.5 dan kichik");
        }
    })
}

promise(Math.random())
    .then(res => console.log(res))
    .catch(rej => console.log(rej))