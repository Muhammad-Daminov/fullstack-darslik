class Animal {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    eating () {
        console.log("eating...")
    }
}

class Dog extends Animal{
    constructor (name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    getInfo () {
        console.log(` Name: ${this.name}\n age: ${this.age}\n breed: ${this.breed}`);
    }
}

const dog = new Dog("Bo'ri bosar", 2, "haski");
dog.getInfo();