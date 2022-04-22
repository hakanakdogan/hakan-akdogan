const axios = require("axios");

const weather = async (lat, long)=>{
    const url = `http://api.weatherstack.com/current?access_key=cd88b468d1eeeffd9a5367134c724ac1&query=${lat},${long}&units=m`;
    const response = await axios.get(url);
    

    const temp = response.data.current.temperature;
    const pressure = response.data.current.pressure;
    const humidty = response.data.current.humidty;

    return {
        temp,
        pressure,
        humidty
    }
    
}

module.exports = weather;

// weather("40.18333","29.06667");