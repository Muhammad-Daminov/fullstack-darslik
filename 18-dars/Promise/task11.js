async function promise(ms){
    setTimeout(() => console.log("ishlamoqda"), ms * 1100);
}

await promise(2);