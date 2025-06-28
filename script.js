document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const cityNameElem = document.getElementById('city-name');
    const weatherIconElem = document.getElementById('weather-icon');
    const temperatureElem = document.getElementById('temperature');
    const descriptionElem = document.getElementById('description');
    const humidityElem = document.getElementById('humidity');
    const windSpeedElem = document.getElementById('wind-speed');
    const errorMessageElem = document.getElementById('error-message');

    
    const API_KEY = '9297c91f7e50da35fabd7cfcb5e3263e'; 
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    searchButton.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            getWeatherData(city);
        } else {
            displayError('Please enter a city name.');
        }
    });

    cityInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });

    async function getWeatherData(city) {
        hideError(); 
        try {
            const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`); 
            const data = await response.json();

            if (response.ok) {
                displayWeatherData(data);
            } else {
                displayError(data.message || 'City not found. Please try again.');
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            displayError('An error occurred while fetching weather data. Please try again later.');
        }
    }
    


    function displayWeatherData(data) {
        cityNameElem.textContent = data.name;
        weatherIconElem.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIconElem.alt = data.weather[0].description;
        temperatureElem.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
        descriptionElem.textContent = `Description: ${data.weather[0].description}`;
        humidityElem.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeedElem.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        cityInput.value = '';
    }

    function displayError(message) {
        errorMessageElem.textContent = message;
        errorMessageElem.style.display = 'block';
        cityNameElem.textContent = '';
        weatherIconElem.src = '';
        weatherIconElem.alt = '';
        temperatureElem.textContent = '';
        descriptionElem.textContent = '';
        humidityElem.textContent = '';
        windSpeedElem.textContent = '';
    }

    function hideError() {
        errorMessageElem.style.display = 'none';
        errorMessageElem.textContent = '';
    }
});