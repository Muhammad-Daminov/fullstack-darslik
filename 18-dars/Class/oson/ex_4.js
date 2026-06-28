class Book {
    constructor (title, author) {
        this.title = title;
        this.author = author;
    }

    getInfo () {
        console.log(`Title: ${this.title}, Author: ${this.author}`)
    }
}

const book1 = new Book("1001 kecha", "Abubakir");
book1.getInfo();
const book2 = new Book("Binavsha shuvlasi", "Eshmat");
book2.getInfo();
const book3 = new Book("The moon", "Toshmat");
book3.getInfo();