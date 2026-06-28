class Hisob {
    constructor (name, balance) {
        this.name = name;
        this.balance = balance;
    }
    depozit (amount) {
        (amount > 0) ? this.balance += amount : console.log("Kiritilayotgan summa musbat bo'lishi shart!");
    }
    withdraw (amount) {
        (amount < this.balance) ? this.balance -= amount : console.log("Mablag' yetarli emas!");
    }
    getBalance () {
        console.log(this.balance);
    }
}

const acc = new Hisob("Eshmat", 240);

acc.depozit(40);
acc.getBalance();
acc.depozit(-20);
acc.getBalance();

acc.withdraw(120);
acc.getBalance();
acc.withdraw(210);
acc.getBalance();