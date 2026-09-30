//Banke ASccount
//Deposite
//Withdrawing


class BankAccount {
  private _balance: number;
  constructor(intialbalance: number) {
    this._balance = intialbalance;

  }

  //Getter to get balance  of the bank account

  public get balance(): number{
    return this._balance
  }
  //Method  Deposite Money
  public deposite(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount")
      return;
    }
    this._balance += amount

  }

  //Method  to withdraw money
  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount")
      return;
    }
    if ((this._balance - amount)  < 0 ) {
      console.log("Insufficeint Fund")
      return;
    }

  this._balance -=amount

   }
}


const myAccount = new BankAccount(1000);
myAccount.deposite(100)
myAccount.withdraw(50)
console.log("current balance ",myAccount.balance)
