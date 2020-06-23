console.log(this.document === document); // True

console.log(this === window); //True

var myFunction = function() {
    console.log(this);
};
myFunction(); // Window https://www.google.com/

function f1() {
    "use strict";
    return this;
}
console.log(f1() === window); //False

function foo() {
    console.log("Simple function call");
    console.log(this === window);
}

foo(); //Simple function call
//true

console.log(this === window)(
    // TypeError: console.log(...) is not a function

    // This for IIFE
    function() {
        console.log("Anonymous function invocation");
        console.log(this === window);
    }
)(); //True

// This for IIFE in strict mode
function foo() {
    "use strict";
    console.log("Simple function call");
    console.log(this === window);
}

foo(); // Simple function call
//false

var myObject = {};
myObject.someMethod = function() {
    console.log(this);
};
myObject.someMethod(); //Object { someMethod: someMethod() }

// This refers to the New Instance

function Person(fn, ln) {
    this.first_name = fn;
    this.last_name = ln;

    this.displayName = function() {
        console.log(`Name: ${this.first_name} ${this.last_name}`);
    };
}

let person = new Person("John", "Reed");
person.displayName(); // Output
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Output

//This refers to the invoker Object
function foo() {
    "use strict";
    console.log("Simple function call");
    console.log(this === window);
}

let user = {
    count: 10,
    foo: foo,
    foo1: function() {
        console.log(this === window);
    }
};

user.foo(); // Name: John Reed debugger eval code:6:17
//Name: Paul Adams debugger eval code:6:17
//Simple function call debugger eval code:18:13
//false

let fun1 = user.foo1;
fun1(); // True
user.foo1(); // False

//this will call apply and bind

this.x = 9;
var module = {
    x: 81,
    getX: function() {
        return this.x;
    }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX(); //9

var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

// Call with new constructor

function Person(fn, ln) {
    this.first_name = fn;
    this.last_name = ln;

    this.displayName = function() {
        console.log(`Name: ${this.first_name} ${this.last_name}`);
    };
}

let person = new Person("John", "Reed");
person.displayName(); // Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Name: Paul Adams

person.displayName.call(person2); // Name: Paul Adams

// Guess the output of the following

const a = {
    a: "a"
};
const obj = {
    getThis: () => this,
    getThis2() {
        return this;
    }
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Output
obj.getThis(); //Window https://www.google.com/

// Output
obj.getThis.call(a); //Window https://www.google.com/

// Output
obj.getThis2(); //Object { getThis: getThis(), getThis2: getThis2(), getThis3: getThis(), getThis4: getThis2() }

// Output
obj.getThis2.call(a); //Location https://www.google.com/

// Output
obj.getThis3();

// Output
obj.getThis3.call(a); //Window https://www.google.com/

// Output
obj.getThis4(); //Object { getThis: getThis(), getThis2: getThis2(), getThis3: getThis(), getThis4: getThis2() }

// Output
obj.getThis4.call(a); //Object { getThis: getThis(), getThis2: getThis2(), getThis3: getThis(), getThis4: getThis2() }