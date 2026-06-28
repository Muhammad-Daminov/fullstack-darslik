function delay(ms){
    return new Promise(res => setTimeout(() => res("Salom Eshmat"), ms * 1000));
}

delay(3)
    .then(res => console.log(res));