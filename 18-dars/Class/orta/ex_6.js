class Animal {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    sound () {
        console.log("miyaauv");
    }
}

class Dog extends Animal{
    constructor (name, age) {
        super(name, age);
    }
    sound () {
        console.log("vov-vov");
    }
}

const dog = new Dog("Bo'ri bosar", 3);
dog.sound();