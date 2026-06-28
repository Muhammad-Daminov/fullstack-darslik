class Student {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo () {
        console.log(`Name: ${this.name}, age: ${this.age}`)
    }
}

const st1 = new Student("Eshmat", 27);
st1.getInfo();