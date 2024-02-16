// fetch the api by using async/await
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
    const city = searchInput.value;
    fetchAndRender(city);
  }
  
  searchBtn.addEventListener("click", handleSearch);
  
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
  
// fetch api using promise(then)
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
  