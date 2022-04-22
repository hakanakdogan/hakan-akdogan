const axios = require("axios");

const weather = (lat, long)=>{
    const url = `http://api.weatherstack.com/current?access_key=cd88b468d1eeeffd9a5367134c724ac1&query=${lat},${long}&units=m`;
    axios.get(url)
}