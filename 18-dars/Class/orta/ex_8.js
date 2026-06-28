class Group {
    constructor() {
        this.students = [];
    }

    qoshTalaba(student) {
        this.students.push(student);
    }

    royxat() {
        console.log(this.students);
    }
}

const group = new Group();

group.qoshTalaba("Gishmat");
group.qoshTalaba("Eshmat");
group.qoshTalaba("Hasan");

group.royxat();