class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    method () {
        return JSON.stringify(this);
    }
}

const str = new User('Abu bakr', 16);
console.log(str.method())