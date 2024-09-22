# Weather App

This is a weather application that provides real-time weather information using the **OpenWeather API** and **GeoDB RapidAPI**. The app automatically fetches the user's current location and displays the weather for that location. It also implements caching to improve response time, and users can easily switch between Celsius and Fahrenheit with a single click.

## Features

- **Current Location Weather**: Automatically fetches and displays weather information based on the user's current location.
- **Search by City**: Allows users to search for weather in any city using the GeoDB API.
- **Temperature Units**: Users can toggle between Celsius and Fahrenheit for temperature display.
- **Caching**: Implements caching to store API responses for a specified time, reducing API calls and ensuring faster load times for subsequent requests.
- **Real-time Data**: Fetches up-to-date weather data from OpenWeather API, including temperature, weather conditions, and a 5-day forecast.

## Tech Stack

- **Frontend**: JavaScript (React.js)
- **APIs Used**:
  - [OpenWeather API](https://openweathermap.org/api): To fetch real-time weather data.
  - [GeoDB RapidAPI](https://rapidapi.com/wirefreethought/api/geodb-cities): To search for cities by name.
- **Caching**: Browser's `localStorage` to cache weather data for faster access.


### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DeepakKohlii/Weather-App.git
   cd weather-app

2. **Create .env file**:
   ```bash
   REACT_APP_GEO_API_URL=https://wft-geo-db.p.rapidapi.com/v1/geo
   REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
   REACT_APP_WEATHER_API_KEY=your_openweather_api_key
   REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
   REACT_APP_RAPIDAPI_HOST=wft-geo-db.p.rapidapi.com

3. **Install Packages**:
    ```bash
    npm install
    npm start // to run the server

4. **Open the application in your browser** and 
     Navigate to http://localhost:3000
