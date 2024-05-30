class BankAccount {
    constructor(accountHolder, initialBalance = 0) {
      this.accountHolder = accountHolder;
      this.balance = initialBalance;
      this.transactions = [];
      this.addTransaction('Initial deposit', initialBalance);
    }
  
    addTransaction(type, amount) {
      const date = new Date().toLocaleString();
      this.transactions.push({ type, amount, date });
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        this.addTransaction('Deposit', amount);
        return `Deposit successful. New balance: $${this.balance}`;
      } else {
        return 'Deposit amount must be positive.';
      }
    }
  
    withdraw(amount) {
      if (amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
          this.addTransaction('Withdrawal', amount);
          return `Withdrawal successful. New balance: $${this.balance}`;
        } else {
          return 'Insufficient funds.';
        }
      } else {
        return 'Withdrawal amount must be positive.';
      }
    }
  
    checkBalance() {
      return `Account balance: $${this.balance}`;
    }
  
    getTransactionHistory() {
      return this.transactions;
    }
  }
  // Create new bank accounts
const account1 = new BankAccount('Alice', 1000);
const account2 = new BankAccount('Bob', 500);

// Perform operations
console.log(account1.deposit(500)); // Deposit $500 to Alice's account
console.log(account1.withdraw(300)); // Withdraw $300 from Alice's account
console.log(account2.deposit(200)); // Deposit $200 to Bob's account
console.log(account2.withdraw(700)); // Attempt to withdraw $700 from Bob's account

// Check balances
console.log(account1.checkBalance()); // Check balance for Alice's account
console.log(account2.checkBalance()); // Check balance for Bob's account

// Print transaction history
console.log(account1.getTransactionHistory()); // Get transaction history for Alice's account
console.log(account2.getTransactionHistory()); // Get transaction history for Bob's account

  
  