import axios from 'axios';

const API_KEY = 'a4f5e50e8811119885c44eff01d32cbc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&APPID=${API_KEY}`;

export const FETCH_WEATHER = 'fetchWeather'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
      type: FETCH_WEATHER,
      payload: request // request is of type "promise"
    }

}
