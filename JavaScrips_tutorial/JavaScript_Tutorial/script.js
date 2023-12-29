// object-oriented-programming
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

// logs
UserTwo.login()
  .updateScore()
  .updateScore()
  .logout(); /* method chaning by using return this for each instance in class
 and then you log multipaly */
admin.deleteUser(UserTwo);

//UserTwo.deleteUser(userOne); // this is won't work cause Admin method is child class
console.log(users);

// using prototype for class
User.prototype.method = function () {
  console.log(this.name, "he is the best programmer i have ever seen");
};
