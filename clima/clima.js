const axios = require('axios');

const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3847d50c32541bf12d0dd619d23fcd02&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}