// comment
console.log("soheil");
console.log(2 + 2);

// difining variable by using let
let name = "soheil";
console.log(name);

name = "gol";
console.log(name);

// constant
const name1 = "soheil";
console.log(name1);

// promitive(value) types
// string
// number
// bool
// undefined
// null
let name2 = "soheil"; // string
let age = 19; // number
let admin = true; // bool
let def = undefined; // undefined
let product = null; //=> object

// Reference Types
// Object
// Array
// function

let person = {
  name: "soheil",
  age: 19,
  admin: true,
};
console.log(person);
console.log(person.age); // special value
console.log(person["admin"]);

// array
let users = ["mohammad", "ali"];
console.log((users[2] = "sabi"));
console.log(users[2]);
users[3] = "ahmad";
users[0] = "abdi";
console.log(users);
users[5] = true;

// functions
// 1

function greet() {
  console.log("hello world");
  let calc1 = 2 + 2;
  console.log(calc1);
}
greet();

// 2

function greet1(name, age) {
  console.log("hello " + name);
  console.log("your age is " + age + " " + name);
}
greet1("soheil", 19);

let result = greet1("soheil", 19);
console.log(result);

// 3

function square(number) {
  let result1 = number * number;
  return result1;
}

let fresult = square(34);
console.log(fresult);

// top 7 operators
// Assignment operators
// Comparison operators
// Arithmetic operators
// Bitwise operators
// Logical operators
// Conditional (ternary) operators
// String operators

// 1 Arithmetic
let x = 10;
let y = 5;
console.log(x + y);

// 2 appointment operators js
console.log((x += y));

// 3 Comparison operators
// > <  >= <= == !=
let x1 = 1;
console.log(x1 > 1);
console.log("3" == 3);

// 4 ternary operators
let athenticated = true;
let buttonText = athenticated === true ? "dashboard" : "login";
console.log(buttonText);

let accespt = 12;
let values = accespt <= 18;
let memmber = values === true ? "class not begin" : "class will begin soon";
console.log(memmber);

// 5 logical:
//logical AND
// &&
console.log(true && true && false && true);
//example:
let ProductCount = 3;
let ProductPrice = 1000;
let credit = 1200;
let buy = ProductCount > 0 && credit > ProductPrice; /* like and in python */
console.log(buy);

//logical OR
// ||
//example:
let AvaliableAge = 17;
let gender = "male";
let sign_in = AvaliableAge >= 18 || gender == "male"; /* like or in python */
console.log(sign_in);

//logical NOT
/* it's just make everything upside down */
console.log(!sign_in);

// false result in ( false || undifined, null, 0, ", Nan"

function updateClock() {
  let now = new Date(); // Get the current time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format the time
  let timeString =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
  if (hours > 6 && hours < 12) {
    console.log("good morning");
    document.getElementById("message").textContent = "Good morning";
  } else if (hours.pm >= 12 && hours < 18) {
    console.log("good afternoon");
    document.getElementById("message").textContent = "Good afternoon";
  } else {
    console.log("good evening");
    document.getElementById("message").textContent = "Good evening";
  }

  // Update the clock element
  document.getElementById("clock").textContent = timeString;
}
// Execute updateClock() immediately to show the initial message
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

// switch-case it is like if...else but have little differences
let role = "admin";

switch (role) {
  case "admin":
    console.log("admin user");
    break;
  case "guest user":
    console.log("guest user");
    break;
  default:
    console.log("unknown user");
}

// the same thing in if condition will be like this
if (role === "guest") {
  console.log("guest user");
} else if (role === "admin") {
  console.log("admin user");
} else {
  console.log("unknown user");
}

// Types of loop
// while
// do while
// for .. in
// for .. of

for (let i = 0; i < 5; i++) {
  if (i % 2 == 0) console.log("soheil have powerful mind");
  console.log(i);
}

// while loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// do while
function do_while() {
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 1010);
}
do_while();

// forin loop
const person1 = { name: "mohammad", age: 27 };
const colors = ["red", "blue", "green"];
for (const key in person1) {
  console.log(key);
  console.log(person1);
}

for (const index in colors) {
  console.log(index);
  console.log(colors[index]);
}

// forof loop
for (const color of colors) {
  console.log(color);
}

let i1 = 0;

while (i1 <= 10) {
  if (i1 == 5) {
    i1++;
    break;
  }
  console.log(i1);
  i1++;
}

