const promise1 = new Promise((res) => {
    setTimeout(() => res("birinchi"), 1000)
});
const promise2 = new Promise((res, rej) => {
    setTimeout(() => res("uchinchi"), 3000)
});
const promise3 = new Promise((res) => {
    setTimeout(() => res("ikkinchi"), 2000);
});

promise1
    .then(res => console.log(res))
promise2
    .then(res => console.log(res))
promise3
    .then(res => console.log(res))