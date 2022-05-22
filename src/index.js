import './style.css';
import tempIcon from './assets/images/weather-icons/24w/temp.png';
import humidityIcon from './assets/images/weather-icons/24w/humidity.png';
import windIcon from './assets/images/weather-icons/24w/wind.png';
import getLonLat from './modules/getLonLat.js';

const temp = document.querySelector('.temp-icon');
const humidity = document.querySelector('.humidity-icon');
const wind = document.querySelector('.wind-icon');
const searchInput = document.querySelector('.search-input');

temp.src = tempIcon;
humidity.src = humidityIcon;
wind.src = windIcon;

searchInput.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    await getLonLat(searchInput.value.trim());
  }
});