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

  Dog.prototype = Object.create(Animal.prototype);

  Dog.prototype.mammal = function () {
    console.log(this.name + " is my name and i have " + this.breed);
  };
  let animal = new Animal("soheil");
  let dog = new Dog("ahmad", "haski");

  animal.sayname();
  dog.mammal();
  dog.sayname();
}

// class prototype
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.online = false;
  }

  login() {
    this.online = true;
    if (this.online === true) {
      console.log(this.name, "is online");
    }
    console.log(this.email, "is logged in");
  }

  logout() {
    this.online = false;
    if (this.online === false) {
      console.log(this.name, "is offline");
    }
    console.log(this.email, "is logged out");
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return user.email != u.email;
    });
  }
}

const UserOne = new User("soheil johari", "sooheilj92@gmail.com");
const UserTwo = new User("ahmad johari", "ahmadjori@gmail.com");
const admin = new Admin("soheil King", "sooheilpro@gmail.com");

let users = [UserOne, UserTwo];
UserOne.login();
UserTwo.logout();
admin.login();

admin.deleteUser(UserOne);
users.push(admin);
console.log(users);

function example() {
  function User(email, name) {
    // instance member
    this.email = email;
    this.name = name;
    this.online = false;
  }

  User.prototype.login = function () {
    this.online = true;
    console.log(this.name, "has logged in");
  };

  User.prototype.logout = function () {
    this.online = false;
    console.log(this.name, "has logged out");
  };

  /*In JavaScript, the spread syntax (...) can be used to pass an array
 of arguments to a function or constructor */
  function Admin(...args) {
    User.apply(this, args);
    // adding special property
    this.role = "super admin";
  }
  // OR
  /*function Admin(email, name){
  User.call(this, email, name)
}*/
  Admin.prototype = Object.create(User.prototype);

  Admin.prototype.deleteUser = function (user) {
    users = users.filter((u) => {
      return user.email != u.email;
    });
  };

  const UserOne = new User("sabihejoohari@gmail.com", "sabihe johari");
  const UserTwo = new User("eisa2502999@gmail.com", "eisa dardmand");
  const admin = new Admin("sooheilj92@gmail.com", "soheil johari");

  admin.login();
  let users = [UserOne, UserTwo, admin];
  admin.deleteUser(UserOne);
  console.log(users);
  console.log(admin);

  //returns instance members
  console.log(Object.keys(admin));

  // return all members instance and prototype
  for (let key in admin) {
    console.log(key);
  }
}

// promise with class and static
class WeatherService1 {
  static getWeather() {
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

  static example1() {
    function promise1(callback) {
      setTimeout(() => {
        console.log(callback);
      }, 1000);
    }
    promise1(WeatherService1.getWeather());

    const promise = WeatherService1.getWeather();
    promise
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    function promise2(callback) {
      setTimeout(() => {
        console.log(callback);
      }, 4000);
    }
    promise2(WeatherService1.getWeather());
  }
}

WeatherService1.example1();

// promise with class and constructor

class WeatherService2 {
  constructor() {
    this.getWeather = () => {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve("sunny");
        }, 2000);

        setTimeout(() => {
          reject("Error: Unable to fetch weather data");
        }, 3000);
      });
    };

    this.example1 = () => {
      function promise1(callback) {
        setTimeout(() => {
          console.log(callback);
        }, 1000);
      }
      promise1(this.getWeather());

      const promise = this.getWeather();
      promise.then((data) => {
        console.log(data);
      });

      function promise2(callback) {
        setTimeout(() => {
          console.log(callback);
        }, 4000);
      }
      promise2(this.getWeather());
    };
  }
}

const weatherService = new WeatherService2();
weatherService.example1();

// promise practice
function Mood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("freak");
    }, 700);
    setTimeout(()=>{
      reject("freak")
    },800)
  });
}

function moodIcon(mood) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (mood) {
        case "happy":
          resolve("😀");
          break;
        case "sad":
          resolve("☹️");
          break;
        case "freak":
          resolve("😵‍💫");
        default:
          reject("no icon found");
      }
    }, 1000);
  });
}

function onSuccessMod(data) {
  setTimeout(() => {
    console.log(`your mood is ${data} now`);
  }, 1200);
}

function onError(error) {
  setTimeout(() => {
    console.log(`Error: ${error}`);
  }, 1300);
}

const promise = Mood();
console.log(promise);
function promiseP() {
  setTimeout(() => {
    console.log(promise);
  }, 4000);
}
promiseP();

Mood()
  .then((mood) => moodIcon(mood))
  .then((modMessage) => onSuccessMod(modMessage))
  .catch((error) => onError(error));

// more example about promise(fetch)
async function fetchWeatherData(city) {
  const apiKey = "68c45745c30f53d47efb5f9fb0961a8a";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching weather data: ${error}`);
    throw error;
  }
}

// Usage example with async/await
const searchBtn = document.getElementById("searchBtn");
const resultInput = document.getElementById("searchInput");

function renderWeatherData(data) {
  const weatheData = [
    {
      temperature: (data.main.temp - 273.15).toFixed(2) + "°C",
      description: data.weather[0].main,
      humidity: data.main.humidity + "%",
      country: data.sys.country,
      city: data.name,
    },
  ];
  weatheData.forEach((weather) => {
    let list = "";
    for (let key in weather) {
      list += `<li>${key}: ${weather[key]}</li>`;
    }

    document
      .querySelector("#weatherResult ul")
      .insertAdjacentHTML("afterbegin", list);
  });
}

// Function to fetch and result of render data
async function fetchAndRender(city) {
  try {
    const data = await fetchWeatherData(city);
    renderWeatherData(data);
  } catch (error) {
    console.error(`An error occurred ${error}`);
  }
}

function handleSearch() {
  const city = resultInput.value;
  fetchAndRender(city);
}

searchBtn.addEventListener("click", handleSearch);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

// using api feature and fetch
const url = "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY";

async function artistInfo() {
    const request = new Request(url, {
        headers: {
            "Authorization": "Bearer BQD28H321MPHS_5iNf-rPMDI1HkP43OJP-QZf53PmzS5fzqLjjTsxTujcAqJwEbdgHZehstbFOtzP1ESmNr7t34bb1pqShowXhsumJlJXXaMbKY0o-o"
        }
    });

    try {
        const response = await fetch(request);
        const data = await response.json();
        
        if (!response.ok) {
            console.log(`Server Error: ${data.error.message}`);
        } else {
            console.log("Success:");
            console.log(JSON.stringify(data, null, 2)); // Display the data in a more readable format
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

artistInfo();