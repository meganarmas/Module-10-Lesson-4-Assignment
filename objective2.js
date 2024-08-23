// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

function account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
};

// Task 2: Implement methods within the Account object to deposit and withdraw funds.

account.prototype.deposit = function (amount){
    this.balance = amount;
    console.log(`Deposited: $${amount}. New balance: $${this.balance}`)
};

account.prototype.withdrawal = function (amount){
    if (amount <= this.balance){
        this.balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
    }
    else{
        console.log('Insufficient funds.');
    }
}

// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.

account.prototype.calculateCompoundInterest = function (rate, years){
    let compoundAmount = this.balance * Math.pow((1 + rate / 100), years);
    console.log(`Compound Intererst after ${years} year with a rate of ${rate}%: $${compoundAmount.toFixed(2)}.`);
}

let myaccount = new account


myaccount.deposit(200);
myaccount.withdrawal(75);
myaccount.calculateCompoundInterest(15, 20);