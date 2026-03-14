async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "bdf3ad307b1876bf6e9b6529295ad80e";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        const temperature = data.main.temp;
        const description =
    data.weather[0].description.charAt(0).toUpperCase() +
    data.weather[0].description.slice(1);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    document.getElementById("weatherResult").innerHTML = `
    <h2>${city}</h2>
    <p><strong>Temperature:</strong> ${temperature}°F</p>
    <p><strong>Condition:</strong> ${description}</p>
    <p><strong>Humidity:</strong> ${humidity}%</p>
    <p><strong>Wind Speed:</strong> ${windSpeed} mph</p>
`;

    } catch (error) {
        document.getElementById("weatherResult").innerHTML =
            `<p>Error: ${error.message}</p>`;
    }
}document.getElementById("cityInput")
.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});