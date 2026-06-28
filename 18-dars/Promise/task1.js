const promise = new Promise(res => res("bajarildi"));

promise
    .then(res => console.log(res));