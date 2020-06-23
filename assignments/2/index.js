/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
    return {
        name: name,
        age: age,
    }


}

var vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
    greet: function() {
        console.log("Hello")
    }
}

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
    var person = Object.create(personStore);
    person.name = name;
    person.age = age;
    person.greet = personStore.greet;
    return person;

}

var sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

personStore.introduce = function() {
        return `Hi, my name is ${this.name}`
    }
    // sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
    this.greet = function() {
        return console.log("Hello")
    }
}


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
    var person = new PersonConstructor;
    person.name = name;
    person.age = age;
    return person
}

var mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
PersonConstructor.prototype.introduce = function() {
    return `Hi, my name is ${this.name}`
}

mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
    constructor(name) {
        this.name = name;

    }

    greet() {
        console.log('Hello')
    }

}


// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

class DeveloperClass extends PersonClass {
    // constructor(name) {
    //     super(name)
    // }
    introduce() {
        return `Hello world, my name is ${this.name}`
    }

}

// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
    sayType: function() {
        console.log("I am a " + this.type);
    }
}

function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
}

var adminFunctionStore = Object.create(userFunctionStore);

function adminFactory(name, score) {
    let newObj = new userFactory(name, score);
    newObj.type = 'Admin';
    return newObj;
}

/* Put code here for a method called sharePublicMessage*/
adminFunctionStore.__proto__.sharePublicMessage = function() {
    console.log('Welcome users!');
}

var adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"