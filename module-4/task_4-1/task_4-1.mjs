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
  constructor(type, balance) {
    this.type = type;
    this.balance = balance;
  }
  toString() {
    return this.type;
  }
  setType(newType) {
    printOut("Account type changed from " + this.type + " to " + newType);
    this.type = newType;
  }
  getBalance() {
    return this.balance;
  }
  deposit(Aamount) {
    this.balance += Aamount;
  }
  withdraw(Aamount){
    if (Aaomunt > this.balance){
      printOut("Insufficient funds")
    } else {
      this.balance -= Aamount;
      printOut("Withdrew " + Aamount + ". New balance: " + this.balance);
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
printOut("Deposit of " + deposit + ", new balance is " + myAccount.getBalance());
printOut("Withdrawl of " + withdrawl + ", new balance is " + myAccount.getBalance());
printOut("My account balance is " + myAccount.getBalance());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
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
