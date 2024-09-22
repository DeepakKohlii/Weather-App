const GEO_API_URL = process.env.REACT_APP_GEO_API_URL;
const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL;
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const GEO_API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
  },
};


const DefaultTTL = 60000; 

const cacheResponse = (key, data) => {
  const cachedData = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem(key, JSON.stringify(cachedData));
};

const getCachedResponse = (key, ttl) => {
  const cachedItem = localStorage.getItem(key);
  if (cachedItem) {
    const parsedCachedData = JSON.parse(cachedItem);
    if (Date.now() - parsedCachedData.timestamp < ttl) {
      return parsedCachedData.data;
    }
  }
  return null;
};

export async function fetchWeatherData(lat, lon) {
  const cacheKeyWeather = `weather-${lat}-${lon}`;
  const cacheKeyForecast = `forecast-${lat}-${lon}`;
  
  const cachedWeatherData = getCachedResponse(cacheKeyWeather, DefaultTTL);
  const cachedForecastData = getCachedResponse(cacheKeyForecast, DefaultTTL);

  if (cachedWeatherData && cachedForecastData) {
    console.log('Returning cached weather and forecast data:', { cachedWeatherData, cachedForecastData });
    return [cachedWeatherData, cachedForecastData];
  }

  try {
    const [weatherPromise, forecastPromise] = await Promise.all([
      fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
      fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
    ]);

    const weatherResponse = await weatherPromise.json();
    const forecastResponse = await forecastPromise.json();

    cacheResponse(cacheKeyWeather, weatherResponse);
    cacheResponse(cacheKeyForecast, forecastResponse);
    console.log('Fetched and cached new weather and forecast data:', { weatherResponse, forecastResponse });

    return [weatherResponse, forecastResponse];
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

export async function fetchCities(input) {
  const cacheKey = `cities-${input}`;
  const cachedData = getCachedResponse(cacheKey, DefaultTTL);

  if (cachedData) {
    console.log('Returning cached cities data:', cachedData);
    return cachedData; 
  }

  try {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
      GEO_API_OPTIONS
    );

    const data = await response.json();

    cacheResponse(cacheKey, data);
    console.log('Fetched and cached new cities data:', data);

    return data;
  } catch (error) {
    console.error('Error fetching cities data:', error);
    return null; 
  }
}