// object()
// In JavaScript, methods are functions that are defined as
// properties of an object indeed object is a collection
// of properties
let circle /* object*/ = {
  radius: 1 /* properties*/,
  location: /* object properties inside an object*/ {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: /* method */ function () {
    //draw is a method defined as a property of the object
    console.log("draw");
  },
};

circle.draw();

function Object() {
  // Camel Notation: oneTwoThree
  // Pascal Notation: OneTwoThree

  // factory function: (A factory function can be defined
  // as a function that creates an object and returns it)
  // with this method you can make several object with
  // different properties and gather together logics
  function createCircle /* Camel Notation*/(radius) {
    return {
      radius,
      draw() {
        console.log("draw");
      },
    };
  }

  let circle1 = createCircle(1);
  console.log(circle1);
  let circle2 = createCircle(2);
  console.log(circle2);

  function constructor_function() {
    // constructor function
    /* this another way to make an object
  a special function that creates and 
  initializes an object instance of a class*/

    function Circle /*Pascal Notation*/(radius) {
      this.radius = radius; // (this) refrence an empty object
      // which we read property or set a property
      this.draw = function () {
        console.log("draw", $(this.radius));
      };
    }

    const cricle = new Circle(1); //! Instead of using the new keyword
    // with a constructor function, you can use object literals or
    // factory functions to create objects in JavaScript.

    /* new keyword performs 4 steps when we use it in constructor
  function
  1: Create a new empty object
  2: Sets the "this" keyword to point to the newly created object.
  3: Executes the code inside the constructor functions
  which initializes the object by setting its properties and defining its methods
  4: Return the newly created object. */
    console.log(cricle);
  }
  constructor_function();
}
/* in js dynamic object properties refer to the ability to add 
or access properties of an object using variables or dynamic 
values instead of static property names. it allows you to manipulate 
objects more flexibly by dynamically setting or retrieving properties at runtime*/
const obj = {};
// Adding a property dynamically
const propertyName = ["name"];
const propertyValue = ["john", "farhad"];
objpropertyName = propertyValue;
console.log(obj);
for (let key in obj) {
  console.log(obj[key].join(" "));
}
console.log(obj["name"]); // ouput: ["john, "farhad]
//or
const joinedvalues = obj["name"].join(", "); // Concatenate the values with a comma
// and a space between them

console.log(joinedvalues); // output: john, farhad

// Accessing a property dynamically
const dynamicProperty = "age";
obj[dynamicProperty] = 25;

console.log(obj["age"]);
//or
//console.log(obj.age)

// the cause that proves functions are object
// Defining a function

function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Accessing properties of the function
console.log(greet.name); // Output: greet
console.log(greet.length); // Output: 1 (number of expected parameters)

// Assigning the function to a variable
const sayHello = greet;
sayHello("ahmad");

// Calling the function through the variable
sayHello("John"); // Output: Hello, John!

// Adding a property to the function
greet.language = "English";
console.log(greet.language); // Output: English

function PrimitiveTypeVsRefrenceType() {
  // we want to prove thst we can't change primitive value becuse its stored by value
  // without initial address
  let nummber = 10;
  nummber.length = 0;
  console.log(number);
  function increase(number) {
    return number++;
  }
  console.log(nummber);
  number = increase(nummber);
  console.log(number); // Output: 11
  console.log(nummber); // Output: 10

  // to fix that we're gonna use object instance; which then we
  // got an initial address to use in global code and can edit the value
  // inside the variable
  let x = { number1: 10 };
  function increase(x) {
    x.number1++;
    console.log(x.number1);
  }
  increase(x); // correct
  console.log(x);
  increase(x.number1); // یعنی از ادرس ایکس مقدار نامبر 1
  console.log(x.number1);
  // this not gonna work because by using increase(x.number1)
  // we carring the value of the x and we know we can't change the
  // value directly but instead were gonna use just x to carry
  // the address of the variable then we can change the value by using
  // object

  /* this is correct */
  let x1 = { number1: 10 };

  function increase(obj) {
    obj.number1++;
  }
  /* In JavaScript, objects are compared based on their references or memory addresses,
  not their property values.*/

  increase(x1);
  console.log(x1.number1);
}

/* Object constructor */
/* 1) Object.create(proto [, propertiesobject] : this method
  creates a new object with specified prototype object and optional properties*/
function Obj_Create() {
  function Greet(name, z) {
    this.name = name;
    this.z = z;
    this.log = function () {
      console.log(`hello ${this.name}!, ${this.z}`);
    };
  }

  let x = new Greet("soheil", 20);
  x.log();

  let y = Object.create(x, {
    name: { value: "sabihe" },
    z: { value: "calc" },
  });

  y.log();
  console.log();
}
Obj_Create();

function obj_properties() {
  /* Object.defineProperties(obj, prop: ,prop:);
This method creates a new object with the specified prototype
object and optional properties*/
  const obj = {};

  Object.defineProperties(obj, {
    name: {
      value: "soheil",
      writable: false, // since writable is false the value
      // is read-only if writable is true you can modify the value dynamicly
      configurable: false, // the property connot be deleted if configurable is false
      enumerable: false,
    },
    age: {
      value: 20,
      enumerable: true,
    },
  });
  obj.name = "dad"; // no effect as the writable is false
  delete obj.name; // no effect as the property is not configurable

  console.log(obj.name); // output: soheil

  console.log(Object.keys(obj)); // no effect for name property
  // because enumerable is false // output: [ 'age' ]
}

obj_properties();

function assign_obj() {
  /* This method copies the values of all enumerable properties
from one or more source object into a target object.*/

  const target = { a: 10, b: "4" };
  const source = { j: "kolly", justice: "in low distance" };

  const bitch = Object.assign(target, source);
  console.log(bitch);
}

function freeze_obj() {
  /* This method prevents modifications to an object, such 
as adding or moving or changing property values*/

  const person = { name: "john", age: 30 };

  Object.freeze(person);
  delete person.name; // we can't delete because of freeze method
  console.log(person);
}

function BestAssign() {
  // best way to copies object property and assign it
  // to another object

  let adv = {
    name: "soheil",
    lname: "johari",
    draw() {
      console.log(`Hello ${this.name} ${this.lname}`);
    },
  };

  let adv_2 = {
    fname: "ahmad",
    drawf() {
      console.log(`Hello, ${this.fname}`);
    },
  };

  const obj = { ...adv, ...adv_2 };
  obj.draw();
  obj.drawf();
  console.log(obj);
}
BestAssign();
// Math method

// get a random number between two digit
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary(40, 20));

