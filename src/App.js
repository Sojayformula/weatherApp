import React, {useEffect, useState} from 'react';
import axios from 'axios';
//import './App.css';

function App() {

const [weatherData, setWeatherData] = useState("");
const [city, setLocation] = useState("Ghana"); // default city
const apiKey = '6eaafdaab64040f1d3d0f29bb420566e'; // replace with your OpenWeatherMap API key

useEffect(() => {
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching the weather data', error);
    }
  };

  fetchWeather();
}, [city]);





  return (
    <div className="app">
      <div className= 'search'>
        <input
        value={city}
        type='text'
        onChange={event => setLocation(event.target.value)}
        //onkeypress={searchLocation}
        placeholder='Enter Location' 
        />
      </div>
      <div className= "container">
        <div className= "top">
          <div className= "location">
            <p>{weatherData.name}</p>
          </div>

          <div className= "temp">
           {weatherData.main ? <h1>{weatherData.main.temp.toFixed()}°C</h1> : null}
          </div>

          <div className= "description">
            {weatherData.weather ? <p className= 'bold'>{weatherData.weather[0].main}</p> : null}
          </div> 
        </div>

         {weatherData && ( 
        <div className= "bottom">
          <div className= "feels">
          {weatherData.main ? <p>{weatherData.main.feels_like}°C</p> : null}
            <p>Feels Like</p>
          </div>

          <div className= "humidity">
          {weatherData.main ? <p className= 'bold'>{weatherData.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>

          <div className= "min_temp">
          <p className= 'bold'> {weatherData.main.temp_min}°C</p>
          <p>Min Temp</p>
          </div>

          <div className= "max_temp">
          <p className= 'bold'> {weatherData.main.temp_max}°C</p>
          <p>Max Temp</p>
          </div>

         

          
          <div className= " wind">
          <p className= 'bold'> {weatherData.wind.speed} MPH</p>
          <p>Wind Speed</p>
          </div>
          

          <div className= " pressure">
          <p className= 'bold'>{weatherData.main.pressure} hPa</p>
            <p>Pressure</p>
          </div>

          <div className= " pressure">
          <p className= 'bold'> {weatherData.clouds.all} %</p>
            <p>Cloudiness</p>
          </div>
        </div>
      )}
      </div>
    </div>



    
  );
}

export default App;