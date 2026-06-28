const promise = (age) => {
    return new Promise((res, rej) => {
        if(age > 18){
            res("kirishga ruxsat");
        } else {
            rej("ruxsat berilmadi");
        }
    })
}

promise(19)
    .then(res => console.log(res))
    .catch(rej => console.log(rej));