/* Certainly! Here are some important math methods available in JavaScript:

1. `Math.round()`: Rounds a number to the nearest integer.
2. `Math.floor()`: Returns the largest integer less than or equal to a given number.
3. `Math.ceil()`: Returns the smallest integer greater than or equal to a given number.
4. `Math.random()`: Generates a random number between 0 (inclusive) and 1 (exclusive).
5. `Math.abs()`: Returns the absolute value of a number.
6. `Math.max()`: Returns the largest of zero or more numbers.
7. `Math.min()`: Returns the smallest of zero or more numbers.
8. `Math.pow()`: Raises a number to the power of another number.
9. `Math.sqrt()`: Returns the square root of a number.
10. `Math.trunc()`: Returns the integer part of a number by removing any fractional digits.
11. `Math.sin()`, `Math.cos()`, `Math.tan()`: Calculate the sine, cosine, and tangent of an angle, respectively.
12. `Math.PI`: Represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.

These are some commonly used math methods in JavaScript. They are helpful for performing various mathematical calculations and manipulations in your code. 😊
*/

// String
const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

function StringMethod() {
  // concat()
  const str1 = "Hello";
  const str = "World";
  const result = str1.concat(", ", str);
  console.log(result); // Output: Hello, World
  const first = [1, 2, 3];
  const second = ["4, 5, 6"];
  const addi = first.concat(second);
  console.log(addi);

  // toUpperCase() and toLowerCase()
  const str2 = "Hello World";
  console.log(str2.toUpperCase()); // Output: "HELLO WORLD"
  console.log(str2.toLowerCase()); // Output: "hello world"

  //trim()
  const str3 = "   Hello World   ";
  console.log(str3.trim()); // Output: "Hello World"

  //indexOf() and lastIndexOf()
  const str4 = "Hello World";
  console.log(str4.indexOf("o")); // Output: 4
  console.log(str4.lastIndexOf("o")); // Output: 7

  //replace()
  const str5 = "Hello World";
  const newStr = str5.replace("World", "Everyone");
  console.log(newStr); // Output: "Hello Everyone"

  //split()
  const str6 = "Apple,Banana,Orange";
  const arr = str6.split(",");
  console.log(arr); // Output:3 ["Apple", "Banana", "Orange"]

  // substring()
  const str7 = "Hello World";
  const substr = str7.substring(6, 11);
  console.log(substr); // Output: "World"

  // startsWith() and endsWith()
  const str8 = "Hello World";
  console.log(str8.startsWith("Hello")); // Output: true
  console.log(str8.endsWith("world")); // Output: true

  // includes()
  const str9 = "hello world";
  console.log(str9.includes("h"));

  // slice()
  const str10 = "Hello, World!";
  console.log(str10.slice(0, 5)); // Output: "Hello"
  console.log(str10.slice(7)); // Output: "World!"
  console.log(str10.slice(0, -8)); // Output: "Hello"
  console.log(str10.slice(-6)); // Output: "World!"
  console.log(str10.slice(0)); // Output: "Hello, World!"

  const str11 = [3, 4];
  str11.push(5);
  str11.unshift(4, 2);
  str11.splice(2, 0 /*no delete*/, "soheil" /*insert soheil in 2 place */);
  str11.shift(); // for delete an element
  console.log(str11);

  // finding an element in array
  const str12 = [(one = { id: 1, name: "a" }), (two = { id: 2, name: "b" })];
  console.log(str12);
  console.log(str12.includes(one));
  /* The includes() method checks if an element is present in an array
  based on its value. In this case, you're trying to check if an object
  with id: 1 and name: "a" exists in the str12 array.
  However, the object you're passing to includes() ({ id: 1, name: "a" })
  is a new object, even though it has the same property values as one of the objects in the array.
  In JavaScript, objects are compared based on their references or memory addresses,
  not their property values.
  Since the object you're searching for is a different instance from the objects in the array, the comparison fails,
  and includes() returns false*/

  // fixing:
  const str13 = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
  ];

  const objTofind = str13.find((x) => x.id === 1 && x.name === "a");
  // !!
  /* !! is a double negation operator. It's used to convert
   a value into its corresponding boolean representation. 
   The first ! negates the truthiness of the value, and the
    second ! negates it again, effectively converting it to a boolean.*/
  const doesExist = !!objTofind;
  console.log(doesExist); // Output: true

  // removing an element from an array methods
  const str14 = ["Hi my name is soheil", 1, 2, 3, 4];

  const shift = str14.shift(); // Removes the first element
  // from an array and returns it

  const pop = str14.pop(); //Removes the last element
  // from an array and returns it

  const splice = str14.splice(1, 2); /* delete index 1(2) and 2(3) element 
for (one) time*/

  console.log(str14);
}
StringMethod();

