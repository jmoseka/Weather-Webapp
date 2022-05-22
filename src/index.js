import './style.css';
import tempIcon from './assets/images/weather-icons/24w/temp.png';
import humidityIcon from './assets/images/weather-icons/24w/humidity.png';
import windIcon from './assets/images/weather-icons/24w/wind.png';

const temp = document.querySelector('.temp-icon');
const humidity = document.querySelector('.humidity-icon');
const wind = document.querySelector('.wind-icon');

temp.src = tempIcon;
humidity.src = humidityIcon;
wind.src = windIcon;