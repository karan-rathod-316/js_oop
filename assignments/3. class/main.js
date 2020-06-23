// //**** Class, Constructors and Methods ****
// class Rectangle {
//     // passing parameters 
//     constructor(_width, _height, _color) {

//             this.width = _width;
//             this.height = _height;
//             this.color = _color;
//         }
//         // Passing methods
//     getArea() {
//         return this.width * this.height
//     }

//     printDescription() {
//         console.log(`I am a rectangle of ${this.width} and ${this.height} and I am ${this.color}`)
//     }
// }

// // **** Getters and Setters ****

// class Square {
//     constructor(_width) {
//             this.width = _width;
//             this.height = _width;
//             this.numberOfReqForArea = 0;
//         }
//         // creating getter - this is just a method
//     get area() {
//             this.numberOfReqForArea++;
//             return this.width * this.height;
//         }
//         //creating setter - this changes the entire parameters of the constructor
//     set area(area) {
//         this.width = Math.sqrt(area)
//         this.height = this.width

//     }
// }

// let square1 = new Square(4);
// console.log(square1.area);

// square1.area = 25; //Setter that changes the height and width based on the input
// console.log(square1.area) //1
// console.log(square1.area) //2
// console.log(square1.area) //3
// console.log(square1.area) //4
// console.log(square1.numberOfReqForArea) //4

// **** Static Methods**** - Utility methods that are independent

// class Square2 {
//     constructor(_width) {
//             this.width = _width;
//             this.height = _width;
//         }
//         //creating static method - You don't need the "this" keyword with it 
//     static equals(a, b) {
//         return a.width * a.height === b.width * b.height
//     }
//     static isValidDimensions(width, height) {
//         return width === height;
//     }
// }


// let square2 = new Square2(8)
// let square3 = new Square2(9)
// console.log(square2)
// console.log(square3)
// console.log(Square2.equals(square2, square3)) ////output :false; We pass the static function directly on the class, like we have done on Square2 here
// console.log(Square2.isValidDimensions(6, 6)) //true

//****Extends/Inheritance - Parent and Child Classes****

// class Person {
//     constructor(_name, _age) {
//         this.name = _name;
//         this.age = _age;
//     }
//     describe() {
//         console.log(`I am a programmer, my name is ${this.name} and I am ${this.age} years of old`)
//     }

// }

// class Programmer extends Person {
//     constructor(_name, _age, _yearsofExperience) {
//         super(_name, _age) //calls the properties in parent class over here

//         // Custom behavior
//         this._yearsofExperience = _yearsofExperience
//     }
//     code() {
//         console.log(`${this.name} is coding`)
//     }

// }

// // let person1 = new Person("Karan", 29);
// // let programmer1 = new Programmer("Poachie", 10, 5)

// // console.log(person1)
// // console.log(programmer1)
// //     // person1.code() // won't work as it is the base class which doesn't have that function
// // programmer1.code() //Poachie is coding
// // programmer1.describe() //I am Poachie and I am 10 years old


// const programmers = [
//     new Programmer("Karan", 30, 1),
//     new Programmer("Poachie", 10, 5)
// ]

// function developSoftware(programmers) {
//     //Develop Software
//     for (let programmer of programmers) {
//         programmer.code()
//     }
// }

// developSoftware(programmers)

////****Polymorphism****
//It means redefining a method in a derived child class

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     makeSounds() {
//         console.log("Generic Animal Sound!")
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//             super(name)
//         }
//         //below is polymorphism in action
//     makeSounds() {
//         super.makeSounds(); //returns "Generic Animal Sounds" - we called the makesounds function within our new makesounds function. 
//         console.log("Woof Woof")
//     }
// }

// const a1 = new Animal("Dog")
// const a2 = new Dog("Poachie")
// a1.makeSounds() //Generical Animal Sounds
// a2.makeSounds() //Woof Woof(if we comment it out, it'll show "Generic Animal SOunds")

////****Classes in Practice***

//listBinding
class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.textList = []
    }


    static createListItem(text) {
        //Makes an li tag with text passed in
        const li = document.createElement('li');
        li.textContent = text;
        return li;
    }


    update() {
        // Remove existing <li> elements tag
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild)
        }

        //Full ul tags with li
        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text))
        }
    }
    add(text) {
        this.textList.push(text);
        this.update();
    }
    remove(index) {
        this.textList.splice(index, 1);
        this.update();
    }

}

//Bind JS and HTML

const myList = document.getElementById('myList')

const listBind = new ListBinding(myList)

//running our code
//add
listBind.add("Coding")
listBind.add("Writing")
listBind.add("Eating")


//remove
listBind.remove("1")