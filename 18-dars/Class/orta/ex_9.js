class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    set price(value) {
        if (value < 0) {
            console.log("Narx manfiy bo'lishi mumkin emas");
            return;
        }
        this._price = value;
    }

    get price() {
        return this._price;
    }
}

const product1 = new Product("Telefon", 500);

console.log(product1.price);

product1.price = -100;

console.log(product1.price);