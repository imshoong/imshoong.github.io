const API_KEY = '455995583bcecd1bcfebe92efbcace86';

const onGeoSuccess = function (position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

	fetch(url)
	.then((response) => response.json())
	.then((data) => {
		const city = document.querySelector('.weatherContainer .city');
		city.innerText = data.name;
		const weather = document.querySelector('.weatherContainer .weather');
		weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
	});
};
const onGeoError = function () {
	alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
