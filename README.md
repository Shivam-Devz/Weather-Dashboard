# Weather Dashboard

A simple and intuitive web-based weather application that allows users to fetch real-time weather information for any city worldwide.

## Table of Contents

* [Features]
* [Technologies Used]
* [API Used]
* [Installation]
* [Usage]
* [Project Structure]
* [Contributing]
* [Contact]

## Features

* **Real-time Weather Data:** Get up-to-date temperature, description, humidity, and wind speed for any entered city.
* **User-Friendly Interface:** Clean and straightforward design for easy navigation and data readability.
* **Dynamic Content Update:** Weather information is displayed dynamically after a city is searched.
* **Clear Indicators:** Clearly displays city name, temperature, description, humidity, and wind speed.

## Technologies Used

* **HTML5:** For the basic structure and content of the web page.
* **CSS3:** For styling the application, making it visually appealing and responsive.
* **JavaScript (ES6+):** For handling user interactions, fetching data from the API, and dynamically updating the UI.

## API Used

This project utilizes the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

* **API Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
* **Key Features Used:**
    * `q` (city name)
    * `appid` (your API key)
    * `units` (e.g., `metric` for Celsius, `imperial` for Fahrenheit)

**Note:** You will need to obtain your own API key from OpenWeatherMap to run this application.

## Installation

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Shivam-Devz/Weather-Dashboard]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd weather-dashboard
    ```
3.  **Obtain an API Key:**
    * Go to [OpenWeatherMap](https://openweathermap.org/) and sign up for a free account.
    * Navigate to the "API keys" section in your account dashboard.
    * Copy your generated API key.
4.  **Configure API Key:**
    * Open `script.js` (or your main JavaScript file) in a text editor.
    * Locate the line where the API key is defined (e.g., `const API_KEY = "YOUR_API_KEY";`).
    * Replace `"YOUR_API_KEY"` with your actual OpenWeatherMap API key.

## Usage

1.  **Open `index.html`:**
    * Simply open the `index.html` file in your preferred web browser.

2.  **Enter a City Name:**
    * In the input field provided, type the name of the city you want to get weather information for (e.g., "New York", "London", "Tokyo").

3.  **Click "Search":**
    * Click the "Search" button. The weather details for the entered city will then be displayed below.

## Project Structure

.
├── index.html          # Main HTML file for the dashboard
├── style.css           # CSS file for styling
└── script.js           # JavaScript file for functionality and API calls
└── README.md           # This README file


## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request


## Contact

Shivam Jaiswal - [shivamjais11b43@gmail.com]
Project Link: [https://github.com/Shivam-Devz/Weather-Dashboard]