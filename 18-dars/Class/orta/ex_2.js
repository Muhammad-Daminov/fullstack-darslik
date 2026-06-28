class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person{
    constructor (name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    getInfo () {
        console.log(` Name: ${this.name}\n Age: ${this.age}\n Grade: ${this.grade}`)
    }
}

const st = new Student("Toshmat", 24, 78);
st.getInfo();