const input = document.querySelector('.input');
const findBtn = document.querySelector('.find-btn');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.description');
const icon = document.querySelector('.icon')


const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=a4880cd2043966f6c4ac538827d254f2';
const API_UNIT = '&units=metric';




const getWeather = () => {
    const cityName = input.value || 'Warsaw';
    const URL = API_URL + cityName + API_KEY + API_UNIT;

    axios.get(URL).then(res => {

        const newTemp = res.data.main.temp;
        const newDesc = Object.assign({}, ...res.data.weather);

        city.textContent = res.data.name;
        temp.textContent = Math.floor(newTemp) + "C" + "°";
        desc.textContent = newDesc.main;

        if (newDesc.id >= 200 && newDesc.id < 300) {
            icon.setAttribute('src', './assets/thunderstorm.png')
        } else if (newDesc.id >= 300 && newDesc.id < 400) {
            icon.setAttribute('src', './assets/drizzle.png')
        } else if (newDesc.id >= 500 && newDesc.id < 600) {
            icon.setAttribute('src', './assets/rain.png')

        } else if (newDesc.id >= 600 && newDesc.id < 700) {
            icon.setAttribute('src', './assets/ice.png')

        } else if (newDesc.id >= 700 && newDesc.id < 800) {
            icon.setAttribute('src', './assets/fog.png');

        } else if (newDesc.id === 800) {
            icon.setAttribute('src', './assets/sun.png');

        } else if (newDesc.id >= 800 && newDesc.id < 810) {
            icon.setAttribute('src', './assets/cloud.png');

        } else {
            icon.setAttribute('src', './assets/unknown.png');
        }





    }).catch(error);

}







const loadWeather = (e) => {
    if (e.key === 'Enter') {
        getWeather();
        input.value = "";
    }
}

input.addEventListener('keyup', loadWeather);
findBtn.addEventListener('click', getWeather);
getWeather();