import React, {useEffect, useState} from 'react';
import axios from 'axios';
import image from './assets/sunset1.jpg';
import './weather.css';

function App() {

const [weatherData, setWeatherData] = useState("");
const [city, setLocation] = useState("Ghana"); // default city
const apiKey = '6eaafdaab64040f1d3d0f29bb420566e'; // replace with your OpenWeatherMap API keygit add 

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

const bgstyle ={ 
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 'h-full'
};



  return (
    
    <div className='flex justify-center w-full '>
    <div className="h-dvh max-w-max flex flex-col items-center overflow-x-hidden app"  style={bgstyle}>
      <div className= 'flex justif-center   earch'>
        <input
        value={city}
        type='text'
        onChange={event => setLocation(event.target.value)}
        //onkeypress={searchLocation}
        placeholder='Enter Location' 
        className='w-full mt-20 mx-20 '
        />
      </div>
      <div className= "container w-full">
        <div className= "top">
          <div className= "location">
            <p>{weatherData.name}</p>
          </div>

          <div className= "temp">
           {weatherData.main ? <h1>{weatherData.main.temp.toFixed()}°C</h1> : null}
          </div>

          <div className= "relative top-[-40px] description">
            {weatherData.weather ? <p className= 'bold'>{weatherData.weather[0].main}</p> : null}
          </div> 
        </div>

        
         {weatherData && ( 
        <div className= "botto flex gap-8 mb-8 relative top-[-50px] mr-20 md:left-6 ">

          <div className=''>
          <div className= "text-lg mb-4 feel">
            <div className='text-lg'>Feels<br/> Like</div>
            <p>{weatherData.main ? <p className='text-lg'>{weatherData.main.feels_like}°C</p> : null}</p>
          </div>
          

          <div className= "text-lg  humidit">
            <div className='text-lg'>Humidity</div>
            <p>{weatherData.main ? <p className= 'text-lg bol'>{weatherData.main.humidity}%</p> : null}</p>
          </div>
          </div>

           <div>
          <div className= "text-lg  mb-4  min_te">
          <p className='text-lg'>Min <br/> Temp</p>
          <p className= 'text-lg bol'> {weatherData.main.temp_min}°C</p>
          </div>
          
           
          <div className= "text-lg  max_te">
          <p className='text-lg'>Max <br/> Temp</p>
          <p className= 'text-lg bol'> {weatherData.main.temp_max}°C</p>
          </div>
          </div>

            <div className='text-lg'>
          <div className= "mb-4 win">
          <p className='text-lg'>Wind <br/> Speed</p>
          <p className= 'text-lg   bol'> {weatherData.wind.speed} MPH</p>
          </div>
          
          
          
          <div className= " pressur">
            <p className='text-lg'>Pressure</p>
            <p className= 'text-lg   bol'>{weatherData.main.pressure} hPa</p>
          </div>
          </div>
          
           <div>
          <div className= "text-lg pressur">
            <p className='text-lg'>Cloudiness</p>
            <p className= 'text-lg bol'> {weatherData.clouds.all} %</p>
            </div>
          </div>
        

          </div>
        
      )}

     </div>
    </div>
    </div>
      
  );
}

export default App