// !!!! the strict equality(===)  checks for both
// value equality and type equality.
/* On the other hand, the loose equality operator (==) performs type coercion
  before comparing the values. It allows for comparisons between
  different data types by converting one or both of the operands 
  to a common type */
let a = 5;
let b = "5";

console.log(a === b); // Output: false
console.log(a == b); // Output: true

let numbers = [1, 2, 3, 4, 5, 6];
let another = numbers;
numbers.length = 0; // you are modifying the original
// array itself by changing its length to 0
// Or
numbers.splice(0, numbers.length);
console.log(another); // []
console.log(numbers);

// But

let numbers1 = [1, 2, 3, 4, 5];
let another1 = numbers1;
numbers1[5] = 1;
numbers1 = []; // this is make a new numbers with the an empty brackect
// and the origin number still holds the reference to the original array
// thats why another1 is not an empty bracket
console.log(another1); // Output: [ 1, 2, 3, 4, 5 ]
console.log(numbers1);

// concat and object combining with array
const first = [1, 2, 3];
const second = [4, 5, 6];
const addi = first.concat(second);

console.log(addi);

const slice = addi.slice(0, -4);
console.log(slice);

let objfirst = [{ id: 1 }]; // using {} inside of array
// this goona make tha same type with different value
objfirst[0].id = 10; /* you changing property from an object inside the
array not array itself that's why const property doesn't change*/
objfirst.push({ name: "soheil" });
console.log(objfirst);

const combined = objfirst.concat(second);

console.log(combined);
console.log(objfirst);

// forEach
let number = [1, 2, 3];
number.forEach(function (num) {
  console.log(num);
});
// or
number.forEach((num, i) => console.log(i, num));

const names = ["soheil", "sabihe", "gol", "ahmad"];

names.forEach((user, index) => {
  console.log("number[" + index + "] is " + user);
});

function ArrayRandomNum() {
  // sorting arrayobject random number
  let number = [1, 200, 53, 193, 34, 6, 45, 0];

  number.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return +1;
    } else {
      return 0;
    }
  });

  console.log(number);

  // example:
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let arrayNum = [];
  for (let i = 0; i < 100; i++) {
    let randomNum = getRandomArbitrary(0, 1000);
    arrayNum.push(randomNum);
  }
  arrayNum.sort((a, b) => {
    if (a < b) {
      return -1; // a should come before b
    } else if (a > b) {
      return 1; // a should come after b
    } else {
      return 0; // No change in oreder, they are equal
    }
  });
  console.log(arrayNum);
}

// test

const everyNum = [1, 2, 3];

const testevery = everyNum.every((value) => {
  return value >= 0; // check the value and return bloean type(true,false)
  // all element consid in this function
});
console.log(testevery);

const some = [1, -1, -1];

const testSome = some.some((value) => {
  return value >= 0; // if just one element get true in this function
  // then it will return true
});
console.log(testSome);

// fliter method
const numbers = [1, 2, -3, 4, 1];
filtered = numbers.filter((value, index, self) => {
  return value >= 0 && self.indexOf(value) === index;
});
console.log(filtered);

// clear way 👆
const numbersb = [1, 2, 3, 4, 5, 6];

