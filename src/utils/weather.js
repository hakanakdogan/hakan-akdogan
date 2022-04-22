const axios = require("axios");

const weather = async (lat, long) => {

    try {
        const url = `http://api.weatherstack.com/current?access_key=cd88b468d1eeeffd9a5367134c724ac1&query=${lat},${long}&units=m`;
        const response = await axios.get(url);
        console.log(response)
        if(response.data === null){
            return {
                error:"Something went wrong"
            }
        }else{
            const temp = response.data.current.temperature;
            const pressure = response.data.current.pressure;
            const humidity = response.data.current.humidity;


            return {
                temp,
                pressure,
                humidity
            }
        }

        
    } catch (error) {
        console.log("error");
    }


}

module.exports = weather;

weather("40.18333","29.06667");