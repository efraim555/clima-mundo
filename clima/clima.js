const axios = require('axios');

const getClima = async (lat, lng) => {

    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=bf1a95052d3917a8bee62e138ea3e6ac`);

    return clima.data.main.temp;
};

module.exports = {
    getClima
};