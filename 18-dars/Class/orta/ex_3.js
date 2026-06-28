class Square {
    a = 0;
    set setSide(side) {
        (side < 0 || side === 0) ? console.log("Son manfiy yoki 0 ga teng bo;lishi mumkin emas!") : this.a = side;
    }

    get Area () {
        return this.a * this.a;
    }
}


const square = new Square();
square.setSide = -3;
console.log(square.Area);
square.setSide = 5;
console.log(square.Area);