function mapping() {
  // array Number
  const numbers = [1, 2, 3, 4, 5];

  const result = numbers.map((value) => {
    return value * 2;
  });
  console.log(result);

  // mapping string array
  const product = ["html", "css", "js"];

  const items = product.map((product) => {
    return `<li>${product}</li>`;
  });
  console.log(items);

  const html = `<ul>${items.join(", ")}</ul>`;
  console.log(html);

  // mapping obj
  const prompt1 = ["soheil", "ahmad", "sabihe", "gol"];

  const mappingobj = prompt1
    .map((product) => ({ value: product }))
    .map((obj) => obj.value)
    .join(", ");
  console.log(mappingobj);

  // clean code
  numbers = [1, -1, 2, 3, 4, -3, 1];

  const items1 = numbers
    .filter(
      (value1, index, self) => value1 >= 0 && self.indexOf(value1) === index
    )
    .map((num) => ({ value: num }))
    .map((obj) => obj.value)
    .join(", ");
  console.log(items1);
}

// this parameter

// method -> obj
// function -> global(window,global)

// global object in beowser => window
//global object in node => global

//1- function as method (this):
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.play();
/* (this) goona show all property
of video constant
 which is related to that function in the object
 So when you log this, it will 
show all the properties and methods of the video object.
showing window*/
function playvideo() {
  console.log(this);
}
playvideo();

function Video(title) {
  this.title = title;
  console.log(this);
}
// (this) here gonna show us window with property in it
const v = new Video("soheil");

//example

const video1 = {
  title: ["soheil", 1],
  tags: ["cr7", "leo10", "masut"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(tag, this.title[0], this.title[1]++);
    });
  },
};

video1.showTags();

// Hoisting
// Function Declaration
function walk() {
  console.log("walk");
}

//Function Expression
let run = function () {
  let name = { soheil: "dss" };
  console.log("run", name.soheil);
};

function assignment_operator() {
  // insane thing just in js
  let a = 5;
  let b = 10;

  a = b;
  console.log(a, b); // Output: 10 10

  a = 5;
  b = 10;

  b = a;
  console.log(a, b); // Output: 5 5

  // Argument
  function sum(a, b) {
    console.log(arguments);
    let total = 0;
    for (let value of arguments) total += value;
    return a + b, total;
  }

  sum(1, 2, 3, 4, 5, 6);

  function sum1() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  let total = sum1(2, 3, 4, 5, 5, 3, 5, 5, 6, 4);
  console.log(total);
}

function reduce() {
  const numbers = [1, 2, 3, 4, 5, -6];

  let sum = numbers
    .filter((value) => {
      return value >= 0;
    })
    .reduce((accumulator, currentvalue) => {
      return accumulator + currentvalue;
    }, 0); //-> zero is accumulator value
  console.log(sum);
  // contains the value calculated from the previous iteration.
  /* the tutorial of reduce method 
accumulator = a, currentvalue = c
// 1) a=0 , c=1 => a=1
// 2) a=1 , c=2 => a=3
// 3) a=3 , c=3 => a=6
// 4) a=6 , c=4 => a=10
// 5) a=10 , c=5 => a=15
sum = 15
*/
}

// Initialization
function interest(principal, rate, years) {
  rate = rate || 18;
  years = years || 1;
  return ((principal * rate) / 100) * years;
}
console.log(interest(20000));

// es6 tutorial

function interest1(principal1, rate1 = 18, years1 = 1) {
  return ((principal1 * rate1) / 100) * years1;
}
console.log(interest1(210000, 23));

function getset() {
  // Getter and Setters
  // getters => access properties
  // setters => change (mutate)
  const person = {
    fname: "ali",
    lname: "mohammadi",
    get fullname() {
      return `${person.fname} ${person.lname}`;
    },
    set fullname(value) {
      const parts = value.split(" ");
      this.fname = parts[0];
      this.lname = parts[1];
    },
  };

  person.fullname = "rezaa farhadi";
  person.fname = "soheil";
  let full = person.fullname;

  console.log(full);
  console.log(person);

  //cleaner code:
  const person1 = {
    firstName: "Ali",
    lastName: "Mohammadi",
    get fullName1() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName1(value) {
      [this.firstName, this.lastName] = value.split(" ");
    },
  };

  person1.fullName1 = "Reza Farhadi";
  person1.firstName = "Soheil";
  let full1 = person1.fullName1;

  console.log(full1);
  console.log(person1);
}

function args() {
  // ...args (several parameter)
  function sum(discount, ...args) {
    const total = args.reduce((a, b) => a + b, 0);
    console.log(total);
    return total * (1 - discount);
  }

  console.log(sum(0.5, 1, 2, 4, 5, 17));
}

