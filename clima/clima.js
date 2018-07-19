const axios = require('axios');

const getClima = async (lat,long) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=1e1fc98046e7d8057fb51c4182fc81c5`);
    return resp.data.main;
}

module.exports = {
    getClima
}