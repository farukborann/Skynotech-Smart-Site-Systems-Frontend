import { useState, useEffect } from "react";
import { IoRainyOutline } from "react-icons/io5";
import { PiWindLight } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import getConditionGif from "src/utils/weather/getConditionGifs";
import getTurkishWeatherCondition from "src/utils/weather/getTurkishWeatherCondition";

import styles from "./style.module.css";

export default function WeatherWidget_LatLon() {
  const [weather, setWeather] = useState({});

  const fetchWeather = async (latitude, longitude) => {
    try {
      const weatherReq = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=ee94006c9bb74ce892f181126211305&q=${latitude},${longitude}&days=1&aqi=no&alerts=yes`
      );
      const weatherData = await weatherReq.json();
      const condition = weatherData.current.condition.text;
      const turkishCondition = getTurkishWeatherCondition(condition);
      const period = weatherData.location.localtime;
      const humidity = weatherData.current.humidity;
      const precipitation = weatherData.current.precip_mm;
      const windSpeed = weatherData.current.wind_kph;

      setWeather({
        city: weatherData.location.region,
        temperature: weatherData.current.temp_c,
        widgetBg: getConditionGif(condition, period),
        humidity: `%${humidity}`,
        precipitation: `${precipitation} mm`,
        windSpeed: `${windSpeed} kph`,
        turkishCondition: turkishCondition,
      });
    } catch {
      console.log("xWthErr");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
      });
    }
  }, []);

  return (
    <div
      className={styles.weatgerWidgetWrapper}
      style={{
        background: `url(${weather?.widgetBg})`,
      }}
    >
      <div className={styles.col}>
        <div className={styles.title}>
          <p className={styles.widgetTitle}>{weather?.city}</p>
          <p className={styles.condition}>{weather?.turkishCondition}</p>
        </div>
        <div className={styles.tempText}>
          {weather?.temperature}
          <span className={styles.degree}>º</span>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.widgetInfo}>
          <WiHumidity /> {weather?.humidity}
        </div>
        <div className={styles.widgetInfo}>
          <IoRainyOutline /> {weather?.precipitation}
        </div>
        <div className={styles.widgetInfo}>
          <PiWindLight />
          {weather?.windSpeed}
        </div>
      </div>
    </div>
  );
}