function scope() {
  // scope
  function start() {
    const message = "soheil";
    let age = 19;
    if (true) {
      age = 20; //Local has priority over global in inside of scope
      console.log(age);
    }
    console.log(message);
    console.log(age);
  }
  start();
  function stop() {
    const message = "johari";
    console.log(message);
  }
  stop();
  // another example
  const myGlobalVariable = "Hello, global scope!";

  function myFunction() {
    console.log(myGlobalVariable); // Output: Hello, global scope!
  }

  myFunction();

  // another example
  function outerFunction() {
    const outerVariable = "Hello, outer scope!";

    function innerFunction() {
      console.log(outerVariable); // Output: Hello, outer scope!
    }

    innerFunction();
  }

  outerFunction();
}

function Try_Catch() {
  let person = {
    firstname: "",
    lastname: "",
    get fullname() {
      return `${person.firstname} ${person.lastname}`;
    },
    set fullname(value) {
      const parts = value.split(" ");
      this.firstname = parts[0];
      this.lastname = parts[1];
      if (typeof value !== "string") {
        throw new Error("value is not a string");
      }
      if (parts.length !== 2) {
        throw new Error("Please enter firsname and lastname");
      }
    },
  };
  try {
    person.fullname = "soheil johari";
  } catch (error) {
    console.log("an error occurred:", error);
  } finally {
    console.log("This will always be excuted, regadless of an error.");
  }
}

function Builtin_method() {
  function playVideo(arg1, arg2) {
    console.log(this);
    console.log(arg1, arg2);
  }

  // loging by call
  playVideo.call({ name: "soheil" }, "arg1 value", "arg2 value");

  // logging by apply
  playVideo.apply({ name1: "johari" }, ["arg1 value", "arg2 value"]);

  // loging by using bind
  const log = playVideo.bind({ name2: "qeshmi" }, "arg1 value", "arg2 value");
  log();

  const person = {
    fullname: function () {
      return this.firstname + " " + this.lastname;
    },
  };

  const person1 = {
    firstname: "john",
    lastname: "due",
  };

  const person2 = {
    firstname: "soheil",
    lastname: "johari",
  };

  console.log(person.fullname.call(person1)); // one of the usage of call
  console.log(person.fullname.apply(person1)); // one of the usage of call

  const bind = person.fullname.bind(person2); // one of the usage of call
  console.log(bind());
}

function prototype() {
  // Procedural programming
  /* with this way which is normal version of programming variables are
in one side and objects are on the other site*/
  //example:
  let baseSalary = 30_000;
  let overtime = 10;
  let rate = 20;

  function getWage(baseSalary, overtime, rate) {
    return baseSalary + overtime * rate;
  }

  // 4 pillars of object-oriented programming: encapsulation, abstraction, inheritance and polymorphism.
  // 1) encapsulation

  // same example
  let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage() {
      return this.baseSalary + this.overtime * this.rate;
    },
  };
  console.log(employee.getWage());
  console.log(employee.baseSalary);

  /* the main reason encapsulation much better than regular way
is we don't have additional parameters for getway function
the reason why encapsulation does not get parametes
is because we define all parameters as properties for that object*/

  // 2) Abstraction
  /* simpler interface, reduce the impact of change
in programming that aims to simplify complex
 systems by hiding unnecessary details and exposing
  only the essential functionalities or interfaces.*/
  function Cricle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 }; // privating variable by (let)
    let cPL = function (factor) {
      // ...
      console.log("Hi");
    };
    this.draw = function () {
      cPL();
      console.log("draw");
      console.log(defaultLocation);
    };
  }

  const cricle = new Cricle(10);
  cricle.draw();
  // with this method you are not access to Cpl or  default location out of function directly

  // inheritance
  let x = Object.getPrototypeOf(cricle);
  console.log(x);

  //example:
  // Parent object constructor
  function Animal(name) {
    this.name = name;
  }
  // Adding a method to the porototype
  Animal.prototype.sayname = function () {
    console.log("My name is " + this.name);
  };

  // Child object constructor inheriting from Animal
  function Dog(name, breed) {
    Animal.call(this, name); // to inherit the "name" property from the "animal"
    // constructor, the dog constructor will have access to the sayName method/
    this.breed = breed;
  }
  // Inheriting the prototype methods from Animal
  Dog.prototype = Object.create(Animal.prototype);

  Dog.prototype.Breed = function () {
    console.log("My dog breed is " + this.breed);
  };
  // Adding a new method to Dog prototype
  Dog.prototype.bark = function () {
    console.log("Woof!");
  };

  // Creating instances of Dog
  let myDog = new Dog("Max", "labrador");
  myDog.sayname();
  myDog.Breed();
  myDog.bark();
}

