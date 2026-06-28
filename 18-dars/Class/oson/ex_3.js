class Doira {
    #P = 3.14;
    constructor (radius) {
        this.r = radius;
    }
    yuza () {
        return (this.#P * (this.r ** 2)).toFixed(2);
    }
}

const doira = new Doira (20);
console.log(doira.yuza());