// multiple practice about object using build in object method
function Age(age) {
  this.age1 = age;
}
function Hi(name, agex) {
  this.name = name;
  this.agex = agex;
  console.log(typeof `${this.name}`);
  this.draw = function () {
    console.log(`Hello ${this.name}`);
  };
  this.draw1 = function () {
    console.log(`${this.name} age is ${this.agex}`);
  };
}

let agee = new Age(18);
let propmt = new Hi("soheil", agee.age1);

propmt.draw();
propmt.draw1();

let y = Object.create(propmt);
y.name = "ahmad";
y.agex = 19;
y.draw();
y.draw1();

function Try_Catch() {
  function Person(firstn, lastn) {
    this.firstname = firstn;
    this.lastname = lastn;
  }
  let fullnamep = new Person("soheil", "johari");

  let person11 = {
    get fullname11() {
      return fullnamep.firstname + " " + fullnamep.lastname;
    },
  };

  function errorTest() {
    let Fullname = [];
    Fullname.push(fullnamep.firstname);
    Fullname.push(fullnamep.lastname);
    try {
      if (typeof Fullname[0] !== "string" || typeof Fullname[1] !== "string") {
        throw new Error("value is not a string");
      }
    } catch (error) {
      console.log("An error occurred:", error.message);
      console.log("Stack trace:", error.stack);
    } finally {
      console.log("This will always be excuted, regadless of an error.");
    }
  }
  errorTest();

  // another example

  function divide(a, b) {
    try {
      if (b === 0) {
        // throwing a custom error
        throw new Error("Division by zero is not allowed!");
      }
    } catch (error) {
      // handling the error
      console.log("An error occurred:", error.message);

      // Accessing the error stack trace
      console.log("Stack trace:", error.stack);
    } finally {
      console.log("This will always be excuted, regadless of an error.");
    }
  }
  divide(15, 3);
}

// Parent object constructor
function Animal(name) {
  this.name = name;
}
// Adding a method tho the porototype
Animal.prototype.sayname = function () {
  console.log("My name is " + this.name);
};

// Child object constructor inheriting from Animal
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

//Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.mammal = function () {
  console.log(this.name + " is my name and i have " + this.breed);
};
let animal = new Animal("soheil");
let dog = new Dog(animal.name, "haski");

animal.sayname();
dog.mammal();
