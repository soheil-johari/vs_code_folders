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
// Promise and async/await
function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        resolve(`Success: ${randomNum.toFixed(2)}`);
      } else {
        reject(`Error: ${randomNum.toFixed(2)}`);
      }
    }, 1000);
  });
}

async function start() {
  try {
    const result = await myPromise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

start();
