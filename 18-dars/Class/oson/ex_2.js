class Car {
    constructor (bramd, year) {
        this.brand = bramd;
        this.year = year;
    }

    getInfo () {
        console.log(`Brand: ${this.brand}, year: ${this.year}`)
    }
}

const car = new Car("Porsche", 2019);
car.getInfo();