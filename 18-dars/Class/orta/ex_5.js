class BankAccount {
    #balance = 0;
    constructor (id, name, balance) {
        this.id = id;
        this.name = name;
        this.#balance = balance;
    }
    depozit (amount) {
        (amount > 0) ? this.#balance += amount : console.log("Kiritilayotgan summa musbat bo'lishi shart!");
    }
    getBalance () {
        console.log('$',this.#balance);
    }
}

const acc = new BankAccount(2, "Gishmat", 300);
acc.depozit(40);
acc.getBalance();