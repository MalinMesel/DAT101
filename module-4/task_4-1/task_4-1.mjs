"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const accountTypes = {
  brukskonto: "Brukskonto",
  sparekonto: "Sparekonto",
  kredittkonto: "Kredittkonto",
  pensjonistkonto: "pensjonistkonto"
};

printOut(Object.values(accountTypes).join(", "));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
class TAccount {
  constructor(type, balance = 0) {
    this.type = type;
    this.balance = Number(balance) || 0;
    this.withdrawls = 0;
  }
  toString() {
    return this.type;
  }
  setType(newType) {
    printOut("Account type changed from " + this.type + " to " + newType);
    this.type = newType;
    this.withdrawls = 0;
  }
  getBalance() {
    return this.balance;
  }
  deposit(Aamount) {
    this.balance += Aamount;
    this.withdrawls = 0;
    return this.balance;
  }
  canWithdraw() {
    switch (this.type) {
      case "Saving":         
      case "Sparekonto":      
        return this.withdrawals < 3;
      case "Pension":         
      case "Pensjonistkonto": 
        return false;
      default:
        return true;
    }
  }
  withdraw(Aamount){
    if (Aamount > this.balance){
      printOut("Insufficient funds");
      return this.balance;
    } else {
      this.balance -= Aamount;
      return this.balance;
    }
  }
}

const myAccount = new TAccount("Brukskonto");
printOut("my Acount: " + myAccount.toString());
myAccount.setType("Sparekonto");
printOut("my Acount: " + myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const depositAmount = 100;
const withdrawAmount = 25;

const balanceAfterDeposit = myAccount.deposit(depositAmount);
printOut("Deposit of " + depositAmount + ", new balance is " + balanceAfterDeposit);
const balanceAfterWithdraw = myAccount.withdraw(withdrawAmount);
printOut("Withdraw of " + withdrawAmount + ", new balance is " + balanceAfterWithdraw);

printOut("My account balance is " + myAccount.getBalance());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
switch (myAccount.type()){
  default:
    text = "Du kan ta ut så mange ganger du vil.";
    break;
  case "Sparekonto":
    text = "Du kan ta ut 3 ganger"; 
}
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
