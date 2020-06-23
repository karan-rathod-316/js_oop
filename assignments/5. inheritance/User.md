# Inheritance

User
  -properties
    -name
    -score
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1

PaidUser
  -properties
    -name
    -score
    -balance
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1
    -increaseBalance: returna balance decreased by 1

Using Inheritance convert the above into following patterns.

1. Prototypal Pattern
2. Pseudoclassical Pattern
3. Classes

class User {
  constructor (name) {
    this.name = name;
    this.score = 0;
  }
  increaseScore () {
    return ++this.score;
  }
  decreaseScore () {
    return --this.score;
  }
}

let poachie = new User("poachie")

class PaidUser extends User {
  constructor(name, balance) {
    super(name);
    this.balance = balance;
  }
  
  increaseBalance() {
    return this.balance++
  }
}

let panther = new PaidUser("Panther", 10);
