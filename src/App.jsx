import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const getWeather = () => {
    const apiUrl = `https://open-weather13.p.rapidapi.com/city/${cityName}`;

    axios.get(apiUrl, {
      headers: {
        'x-rapidapi-key': 'ac2cf038b8mshd1ce619da8edd1ep1dd527jsna36260c1f56f',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }
    })
    .then(response => {
      console.log(response.data);
      setWeatherData(response.data);
      setErrorMessage(null);
    })
    .catch(error => {
      setErrorMessage(error.meessage);
      setWeatherData(null)
    });
  };
  
  // useEffect(() => {
  //   console.log(weatherData?.weather[0]?.main)
  // }, [weatherData])

  return (
    <>
      <div className='container'>
        <header>
          <h1>How's the Weather Today?</h1>
        </header>
        <input type="text" value={cityName} onChange={handleInputChange} placeholder="Enter city name" />
        <button onClick={getWeather}>Get Weather</button>
      </div>
    </>
  )
}

export default App
