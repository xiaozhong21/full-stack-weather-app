import React, { useEffect } from 'react';
import { faWind, faTint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import highTemp from '../images/icons/highTemp.png';
import lowTemp from '../images/icons/lowTemp.png';

import './WeatherCard.scss'; 

function WeatherResult({
  fetchWeather,
  cityName,
  highTemp,
  humidity,
  lowTemp,
  wind,
  date,
  temp,
  iconUrl,
  currentCondition, 
}) {

  function convertUnixTime(unixTime) {
    const date = new Date(unixTime * 1000),
      hours = date.getHours(),
      minutes = '0' + date.getMinutes(),
      seconds = '0' + date.getSeconds(),
      formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  function resultUI() {
    return (
      <div className="card WeatherCard">
        <div className="card-content WeatherCard__content">
          <div className='columns is-mobile WeatherCard__content__columns'>
            <div className='column has-text-centered'>
              <div className='is-size-3 WeatherCard__content__city'>
                {cityName}
              </div>
              <div className='columns is-mobile'>
                <div className='column'>
                  <div>
                    <img className='WeatherCard__icon' src={highTemp} alt="high temperature"/>
                  </div>
                    {highTemp}
                  <div>
                    <FontAwesomeIcon icon={faTint} className='WeatherCard__icon'/>
                  </div>
                  {humidity}
                </div>
                <div className='column'>
                  <div>
                    <img className='WeatherCard__icon' src={lowTemp} alt="low temperature"/>
                  </div>
                  {lowTemp}
                  <div>
                    <FontAwesomeIcon icon={faWind} className='WeatherCard__icon'/>
                  </div>
                  {wind}
                </div>
              </div>
            </div>
            <div className='column has-text-centered'>
            <div className='WeatherCard__date'>
                {date}
              </div>
              <div className='WeatherCard__temp'>
                {temp}
              </div>
              <div>
                <img className='WeatherCard__desc__img' alt='weather icon' src={iconUrl}></img>
                <div>
                  {currentCondition}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
      <div>{resultUI()}</div>
  )
}

export default WeatherResult;
