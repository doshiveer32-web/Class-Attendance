const url =
	'https://api.tomorrow.io/v4/weather/forecast';
const apiKey =
	'8DRa71CBFnhb4DTwy5lTQI5ZuAmsaTf3';

const cityCoords = {
	Pune: '18.5204,73.8567',
	Mumbai: '19.0760,72.8777',
	Delhi: '28.7041,77.1025',
	Bangalore: '12.9716,77.5946',
	Chennai: '13.0827,80.2707',
	Kolkata: '22.5726,88.3639'
};

$(document).ready(function () {
	weatherFn('42.3478,-71.0466');
});

function resolveLocation(input) {
	if (!input) return null;
	const trimmed = input.trim();
	if (trimmed.includes(',')) return trimmed;
	return cityCoords[trimmed] || null;
}

async function weatherFn(cName) {
	const location = resolveLocation(cName);
	if (!location) {
		alert('Please enter a valid city or coordinates (lat,lon).');
		return;
	}

	const temp = `${url}?location=${encodeURIComponent(location)}&apikey=${apiKey}`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data, cName, location);
		} else {
			alert(data.message || 'City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
		alert('Error fetching weather data. Check console for details.');
	}
}

function weatherShowFn(data, cName, location) {
	const interval = data?.data?.timelines?.[0]?.intervals?.[0];
	const values = interval?.values;
	if (!values) {
		alert('Weather data unavailable.');
		return;
	}

	const weatherCode = values.weatherCode;
	let iconUrl = 'https://img.icons8.com/emoji/48/000000/cloud-emoji.png';
	if (weatherCode === 1000) iconUrl = 'https://img.icons8.com/emoji/48/000000/sun-emoji.png';
	else if (weatherCode === 1100 || weatherCode === 1101) iconUrl = 'https://img.icons8.com/emoji/48/000000/cloud-emoji.png';
	else if (weatherCode === 4000 || weatherCode === 4001) iconUrl = 'https://img.icons8.com/emoji/48/000000/cloud-with-rain-emoji.png';
	else if (weatherCode >= 2000 && weatherCode < 3000) iconUrl = 'https://img.icons8.com/emoji/48/000000/high-voltage-emoji.png';
	else if (weatherCode >= 5000 && weatherCode < 6000) iconUrl = 'https://img.icons8.com/emoji/48/000000/cloud-with-snow-emoji.png';

	$('#city-name').text(location.includes(',') ? `Coordinates: ${location}` : cName);
	$('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
	$('#temperature').html(`${values.temperature}°C`);
	$('#description').text(`Weather code: ${weatherCode}`);
	$('#wind-speed').html(`Wind Speed: ${values.windSpeed} m/s`);
	$('#weather-icon').attr('src', iconUrl);
	$('#weather-info').fadeIn();
}