// the prototype property allows you to define methods and properties
// that are shared among all instances created using the constructor function
/* this is how prototye works:
first Js gonna check through all instance of object
if he didn't find method or properties names like we deifined for object
then he gonna check through prototype and check it*/
/*but When you use classes there is no need to use prototype property
inside of class because all instance of class are in same container
but if you want to add method or property outside of class
you will needed to use prototype property 
in classes you can use prototype property for constructor of the class (only main class)
not for instances*/
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, my if name is ${this.name} and I am ${this.age} years old.`;
};

const john = new Person("John", 25);
console.log(john.greet()); // Output: Hello, my name is John and I am 25 years old.

// object-oriented-programming
function Oop_prototype() {
  userOne = {
    email: "soheilj92@gmail.com",
    name: "soheil",
    loggin() {
      console.log(this.name + " has logged in");
    },
    logout() {
      console.log(this.name + " has logout");
    },
  };

  //changing variable name from object
  let prompt1 = "name";
  userOne[prompt1] = "sabihe";
  console.log(userOne.name); // Output: sabihe

  // adding property to that object
  userOne.age = 18;
  console.log(userOne.age);

  // or function
  userOne.method = function () {
    console.log(this.name + " hello");
  };
  userOne.method(); // Output: sabihe hello

  class User {
    constructor(email, name) {
      this.email = email;
      this.name = name;
      this.score = 0;
    }
    login() {
      console.log(this.email, "has been logged in");
      return this;
    }
    logout() {
      console.log(this.email, "has been logged out");
      return this;
    }
    updateScore() {
      // every time you use this method in console your scroe will increase for one user
      this.score++;
      console.log(this.email, " score is now ", this.score);
      return this;
    }
  }

  class Admin extends User {
    deleteUser(user) {
      users = users.filter((u) => {
        return u.email != user.email;
      });
    }
  }

  // constanst
  const UserOne = new User("sooheilj92@gmail.com", "soheil");
  const UserTwo = new User("eisa2502999@gmail.com", "eisa");
  const admin = new Admin("soheilj92@gmail.com", "soheil ragnar");

  let users = [UserOne, UserTwo, admin];
  console.log(users);
  // logs
  UserTwo.login()
    .updateScore()
    .updateScore()
    .logout(); /* method chaning by using return this for each instance in class
 and then you log multipaly */
  admin.deleteUser(UserTwo);
  console.log(users);

  //UserTwo.deleteUser(userOne); // this is won't work cause Admin method is child class

  // using prototype for class
  User.prototype.method = function () {
    console.log(this.name, "he is the best programmer i have ever seen");
  };
  UserOne.method();
}

// JSON
function Json() {
  //Json String
  const jsonString = `{"name":"john", "age":30, "city":"new york"}`;

  //Parsing JSON string to javascript object
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject);

  // Stringifying Javascript object to JSON string
  const jsonStringified = JSON.stringify(jsonObject);
  console.log(jsonStringified);

  const jsonData = require("./data.json"); // require() is node js function
  // to import json file as module
  console.log(jsonData);
  // Use the data retrieved from JSON here
}
Json();

function Static() {
  //Static method
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    // instance method
    draw() {
      console.log("draw");
    }
    /*Static Methods: Static methods are defined using the static
     keyword before the method name. These methods are called 
     directly on the class without creating an instance of the class.
      Static methods are useful for defining utility functions or 
      operations that don't depend on specific instance data.*/
    static parse(str) {
      const { radius } = JSON.parse(str);
      // or
      // const radius = JSON.parse(str).radius;
      return new Circle(radius);
    }
  }

  //const circle = new Circle(1);
  const circle1 = Circle.parse('{"radius": "soheil"}'); // using Cricle directly
  console.log(circle1);
}

// CallBack function
function callBackfuc() {
  function orderPizza(callback) {
    console.log("ordering pizza...");
    setTimeout(() => {
      console.log("wait...");
    }, 3000);
    setTimeout(() => {
      const pizza = "🍕";
      callback(pizza);
    }, 20000);
  }

  function pizzaReady(pizza) {
    console.log(`${pizza} is ready`);
    console.log(`Eat the ${pizza}`);
  }

  function callFriend(friendx) {
    setTimeout(() => {
      let friend = "soheil";
      friendx(friend);
    }, 3000);
  }

  function calling(friend) {
    console.log("call soheil till pizza get ready");
    console.log("caling soheil");
    setTimeout(() => {
      console.log(`${friend} answer`);
    }, 6000);
  }

  orderPizza(pizzaReady);
  callFriend(calling);
}

// promise
// basic
function promise() {
  function getWeather() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        // Simulating successful data fetching
        resolve("sunny");
      }, 2000);

      setTimeout(() => {
        reject("Error: Unable to fetch weather data");
      }, 3000);
    });
  }
  // promise result before fulfill(resolve or reject)
  function promise1(callback) {
    setTimeout(() => {
      console.log(callback);
    }, 1000);
  }
  promise1(getWeather());

  const promise = getWeather();
  promise.then((data) => {
    console.log(data);
  });

  // promise result after fulfill(resolve or reject)
  function promise2(callback) {
    setTimeout(() => {
      console.log(callback);
    }, 4000); // changing the time of log after result
  }
  promise2(getWeather());

  // cleaner way and more underestanding way
  function getWeather() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("rainy");
      }, 500);
    });
  }

  function getWeatherIcon(weather) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        switch (weather) {
          case "sunny":
            resolve("☀️");
            break;
          case "cloud":
            resolve("☁️");
            break;
          case "rainy":
            resolve("🌧️");
            break;
          default:
            reject("No ICON FOUND");
        }
      }, 1000);
    });
  }

  const promisex = getWeather();
  console.log(promisex); // output: Promise {<pending>}

  setTimeout(() => {
    console.log(promisex); // output: Promise {<fulfilled>: 'rainy'}
  }, 5000);

  function onSuccess(data) {
    setTimeout(() => {
      console.log(`weather is ${data}`);
    }, 3000);
  }

  function onError(error) {
    setTimeout(() => {
      console.log(`Error: ${error}`);
    }, 3200);
  }

  function onFinally() {
    setTimeout(() => {
      console.log("this is occur rather anyways");
    }, 3800);
  }

  getWeather()
    .then((weather) => getWeatherIcon(weather))
    .then((data) => onSuccess(data))
    .catch((error) => onError(error))
    .finally(onFinally);
  // or for onsuccess and onError you can say:
  // getweather.then(onFulfilled, onRejected)
  // in summary first parameter of then work as onFulfilled(resolve)
  // and second parameter work as onRejected(reject)
}

// fetch method
/* is a built-in browser API that allows you to make network
 requests and retrieve resources from a server.*/
function fetchWeatherData1(city) {
  const apiKey = "68c45745c30f53d47efb5f9fb0961a8a";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      throw error;
    });
}

// Usage example
//DOM elements
const searchBtn1 = document.getElementById("searchBtn");
const searchInput1 = document.getElementById("searchInput");

// Function to render weather data on the UI
function renderWeatherData1(data) {
  const WeatherData = [
    {
      temperature: (data.main.temp - 273.15).toFixed(2) + "°C",
      description: data.weather[0].main,
      humidity: data.main.humidity + "%",
      country: data.sys.country,
      city: data.name,
    },
  ];

  WeatherData.forEach((weather) => {
    let markup = "";
    for (let key in weather) {
      markup += `<li>${key}: ${weather[key]}</li>`;
    }

    document
      .querySelector("#weatherResult ul")
      .insertAdjacentHTML("afterbegin", markup);
  });
}

// Function to fetch and result of render data
function fetchAndRender1(city) {
  fetchWeatherData1(city)
    .then((data) => {
      renderWeatherData1(data);
    })
    .catch((error) => {
      console.error(`An error occurred: ${error}`);
    });
}

// Event listener for search button click and input field enter key press
function handleSearch() {
  const city = searchInput1.value;
  fetchAndRender1(city);
}
searchInput1.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleSearch();
  }
});

searchBtn1.addEventListener("click", handleSearch);

// artist info by using api
const url = "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY";
async function artistInfo() {
  const request = new Request(url, {
    headers: {
      Authorization:
        "Bearer BQD28H321MPHS_5iNf-rPMDI1HkP43OJP-QZf53PmzS5fzqLjjTsxTujcAqJwEbdgHZehstbFOtzP1ESmNr7t34bb1pqShowXhsumJlJXXaMbKY0o-o",
    },
  });

  try {
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
artistInfo();

// getting access token from api
// making async func and using fetch feature
// connectet to the html and and ...
async function _getToken() {
  const clientId = "58ced6c1abc645acb8cf58e2a6195e37";
  const clientSecret = "d76bd6dddf5749d9bc843a10ca82b06e";
  // Website: http://127.0.0.1:5500/index.html
  // Redirect website: http://127.0.0.1:5500/index.html

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  });

  const data = await response.json();
  return data.access_token;
}
console.log(_getToken());

async function fetchArtistCode(artistName, token) {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data; // Assuming the first artist in the search results
}

document.getElementById("search-button").addEventListener("click", async () => {
  const token = await _getToken();
  const artistName = document.getElementById("search-input").value;
  const artistCode = await fetchArtistCode(artistName, token);

  console.log("Artist Code:", artistCode);
});
console.log(fetchArtistCode());
