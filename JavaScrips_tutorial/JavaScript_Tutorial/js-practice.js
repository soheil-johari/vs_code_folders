function practice0() {
  // multiple practice about object using build in object method
  function Age(age) {
    this.age1 = age;
  }
  function Hi(name, agex) {
    this.name = name;
    this.agex = agex;
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
}
function Try_Catch() {
  function Person(firstn, lastn) {
    this.firstname = firstn;
    this.lastname = lastn;
  }
  let fullnamep = new Person("soheil", "johari");

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

// a complex example of encapsulation abstraction and get,set

function createPerson(name, age) {
  let _name = name; // Private variable
  let _age = age; // Private variable

  return {
    getName() {
      return _name; // Access private variable
    },
    getAge() {
      return _age; // Access private variable
    },
    setName(newName) {
      _name = newName; // update private variable
    },
    setAge(newAge) {
      // update private variable
      _age = newAge;
    },
  };
}

let person = createPerson("mohammad", 25);

console.log(person.getName()); // Output: mohammad
console.log(person.getAge()); // Output: 25

person.setName("Bob");
person.setAge(12);

console.log(person.getName()); // Output: Bob

function objectConstructor() {
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
}

function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};

let UserOne = new User("sooheilj92@gmail.com", "soheil johari");
let UserTwo = new User("abdolrahimT@gmail.com", "Abdi Timar");

let users = [UserOne, UserTwo];
console.log(users);

// first way to inherit with function
// let admin = Object.create(UserOne, {
//   email: { value: "eisa2502999@gmail.com" },
//   name: { value: "eisa dardmand" },
// });
//
// console.log(admin);

// the second one👆
function Admin(email, name) {
  User.call(this, email, name);
}

Admin.prototype = Object.create(User.prototype);

// add method to inheritate function
Admin.prototype.additionalFunc = function () {
  console.log(this.email, "has logged in as admin");
};

let admin1 = new Admin("soheiljohari@gmail.com", "soheil ragnar");
admin1.login();
admin1.additionalFunc();
console.log(admin1);

let users1 = [UserOne, UserTwo, admin1];
console.log(users1);
